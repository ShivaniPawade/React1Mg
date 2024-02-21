import React from 'react'
import { callRequest } from '../../assets'
import './Layout.css'
const NavbarCards = () => {
    return (
            <div className="cards d-flex p-3">
                <div className="icon-background">
                    <img className="icon" src={callRequest}></img>
                </div>
                <div className='pt-3'>
                    <h4 className="call-type mb-0">Call Requested</h4>
                    <p className="price">+9.54%</p>
                </div>
                <h3 className="number">2400</h3>
            </div>
    )
}
export default NavbarCards;