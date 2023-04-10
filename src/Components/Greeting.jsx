import React, { useState } from "react";

function Greeting() {
  // Array of greetings
  const greetings = ["Hello","Good Morning", "Hii", "Have a good day", "Good Luck"];

  // State for current greeting
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  // Function to handle button click
  const handleButtonClick = () => {
    setCurrentGreetingIndex((prevIndex) =>
      prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
      // -1) for going till last index
      // 0) for starting index count
      // +1) count by +1 indexing
    );
  };

  return (
    <div>
      <h1>{greetings[currentGreetingIndex]}</h1>
      <button onClick={handleButtonClick}>Show Greeting</button>
    </div>
  );
}

export default Greeting;
