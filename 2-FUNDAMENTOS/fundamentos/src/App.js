//components
import FirstComponent from './components/FirstComponent.js';
import TemplateExpressions from './components/TemplateExpressions.js';

//css
import './App.css';
import MyComponent from './components/MyComponent.js';
import Events from './components/Events.js';
import Challenge from './components/Challenge.js';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
