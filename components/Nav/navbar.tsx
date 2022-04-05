import React from 'react'

interface Props{ 
    username: string;
}

const Navbar: React.FC<Props> = ({username}: Props) => {

  return (
    <div>
      Navbar
      <p>{username}</p>
      <ul>
        <li>Home</li>
        <li>My List</li>
      </ul>
    </div>
  );
}

export default Navbar;