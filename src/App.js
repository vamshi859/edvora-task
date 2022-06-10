import React from "react";

import {useStore} from '../src/context/Store'
import { Filters } from "./components/Filters/Filter";
import Navbar from "./components/NavBar";
import Rides from "./components/Rides/Rides";

const App = () => {
  const {ride,user,upcomingRides,pastRides,getRides} = useStore();
  // if(ride.length>0)
  // {
  //   console.log(ride)
  //   console.log(new Date(ride[0].date).getTime() * 1000)
  // }
  console.log(user)
  // console.log(upcomingRides())
  // console.log(pastRides())
  console.log(getRides())
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <Rides />
    </div>
  );
}

export default App;
