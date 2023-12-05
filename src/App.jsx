import { Outlet } from "react-router-dom";
import "./App.css";


import NavItem from "./components/Home/NavItem";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <NavItem></NavItem>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
