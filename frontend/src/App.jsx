import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar/>
      <div className="hero bg-base-200 min-h-screen">

        <div className="hero-content text-center">
          <Product/>
        </div>
      </div>
    </>
  );
}

export default App;
