
import './App.css';
import Sales from './Static-Pages/SalesPage/Sales';
import Login from './Static-Pages/LoginPage/Login';
// import Register from './Static-Pages/RegisterPage/Register';

function App() {
  return (
    <div>
      <h1>App is ready to start</h1>
      <Login />
      {/* <Register /> */}
      <Sales />
    </div>
  );
}

export default App;
