import React, { useContext, useEffect, useState } from 'react';

const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({children}) => {
  const [user,setUser] = useState({})
  const [ride,setRide] = useState([])
  const [filters, setFilters] = useState({state:"",city:""});
  const [status,setStatus] = useState("")
  
  const fetchRide = async () => {
    await fetch('https://assessment.api.vweb.app/rides')
    .then((response) => response.json())
    .then((res) => {
      // console.log(res)
      setRide(res)
    })
  }

  const fetchUser = async () => {
    await fetch('https://assessment.api.vweb.app/user')
    .then((response) => response.json())
    .then((res) => {
      // console.log(res)
      setUser(res)
    })
  }

  useEffect(() => {
    fetchRide()
    fetchUser()
  },[])

  const upcomingRides = () => {
    const date = new Date();
    const now = date.getTime();

    return ride.filter((ele) => {
      const filterState = filters.state ? ele.state === filters.state : !filters.state;
      const filterCity = filters.city ? ele.city === filters.city : !filters.city;
      // return (ele.date * 1000 >= now) && filterState && filterCity
      return (new Date(ele.date).getTime() >= now) && filterState && filterCity
    });
  }

  const pastRides = () => {
    const date = new Date();
    const now = date.getTime();

    return ride.filter((ele) => {
      
      const filterState = filters.state ? ele.state === filters.state : !filters.state;
      const filterCity = filters.city ? ele.city === filters.city : !filters.city;
      // return (ele.date * 1000 >= now) && filterState && filterCity
      return (new Date(ele.date).getTime() < now) && filterState && filterCity
    })
  }

  const allRides = () => {
    return ride.filter((ele) => {
      const filterState = filters.state ? ele.state === filters.state : !filters.state;
      const filterCity = filters.city ? ele.city === filters.city : !filters.city;

      return filterState && filterCity
    })
  }

  const getRides = () => {

    switch(status) {
        case "upcoming": 
        return upcomingRides();

        case "past": 
        return pastRides();

        default: 
        return allRides();
    }
}

  
  const handleStatus = ( state ) => {
    setStatus( state );
}

const handleFilters = ( obj ) => {
    setFilters( obj );
} 

  const value ={ 
    ride,
    user,
    upcomingRides,
    pastRides,
    allRides,
    filters,
    status,
    handleStatus,
    handleFilters,
    getRides
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;