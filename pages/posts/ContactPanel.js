function ContactPanel() {
  return(
    <div>
      <div className = "email-resume">
        <a><b>Resumé</b></a>
        <br/>
        <a>hoakiet98@gmail.com</a>
      </div>

      <div className = "professional">
        <a><b>Professional</b></a><br/>
        <a href="https://www.linkedin.com/in/kiet-ho/">LinkedIn</a><br/>
        <a>GitHub</a><br/>
        <a>Dribbble</a><br/>
      </div>

      <div className = "social">
        <a><b>Social</b></a><br/>
        <a>Instagram</a><br/>
        <a>Facebook</a><br/>
        <a>Twitter</a><br/>
      </div>

      <style jsx>{`
        font-size: 2vh;
        padding-top: 8vh;

        .email-resume{
          text-align: center;
        }
        .professional{
          padding-top: 10vh;
          padding-left: 25vw;
          float:left;
        }
        .social{
          padding-top: 10vh;
          padding-right: 25vw;
          float:right;
        }
        `}</style>
    </div>

  )}

export default ContactPanel
