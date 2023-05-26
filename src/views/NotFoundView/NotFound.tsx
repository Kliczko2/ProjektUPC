import React from 'react'
import {Link} from 'react-router-dom';



function NotFound() {
    return (
      <div>
        <h2>Not Found</h2>
        <p>
          <Link to="/">Go back to the home page</Link>
        </p>
      </div>
    );
  }
  export default NotFound