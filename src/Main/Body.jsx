import React from 'react';
import coffe from '../assets/coffe.jpg'
function Body() {
    return(
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2' style={{margin:"9% 0 15% 0"}}>
                <div className='col'>
                <h1>We serve high quality <br />   foods of all kinds.</h1>
                <p>Edit this text to make it your own. To edit, simply click directly on the text to <br /> start adding your own words. You can move the text.</p>
                <button className='btn btn-warning rounded-0  mt-2 mb-5'>View more <i className='fas fa-arrow-right text-dark'></i></button>
                <h5>Opening time</h5>
                <p>Sunday to Saturday  l  09:00 AM to 11:00 PM</p>
                <h5>Location</h5>
                <p>Master canteen, BBSR , Odisha 752054</p>
                <h5>Call us</h5>
                <p>+9776462441</p>
                </div>
                <div className='col'>
                    <img src={coffe} alt="" width={"100%"} height={"500vh"} />
                </div>
            </div>
        </div>
    )
}

export default Body;