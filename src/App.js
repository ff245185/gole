import logo from './logo.svg';
import './App.css';
import Home from './page/Home/Footer/Navebar/Home'
import Navebar from './page/Home/Footer/Navebar/Navebar';
import Footer from './page/Home/Footer/Navebar/Footer';

function App() {
  return (
    <div className="App">
       <Navebar></Navebar>
       <Home></Home>
       <Footer></Footer>
    </div>
  );
}

export default App;
