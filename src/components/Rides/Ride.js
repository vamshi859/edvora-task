import React from 'react';
import './styles.css';

const Ride = ( props ) => {
    const { 
        id,
        origin_station_code,
        station_path,
        date,
        state,
        city,
        station_code,
        map_url
    } = props;

    console.log(props)

    const d = new Date(date);

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

    // time
    const _date = d.toDateString().split(" ");
    const _time = d.toTimeString().substring(0, 5)
    const txtDate =  `${ _date[2] }th ${ _date[1] } ${ _date[3] } ${ _time }` ;

    const distance = calculateDistance( station_path,  station_code );

    return (
        <div className='container'>
            <div className = "ride">
                <div className = "_map">
                    <img src = { map_url } alt = "map"/>
                </div>

                <div className = "ride_d">
                    <p>
                        Ride Id : {" "}
                        <span 
                        className = "val">
                            { id }
                        </span>
                    </p>

                    <p>
                        Origin Station : {" "}
                        <span 
                        className = "val">
                            { origin_station_code }
                        </span>
                    </p>

                    <p>
                        station_path : {" "}
                        <span 
                        className = "val">
                            { `[${ station_path.join(", ") }]` }
                        </span>
                    </p>

                    <p>
                        Date: {" "}
                        <span 
                        className = "val">
                            { txtDate }
                        </span>
                    </p>
                    
                    <p>
                        Distance: {" "}
                        <span 
                        className = "val">
                            { distance }
                        </span>
                    </p>
                </div>


                <div className = "badges">
                    <span className = "badge" >{ city }</span>
                    <span className = "badge" >{ state }</span>
                </div>
            </div>
        </div>
    );
};

export default Ride;