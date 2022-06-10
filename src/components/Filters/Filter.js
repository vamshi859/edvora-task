
import React,{ useState } from 'react';
import { useStore } from '../../context/Store';

import { BsFilterLeft } from 'react-icons/bs';
import './styles.css';
import DropDown from './DropDown';

export const Filters = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    const { handleStatus, upcomingRides, pastRides } = useStore()

    const upcomingCount = upcomingRides().length;
    const pastCount = pastRides().length;
    
    console.log(showMenu);
    return (
        <div className='container'>
            <div className = "filter">
                <ul className = "links" >
                    <li
                        onClick = { () => handleStatus("") }
                        className = "nearestRide">
                        Nearest rides
                    </li>

                    <li
                         onClick = { () => handleStatus("upcoming") }
                         className = "upcoming"> 
                        <span>
                          Upcoming rides 
                          {`(${ upcomingCount })`}</span>
                    </li>

                    <li
                    onClick = { () => handleStatus("past") }
                    className = "past">
                        <span>
                          Past rides 
                          {`(${ pastCount })`}</span>
                    </li>
                </ul>

                <div className = "filter_relative">
                    <div 
                    onClick = { () => setShowMenu( prev => !prev ) }
                    className = "btn_filter" 
                    role = "button">
                        <span className = "icon">
                            <BsFilterLeft />
                        </span>
                        Filters
                    </div>

                    { 
                        showMenu ? 
                        <DropDown /> : <></>

                    } 
                </div>
            </div>

        </div>
    );
};