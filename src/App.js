import logo from './logo.svg';
import './Style/App.css';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <h1>Brenna (Raine) Sermania</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
