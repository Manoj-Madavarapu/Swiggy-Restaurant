import React,{Component} from "react"
export default class Navbar extends Component {
    render(){
        return (
      <>
       <nav>
        <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#order">Order</a></li> 
        </ul>
       </nav>
      </>
        )
    }
}