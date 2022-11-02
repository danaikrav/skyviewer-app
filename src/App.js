import "./App.css";
import Header from "./components/UI/Header"
import SearchForm from "./components/Search Engine/SearchForm";
//import Flights from "./components/Flights/Flights";

import NewUser from "./components/User Form/NewUser";
import UserForm from "./components/User Form/UserForm";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UserForm></UserForm>
    </div>
  );
};

export default App;
