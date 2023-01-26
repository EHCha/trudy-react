import '../Profile/Profile.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async() => {
      try {
        setError(null);
        setUsers(null);
        setLoading(null);
        const response = await axios
        .get('https://jsonplaceholder.typicode.com/users');

          setUsers(response.data);
          console.log(response.data)
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUsers();
    }, []);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러</div> 
    if (!users) return null;
  return(
    <div>
      <ul>
        {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
        ))}
      </ul>
    </div>
    );
  }

export default Profile;