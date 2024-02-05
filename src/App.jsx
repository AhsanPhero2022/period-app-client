import { Outlet } from "react-router-dom";
import "./App.css";


import NavItem from "./components/Home/NavItem";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <NavItem></NavItem>
      <div className="min-h-[560px]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
