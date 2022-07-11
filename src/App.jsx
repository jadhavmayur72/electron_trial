// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {Counter} from "./component/couter"
// import {ShowtheCount} from "./component/showtheCount"
function App() {
  const [change,setChange]= React.useState('')
 
  return (
    <div className="App">
   <h1>hello</h1>
   <input type="file" accept='folder'  webkitdirectory='true'  multiple />
    </div>
  );
}

export default App;
