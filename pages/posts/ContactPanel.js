function ContactPanel() {
  return(
    <div className="all">
      <div className = "email-resume">
        <b>hoakiet98@gmail.com</b>
        <br/>
        <a href="https://kitenite.github.io/resume/" target="_blank">Resumé</a>
      </div>

      <div className = "professional">
        <b>Professional</b><br/>
        <a href="https://www.linkedin.com/in/kiet-ho/" target="_blank">LinkedIn</a><br/>
        <a href="https://github.com/Kitenite" target="_blank">GitHub</a><br/>
        <a href="https://dribbble.com/FlyaKiet" target="_blank">Dribbble</a><br/>
      </div>

      <div className = "social">
        <b>Social</b><br/>
        <a href="https://www.instagram.com/flyakiet/" target="_blank">Instagram</a><br/>
        <a href="https://www.facebook.com/KietHo1998" target="_blank">Facebook</a><br/>
        <a href="https://twitter.com/FlyaKiet" target="_blank">Twitter</a><br/>
      </div>

      <style jsx>{`
        font-size: 2vh;
        position:relative;
        line-height: 2.5vh;
        .all{
          padding-top: 18vh;
        }
        .email-resume{
          text-align: center;
          padding-bottom: 5vh;
        }
        .professional{
          padding-left: 25vw;
          float:left;
        }
        .social{
          padding-right: 25vw;
          float:right;
        }
        a{
          color: black;
          text-decoration: none;
        }
        a:hover {
          color: gray;
        }

        `}</style>
    </div>

  )}

export default ContactPanel
