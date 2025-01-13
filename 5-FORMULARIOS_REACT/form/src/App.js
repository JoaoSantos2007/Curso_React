import './App.css';
import MyForm from './components/MyForm.js';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Jose", email: "jose@email.com", bio: "eu sou dev", role: "admin" }}/>
    </div>
  );
}

export default App;
