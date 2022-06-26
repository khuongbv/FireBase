import React, { useEffect, useState }  from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import Login from "./components/Login";

import { auth, storeUserInfo, updateUser } from "./lib/firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };
  
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

export default App;
