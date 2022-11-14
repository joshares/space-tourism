import { useState, useEffect } from "react";
import data from './data/crew';
import doug from './assets/crew/image-douglas-hurley.png';
import  mark from './assets/crew/image-mark-shuttleworth.png';
import victor from './assets/crew/image-victor-glover.png';
import anou from './assets/crew/image-anousheh-ansari.png';



const Crew = () => {
 const [datas, setDatas] = useState(data[0]);
 const [role, setRole] =  useState('COMMANDER')
 const [name, setName] =  useState('DOUGLAS HURLEY')
 const [bio, setBio] =  useState('')
 const [page, setPage] = useState(0)
 const [image, setImage] = useState(doug)
 const images = [doug, mark, victor, anou]
 const [active, setActive] = useState('0')

 const fetchCrew = () => {
  setRole(datas.role)
  setName(datas.name)
  setBio(datas.bio)
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
  <main className="crew-main">
   <section className="crew-notes">
    <div>
     <div>
      <h2 className="crew-title title one"> <span className="crew-num num">02</span> MEET OUR CREW</h2>
    </div>
    <div className="crew-data">
     <div>
     <h2 className="crew-role">{role}</h2>
    </div>
    <div>
     <h1 className="crew-name name">{name}</h1>
    </div>
    <div>
     <p className="crew-bio bio">{bio}</p>
    </div>
     </div>
    </div>
    <div className="crew-buttons">
      <button id={'0'} onClick={handleClick}
      className={active === '0' ? 'crew-button active-crew' : 'crew-button'}></button>
      <button id={'1'} onClick={handleClick} 
      className={active === '1' ? 'crew-button active-crew' : 'crew-button'}
      ></button>
      <button id={'2'} onClick={handleClick}
      className={active === '2' ? 'crew-button active-crew' : 'crew-button'}></button>
      <button id={'3'} onClick={handleClick}
      className={active === '3' ? 'crew-button active-crew' : 'crew-button'}></button>
    </div>
   </section>
   <section className="crew-images">
    <div>
      <h2 className="crew-title two title"> <span className="crew-num num">02</span> MEET OUR CREW</h2>
    </div>
    <div>
      <img src={image}  className='crew-image'/>
    </div>
   </section>
  </main>
 )
}

export default Crew;