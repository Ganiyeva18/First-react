import React from 'react';
import rasm from '../assets/coffee.png'
import rasm1 from '../assets/cup cake.png'
import rasm2 from '../assets/burger.png'
import rasm3 from '../assets/fri.png'
import rasm4 from '../assets/sendwich.png'
import rasm5 from '../assets/soup.png'
import rasm6 from '../assets/quafe.png'
import rasm7 from '../assets/Dolgona.png'
import rasm8 from '../assets/chowmin.png'
import rasm9 from '../assets/cola.png'
import rasm10 from '../assets/fruit.png'
import rasm11 from '../assets/coctail.png'

export  default function Ourmenu() {

    return(
        <div className='container'>
            <div className='mb-5 row row-cols-1 row-cols-md-2 g-3 '>
                <div className='col'>
                <h1>Discover <br /> 
Our menu Chart</h1>
                </div>
                <div className='col'>
                    <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                <div className='col'>
                  <img src={rasm} alt="" width={"100%"} height={"300vh"}/>
                  <p>Drp Cofee</p>
                </div>
                <div className='col'>
                    <img src={rasm1} alt="" width={"100%"} height={"300vh"}/>
                    <p>Choco cup cake</p>
                </div>
                <div className='col'>
                    <img src={rasm2} alt="" width={"100%"} height={"300vh"}/>
                    <p>Chicken Burger</p>
                </div>
                <div className='col'>
                   <img src={rasm3} alt="" width={"100%"} height={"300vh"}/> 
                   <p>French Fries</p>
                </div>
                <div className='col'> 
                    <img src={rasm4} alt="" width={"100%"} height={"300vh"}/>
                    <p>Sandwich</p>
                </div>
                <div className='col'>
                    <img src={rasm5} alt=""width={"100%"}height={"300vh"} />
                    <p>Chinese Soup</p>
                </div>
                <div className='col'>
                    <img src={rasm6} alt="" width={"100%"} height={"300vh"}/>
                    <p>Quafe Brade</p>
                </div>
                <div className='col'>
                    <img src={rasm7} alt=""  width={"100%"} height={"300vh"}/>
                    <p>Dalgona Cofee</p>
                </div>
                <div className='col'>
                    <img src={rasm8} alt=""  width={"100%"} height={"300vh"}/>
                    <p>Chowmin Noodle</p>
                </div>
                <div className='col'>
                    <img src={rasm9} alt="" width={"100%"} height={"300vh"}/>
                    <p>Coka Cola</p>
                </div>
                <div className='col'>
                    <img src={rasm10} alt="" width={"100%"} height={"300vh"}/>
                    <p>Fruit Salad</p>
                </div>
                <div  className='col'>
                    <img src={rasm11} alt="" width={"100%"} height={"300vh"} />
                    <p>Coctail</p>
                </div>
               </div>
               </div>
            

    )
}

