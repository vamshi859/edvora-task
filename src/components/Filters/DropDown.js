import React, { useState } from 'react';
import './styles.css';
import { useStore } from '../../context/Store';
const DropDown = ({ setMenu }) => {

    const { filters, handleFilters, ride } = useStore();
    const [states,] = useState([])
    const [cities,] = useState([]);
    var smap = new Map();
    var cmap = new Map();
    console.log(filters)
    console.log(ride);
    if(ride.length>0){
      ride.map((ele) => {
        if(smap.get(ele.state)==null){
          smap.set(ele.state,ele.state)
        }
        return smap
      })

      ride.map((ele) => {
        if(cmap.get(ele.city)==null){
          cmap.set(ele.city,ele.city)
        }
        return cmap
      })
    }
    smap.forEach((value, key) => {
        states.push(value)
        console.log(value, key)
    })

    cmap.forEach((value, key) => {
      cities.push(value)
      console.log(value, key)
  })

    console.log(states.length)
    console.log(cities.length)

    return (
        
        <ul className = "drop_menu" >
            <li>Filters</li>
            
            <li>
                <select 
                onChange = { ({ target }) => handleFilters({ ...filters, state: target.value }) } 
                value = { filters.state } 
                className = "control">
                    <option value = "">State</option>
                    {
                        states && states.map((state) => {
                            return (
                                <option value = {state}>{state}</option>
                             )
                        })
                    }
                </select>
            </li>
            
            <li>
                <select 
                onChange = { ({ target }) => handleFilters({ ...filters, city: target.value }) }
                value = { filters.city } 
                className ="control">
                    <option value = "">City</option>
                    {
                      filters.state!=="" ? 
                      ride && ride.filter((ele) => {
                        return ele.state === filters.state
                      }).map((ele) => {
                        return (
                          <option value = {ele.city}>{ele.city}</option>
                          )
                      }) :
                        cities && cities.map((city) => {
                            return (
                                <option value = {city}>{city}</option>
                            )
                        })
                    }
                </select>
            </li>
        </ul>
    );
};

export default DropDown;