import React, { useState } from 'react'
import MapAutoComplete from './MapAutoComplete'
import MapComponent from './MapComponent'
import { Location } from '../../assets'
import AmbulanceInformation from './AmbulanceInformation'

const CommonMaps = (props) => {
  const [currentMarker, setcurrentMarker] = useState(null)
  return (
    // <div className={currentMarker!=null ? "d-flex":""}>
    <div className={"d-flex"}>
      <div className="map common-border position-relative w-100  ">
        <div className="d-flex justify-content-between">
          <div className="display-search d-flex justify-content-around align-items-center px-3">
            <img src={Location}></img>
            <h2 className="sector mb-0">Sector 17, Gurgaon</h2>
            <h2 className="sector green mb-0">28.47 N - 77.04 E</h2>
          </div>
          <div className=" map-auto-complete">
            <div>
              {/* <img src={search}></img> */}
              <MapAutoComplete />
            </div>
          </div>
          {/* <div >
          <AmbulanceInformation />
        </div> */}
        </div>
        <MapComponent setcurrentMarker={setcurrentMarker}/>
      </div>
      {currentMarker != null ? <AmbulanceInformation setcurrentMarker={setcurrentMarker}/> : null}
    </div>
  )
}

export default CommonMaps
