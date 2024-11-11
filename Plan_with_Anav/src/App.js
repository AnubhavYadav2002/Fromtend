import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours,setTours] = useState(data)
  function removeTour(id){
    const newTour = tours.filter(tour=> tour.id !== id)
    setTours(newTour)
  }
   
  if(tours.length===0){
    return (<div className="NoTour">
     <h1>No Tour Left</h1>
     <button className="refresh-btn" onClick={()=>setTours(data)}>Refresh</button>
    </div>)


  }
  return (
    <div>
   <div className="container">
   <h1 className="Tour-head">Plan With Anav</h1>
   </div>
   <div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
    </div>
  )
};

export default App;
