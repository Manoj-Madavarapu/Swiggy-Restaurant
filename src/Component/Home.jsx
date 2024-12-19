import React,{Component} from "react"
export default class Home extends Component {
    render(){
        return (
      <>
       <div className="bg" id="home">
         <div className="images">
            <img src="https://c0.wallpaperflare.com/preview/697/608/1011/honey-rose-lavendar-icecream.jpg" alt="" className="img1 zoom"  />
            <img src="https://as2.ftcdn.net/v2/jpg/08/57/00/27/1000_F_857002781_5AHIu169OivjmsXwJEQEKk6GxsSuyTrM.jpg" alt="" className="img3 zoom"/>
            <img src="https://c0.wallpaperflare.com/preview/697/608/1011/honey-rose-lavendar-icecream.jpg" alt=""  className="img4 zoom"/>
            <img src="https://media.istockphoto.com/id/182409111/photo/shrimp-and-beef-skewers.jpg?s=612x612&w=0&k=20&c=FEw5fJcT787lPMBTBsT68RgBZN64x8XQkR1xy7B9NXk=" alt="" className="img5 zoom"/>
            <img src="https://thumbs.dreamstime.com/b/chef-ai-restaurant-kitchen-aig-assistant-as-interactive-recipe-book-providing-culinary-techniques-various-dishes-322448206.jpg" alt="" className="img6" />
            <img src="https://www.shutterstock.com/shutterstock/videos/1108133185/thumb/1.jpg?ip=x480" alt="" className="img7 zoom" />
         </div>
           <div className="desc">
            <h1 className="heading">Welcome to</h1>
            <h1 className="heading">🍔Swiggy Restarunt🍔</h1>
            <p>The restaurants that are talk of the town.lorem20 Look out for more such popular placesA restaurant is an establishment that prepares and serves food and drinks to customers. </p>
           <div className="rating">
           <div className="exp">
               <h1 className="num">10</h1>
               <span>Years Of <h1>Experience</h1></span>
           </div>
           <div className="chefs">
               <h1 className="num">10</h1>
               <span>Popular <h1> Master Chefs</h1> </span>
           </div>
           </div>
           <button>Read more...</button>
           </div>
       </div>
      </>
        )
    }
}