import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </p>
    </div>
  );
}

export default UserCard;