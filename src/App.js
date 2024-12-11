import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! Este é um teste de Integração Contínua!
        </p>
        <a
          className="App-link"
          href="https://github.com/ben-sabino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse aqui o meu Github
        </a>
      </header>
    </div>
  );
}

export default App;
