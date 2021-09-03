import BackgroundPic from  "../assets/backgroundStairs.gif";

function Background(){
    return(
        <div className="background-stairs">  
            <img width="512px" height="435px" loading="lazy" src={BackgroundPic} alt="stairs"></img>
        </div>
    )
}


export default Background;