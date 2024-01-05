import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
  }, [dispatch]);

  const handleFetch = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h1>User Data</h1>
      <button onClick={handleFetch}>Fetch Data</button>
      {loading && <p>Loading data...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
