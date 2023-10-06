import React from "react"; 
import ReactDOM from 'react-dom/client'; 

// React Element

const headings = React.createElement("H1", {id: "heading"},"Namaste React");

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(headings);