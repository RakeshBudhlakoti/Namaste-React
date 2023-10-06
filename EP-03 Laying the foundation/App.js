import React from "react"; 
import ReactDOM from 'react-dom/client'; 

//JSX Element

const headingsJSX = <h1 id="heading">Namaste React from JSX</h1>;

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(headingsJSX);