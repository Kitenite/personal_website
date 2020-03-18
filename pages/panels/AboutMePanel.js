
function AboutMePanel() {
  return(
   <div>
      <img src={"../../general/AboutMe.png"} alt="Photo of Kiet"/>
      <div className="content" >
        <a>business | cs | design</a>
        <p>I came to the US at the age of 14 <b>from Vietnam</b></p>
        <p>I am majoring in <b>Business</b> and <b> Computer Science</b>, minoring in <b>Design</b></p>
        <p>I am <b>self-taught</b> in English, Programming and Entreprenuership</p>
        <p>Most of all, I like to <b>create things</b></p>
      </div>
      <style jsx>{`
        display: inline-block;
        img{
          padding-top: 10vh;
          float: left;
          padding-left: 10vw;
          height: auto;
          max-width: 80vw;
          max-height:80vh;
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
