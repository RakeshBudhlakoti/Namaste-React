import React from "react";
import ReactDOM from "react-dom/client";

// React Component
// Class based component : OLD Way to writing code
// Function based component : New way to writing code

// React Function based component :

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 id="heading" className="heading" tabIndex="1">
        Namaste React from JSX Component
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);