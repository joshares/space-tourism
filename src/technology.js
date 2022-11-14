import { useState, useEffect } from "react";
import data from './data/technology';
import launch from './assets/technology/image-launch-vehicle-portrait.jpg';
import  space from './assets/technology/image-spaceport-portrait.jpg';
import cap from './assets/technology/image-space-capsule-portrait.jpg';




const Technology = () => {
  const [datas, setDatas] = useState(data[0]);
  const [name, setName] =  useState('')
  const [bio, setBio] =  useState('')
  const [page, setPage] = useState(0)
  const [image, setImage] = useState(launch)
  const images = [ launch, space, cap]
  const [active, setActive] = useState('0');

  const fetchCrew = () => {
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
  <main className="tech-main">
   <section className="tech-notes">
    <div className="tech-title">
     <h2 className="tech-title title one"> <span className="tech-num num">03</span> SPACE LAUNCH 101</h2> 
     </div>
    <div className="tech-note">
     <div className="tech-buttons">
      <button id={'0'} onClick={handleClick}
      className={active === '0' ? 'tech-button active-tech' : 'tech-button'}>1</button>
      <button id={'1'} onClick={handleClick}
      className={active === '1' ? 'tech-button active-tech' : 'tech-button'} >2</button>
      <button id={'2'} onClick={handleClick} 
      className={active === '2' ? 'tech-button active-tech' : 'tech-button'}>3</button>
     </div>
     <div className="tech-n">
      <p className="bio"> THE TERMINOLOGY...</p>
      <h1 className="name">{name}</h1>
      <p className="bio">{bio}</p>
     </div>
    </div>
   </section>
   <section className="tech-images">
    <div className="tech-title">
     <h2 className="tech-title title two"> <span className="tech-num num">03</span> SPACE LAUNCH 101</h2> 
     </div>
    <div>
      <img src={image}  className='tech-image'/>
    </div>
   </section>
  </main>
 )
}

export default Technology;