function VoyPanel() {
  return(
   <div>
      <img src={"../../static/VoyPhone.png"} alt="Phone with Voy App open"/>
      <div className="content" >
        <a><b>Venture-backed</b> audio tour application</a>
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
          font-size: 3.5vh;
        }
      `}</style>
    </div>
  )
}
export default VoyPanel
