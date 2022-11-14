// import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";




const Home = ({setBackground}) => {
 return (
  <main className="home-main">
   <section className="home-notes">
    <div className="home-note">
     <h2 className="home-title">So, you want to travel to</h2>
     <h1 className="home-space">space</h1>
     <p className="article">Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
    </div>
   </section>
   <section className="explore">
    <div className="explore-box">
     <Link to='/destination'>
     <h2 className="explore-text" onClick={()=> setBackground('destination')}>EXPLORE</h2>
     </Link>
    </div>
   </section>
  </main>
 )
}

export default Home;