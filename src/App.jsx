// import logo from './logo.svg';
import './App.css';
import {Counter} from "./component/couter"
import {ShowtheCount} from "./component/showtheCount"
function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
    <Counter/>
    <ShowtheCount/>
    </div>
  );
}

export default App;
