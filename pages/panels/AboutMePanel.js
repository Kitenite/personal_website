
function AboutMePanel() {
  return(
   <div>
      <img src={"../../static/AboutMe.png"} alt="Photo of Kiet"/>
      <div className="content" >
        <a>business | cs | design</a>
        <p>I came to the US at the age of 14 <b>from Vietnam</b></p>
        <p>I am a <b>Business</b> double-major minoring in <b>Computer Science</b> and <b>Design</b></p>
        <p>I am <b>self-taught</b> in English, Programming and Entreprenuership</p>
        <p>Most of all, I like to <b>make stuff</b></p>

      </div>
      <style jsx>{`
        display: inline-block;
        img{
          padding-top: 10vh;
          float: left;
          padding-left: 10vw;
          height: 45vh;
        }
        .content{
          float: left;
          display: block;
          padding-top: 15vh;
          padding-left: 5vw;
        }
        a{
          font-size: 4.5vh;
        }
        p{
          padding-top: 2vh;
          display: block;
          word-break: break-word;
          font-size: 2.5vh;
        }

        `}
      </style>
   </div>
 )
}
export default AboutMePanel
