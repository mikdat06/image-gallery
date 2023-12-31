import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <>
      <h1>Image Gallery</h1>
      <div className="home">
        {data.map((item, index) => (
          <div key={index}>
            <Picture item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
