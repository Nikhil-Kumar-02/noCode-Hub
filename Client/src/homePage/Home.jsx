import React from "react"
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      home
      <button>
        <Link to="build">Go To Build Page</Link>
      </button>
    </div>
  )
};

export default Home;
