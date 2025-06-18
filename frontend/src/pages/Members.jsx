// Members Page 
import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import Navbar from '../components/Navbar';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    API.get('/members').then(res => setMembers(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h2>Members</h2>
      <ul>
        {members.map(member => <li key={member._id}>{member.name}</li>)}
      </ul>
    </>
  );
};

export default Members;
