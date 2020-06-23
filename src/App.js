import React from 'react';
import { Link } from 'react-router-dom'

function App() {
  document.title = "Welcome"

  return (
    <div>
      <ul>
        <li>
          You must be logged in to view the Dashboard <br />
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
          Register and login here <br />
          <Link to="/welcome"> Welcome</Link>
        </li>
        <li>
          Edition design <br />
          <Link to="/edition"> Welcome</Link>
        </li>
      </ul>
    </div>
  );

}

export default App;
