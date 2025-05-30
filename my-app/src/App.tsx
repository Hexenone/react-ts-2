import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetails/UserDetails';
import type { User } from './types/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => setIsError(true))
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
