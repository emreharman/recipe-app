import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  //API Stuff
  const APP_ID = "daa7e070";
  const APP_KEY = "2a8b00de2155576da5b9764acef0426a";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
