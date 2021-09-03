import { useEffect, useRef, useState } from 'react';
import './App.css';
import BackgroundPic from "./assets/backgroundStairs.mp4";

function App() {

  const playVideo = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    playVideo.current.play();
  }

  const play = () => {
    playVideo.current.play();
    setTimeout(() => {
      playVideo.current.pause();
    },700)
  }

  useEffect(() => {
    if(username !== ""){
      play();
    }

    if(password !== ""){
      play();
    }

  },[username, password])

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
