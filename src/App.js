import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="App">
      <h1>GitHub User Finder</h1>
      <SearchBar onSearch={fetchUser} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;