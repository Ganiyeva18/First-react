import React from 'react';
import canva from '../assets/canva.png'

export default function AboutUs() {
    return(
<div className='container'>
        <div className='row row-cols-1 row-cols-md-2'>
            <div className='col'>
                <h6 className='text-warning'>Know more about us</h6>
            <h1>We source sustainable & line caught Foods</h1>
<p>Edit this text to make it your own. To edit, simply click directly on the text to start <br /> adding your own words. You can move the text by dragging and <br /> dropping the text anywhere on the page. </p>
            <div className='statistics'>
                <div className='statistic'>
<h5>10+ People</h5>
<p>We are Small Team</p>
<p>Through True Rich <br /> Attended does no end <br /> it his mother since favourable.</p>
 </div>
 <div className='statistic'>
    <h5>2014</h5>
    <p>We are From</p>
    <p>Through True Rich <br /> Attended does no end <br /> it his mother since favourable.</p>
</div>
<div className='statistic'>
<h5>200K</h5>
    <p>We served</p>
    <p>Through True Rich <br /> Attended does no end <br /> it his mother since favourable.</p>
</div>
        </div>
 <button className='btn btn-warning rounded-0'>View More <i className='fas fa-arrow-right text-dark'></i></button>

            </div>

            <div className='col'>
                <img src={canva} alt="" width={"100%"} height={"420vh"}/>
            </div>


    </div>
    </div>
    )
    
}
