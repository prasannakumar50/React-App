import React from "react";
import ReactDOM  from "react-dom";


const FunctionComponent = () =>(
    <div>
       <h1>Its Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionComponent />);