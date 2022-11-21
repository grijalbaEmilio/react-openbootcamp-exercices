// import logo from "./logo.svg"
import "./App.css";
// import TaskListComponent from "./components/containers/task_list";
import ComponentA from "./components/componentA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name={2}></Greeting> */}
        <ComponentA/>
      </header>
    </div>
  );
}

export default App;
