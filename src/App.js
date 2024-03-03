import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="AppCiphers" aboutText="About AppCiphers"/> */}
      {/* <Navbar/> */}
      <Navbar title="AppCiphers"/>
      <div className="container mb-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
