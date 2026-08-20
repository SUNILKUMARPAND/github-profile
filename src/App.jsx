import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    if (!username) return;
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError("User not found!");
    }
  };

  return (
    <div className="container">
      <h1>GitHub Profile Finder</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchProfile}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {profile && (
        <div className="card">
          <img src={profile.avatar_url} alt="avatar" />
          <h2>{profile.name || profile.login}</h2>
          <p>{profile.bio}</p>
          <div className="status">
            <span>Followers: {profile.followers}</span>
            <span>Following: {profile.following}</span>
            <span>Repos: {profile.public_repos}</span>
          </div>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

