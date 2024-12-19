import React,{Component} from "react";
import "./Component/style.css"
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Order from "./Component/Order";
import Footer from "./Component/Footer"
export default class Swiggy extends Component{
    render(){
        return (<>
            <Navbar/>
           <Home/>
           <About/>
           <Menu/>
           <Order/>
           <Footer/>
        </>)
    }
}