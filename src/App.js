import {  useRef, useState } from 'react';
import './App.css';
import BackgroundPic from "./assets/backgroundStairs.mp4";

function App() {

  const playVideo = useRef(null);
  
  const [countUsernameChars, setCountUsernameChars] = useState(0);
  const [countPasswordChars, setCountPasswordChars] = useState(0);

  const handleUsername = (e) => {
    if(e.target.value !== "" & countUsernameChars === 0){
      play();
      setCountUsernameChars(1);
    }
    else if(e.target.value === "" & countUsernameChars !== 0) {
      setCountUsernameChars(0);
      playVideo.current.currentTime -= 0.70;
      
    }
  }

  const handlePassword = (e) => {
    if(e.target.value !== "" & countPasswordChars === 0){
      play();
      setCountPasswordChars(1);
    }
    else if(e.target.value === "" & countPasswordChars !== 0) {
      setCountPasswordChars(0);
      playVideo.current.currentTime -= 0.70;
    }
  }

  const handleSubmit = () => {
    playVideo.current.play();
    setTimeout(() => {
      alert("Successfully logged in ! ");
    },700)
  }

  const play = () => {
    playVideo.current.play();
    setTimeout(() => {
      playVideo.current.pause();
    },700)
  }

  return (
    <main>
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <video ref={playVideo} rel="preload" muted width="512px" height="435px" loading="lazy" src={BackgroundPic}></video>
        <form className="flex flex-col justify-center items-center text-2xl md:text-4xl gap-5">
          <label htmlFor="username">Username</label>
          <input className="shadow-2xl border" onChange={handleUsername} type="text" required name="username"></input>
          <label htmlFor="password">Password</label>
          <input className="shadow-2xl border" onChange={handlePassword} type="password" required name="password"></input>
          <button type="button" onClick={handleSubmit} className="mt-12">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default App;
