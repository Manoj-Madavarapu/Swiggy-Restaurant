import Reacr,{Component} from "react"
export default class Menu extends Component{
    render(){
        return(
            <>
            <div id="menu">
            <h1>Swiggy Menu <span>With Numerous Items</span></h1>
                 <img src="https://img.freepik.com/premium-vector/digital-restaurant-corporate-menu-flyer-template-design_1116848-10.jpg?semt=ais_hybrid" alt="" />
            </div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" className="left_side_image"/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" className="right_side_image"/>
            </>
        )
    }
}