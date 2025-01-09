import React from "react"
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Home = (props) => {
  return (
    <div>
      home
      <button className="text-black border-spacing-2 ml-5 ">
        <Link to="build">Go To Build Page</Link>
      </button>
      <div>
      <Button>Click me</Button>
    </div>
    </div>
  )
};

export default Home;
