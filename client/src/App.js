import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  //1.コールバック関数, 2.配列(依存関係)
  useEffect(() => {
    // 最初に読み込まれた一回だけ
    axios
      .get('http://localhost:8000/user', { headers: { apikey: 'key123' } })
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <ul>
              {user.skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default App;
