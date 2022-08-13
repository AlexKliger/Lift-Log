import './App.css';
import Log from './components/Log'
import Header from './components/Header'
import Login from './components/Login'
import { DELETE } from './util/fetch'

async function logout() {
  DELETE('auth/logout')
}

function App() {
  return (
    <div>
      <Header />
      <Log />
      <Login />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
