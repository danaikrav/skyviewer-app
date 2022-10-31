import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>SKYVIEWER</h1>
        <h2>Search your flights easily</h2>
        <form>
          <d>Origin:</d>
          <select name="origin">
            <option value="bronx">Bronx</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="manhattan">Manhattan</option>
            <option value="queens">Queens</option>
            <option value="statenisland">Staten Island</option>
          </select>
          <d>Destination:</d>
          <select name="destination">
            <option value="bronx">Bronx</option>
          </select>
          <h3></h3>
          <label>One way:</label>
          <input type="checkbox"></input>
          <h3></h3>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
