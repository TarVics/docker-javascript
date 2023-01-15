import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then(value => setUser(value.data))
  }, [])

  return (
      <div>
        <h1>Users:</h1>

        {users.map(value => <div key={value._id}>{value.name}</div>)}
      </div>
  );
}

export {App}
