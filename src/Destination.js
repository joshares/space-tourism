import { useState, useEffect } from "react";
import data from './data/destination';
import moon from './assets/destination/image-moon.png';
import mars from './assets/destination/image-mars.png'
import europa from './assets/destination/image-europa.png'
import titan from './assets/destination/image-titan.png'
import { NavLink } from "react-router-dom";


const Destination = () => {
 const [datas, setDatas] = useState(data[0]);
 const [name, setName] =  useState('DOUGLAS HURLEY')
 const [bio, setBio] =  useState('')
 const [distance, setDistance] = useState('')
 const [travel, setTravel] = useState('')
 const [page, setPage] = useState(0)
 const [image, setImage] = useState(moon)
 const images = [moon, mars, europa, titan]
  const [active, setActive] = useState('0')

 const fetchCrew = () => {
  setDistance(datas.distance)
  setTravel(datas.travel)
  setName(datas.name)
  setBio(datas.description)
  setImage(images[page])
  setDatas(data[page])
 }
 const handleClick = (event) => {
  setPage(event.target.id)
  setActive(event.target.id)
 }

 useEffect(() => {
   fetchCrew()
 },[fetchCrew])
 return (
  <main className="dest-main">
   <section className=" dest-images">
    <div><h2 className="dest-title title"> <span className="dest-num num">01</span> PICK YOUR DESTINATION</h2></div>
    <div>
     <img className="dest-image rotate-image"  src={image}/>
    </div>
   </section>
   <section className="dest-notes">
    <div className="dest-buttons">
     <button id={'0'} onClick={handleClick}
      className={active === '0' ? 'dest-button bio active-dest' : 'dest-button bio'} >moon</button>
     <button id={'1'} onClick={handleClick}
      className={active === '1' ? 'dest-button bio active-dest' : 'dest-button bio'}  >mars</button>
     <button id={'2'} onClick={handleClick}
      className={active === '2' ? 'dest-button bio active-dest' : 'dest-button bio'}  >europa</button>
     <button id={'3'} onClick={handleClick}
      className={active === '3' ? 'dest-button bio active-dest' : 'dest-button bio'} >titan</button>
    </div>
    <div>
     <h1 className="dest-name">{name}</h1>
     <p className="bio">{bio}</p>
    </div>
    <div className="underline"></div>
    <footer className="footer">
     <div>
      <p className="bio">AVG. DISTANCE</p>
      <h2 className="">{distance}</h2>
     </div>
     <div>
      <p className="bio">EST TRAVEL TIME</p>
      <h2 className="">{travel}</h2>
     </div>
    </footer>
   </section>
  </main>
 )
}

export default Destination;