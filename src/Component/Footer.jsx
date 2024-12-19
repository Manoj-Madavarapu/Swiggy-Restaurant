import React,{Component} from "react"
export default class Footer extends Component{
    render(){
        return (
            <>
               <div id="footer">
               <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" className="f_img"/>
               <h5>@ Copy rights 2024</h5>
               <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#order">Order</a></li>
               </ul>
               <h2>Social Links</h2>
               <div className="apps">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="" />
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/034/800/663/small_2x/x-new-twitter-logo-free-png.png" alt="" />
                <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" alt="" />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/480/small/whatsapp-icon-free-png.png" alt="" />
               </div>
               </div>
            </>
        )
    }
}