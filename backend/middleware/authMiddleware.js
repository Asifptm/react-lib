import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// In-memory request rate tracking (you can improve this using Redis in production)
let requestCounts = {};

// Rate limiter middleware
export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  requestCounts[ip] = requestCounts[ip] ? requestCounts[ip] + 1 : 1;

  if (requestCounts[ip] > 100) {
    return res.status(429).json({ message: 'Too many requests' });
  }

  setTimeout(() => {
    requestCounts[ip] = Math.max(0, requestCounts[ip] - 1);
  }, 60000); // 60 seconds

  next();
};

// Authenticate middleware using JWT
export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role, email, ... }
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Role-based access control (admin only)
export const authorizeAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};
