import React from 'react'
import { useStore } from '../../context/Store';
import Ride from './Ride';

const Rides = () => {
  const {user,getRides} = useStore();

  const calculateDistance = (path, stationCode) => {
    let pointer = Math.abs(path[0] - stationCode);
    let length = path.length;
    for(let i=0;i<length;i++) {
      if(i===0) {
        continue;
      }
      break;
    }
    return pointer;
  }

  const sortByNearest = (ride,stationCode) => {
    return ride.sort((a,b) => {
      let A = a.station_path;
      let B = b.station_path;

      return calculateDistance(A,stationCode) - calculateDistance(B,stationCode)
    })
  }

  const ride = sortByNearest(getRides(),user.station_code);
  console.log(ride);
  return (
    <div>
      {
        ride ? ride.map((ele,index) => {
          return (
            <Ride key={index} station_code={user.station_code} { ...ele } />
          )
        }) : <h1 style={{color:"white"}}>No Results</h1>
      }
    </div>
  )
}

export default Rides;