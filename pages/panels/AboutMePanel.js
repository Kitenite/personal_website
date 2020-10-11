
function AboutMePanel() {
  return(
   <div>
      <img src={"../../general/AboutMe.png"} alt="Photo of Kiet"/>
      <div className="content" >
        <a>My Journey</a>
        <p>I started my own tech company as a business student.</p>
        <p>As I started getting involved in programming the product, I developed a passion for it.</p>
        <p>Now, I like to design and build application that do cool things.</p>
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
