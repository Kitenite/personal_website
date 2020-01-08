function VoyPanel() {
  return(
   <div>
      <img className="phone_image" src={"../../static/VoyPhone.png"} alt="Phone with Voy App open"/>
      <div className="content">
        <img className="logo" src={"../../static/VoyLogo.png"} alt="Voy App Logo"/>
        <b className="bold-text">Venture-backed</b>
        <a className="text">audio tour application</a>
      </div>
      <style jsx>{`
        padding-top: 8vh;
        position: absolute;

        .phone_image{
          padding-left: 15vw;
          max-height: 75vh;
          max-width: 75vw;
        }
        .content{
          padding-top: 5vh;
          padding-left: 50vw;
        }
        .logo{
          height: 8vh;
        }
        a, b{
          font-size: 3.5vh;
        }

        .bold-text{
          white-space: nowrap;
          padding-top: 19vh;
        }
        .text{
          white-space: nowrap;
          padding-top: 23.5vh;
        }
      `}</style>
    </div>
  )
}
export default VoyPanel
