const ScrollPanel = props => (
  <div className="wrapper">
    <div className="title">{props.title}</div>
    <div className="content">{props.children}</div>
    <style jsx>{`
      .wrapper{
        min-height: 100vh;
        height: auto;
        font-weight : lighter;
        font-size: 30px;
        font-size: 4vh;
        padding-left: 2vw;
      }
      .title {
        font-weight : lighter;
        font-size: 30px;
        font-size: 4vh;
        padding-left: 2vw;
      }
      `}</style>
  </div>
)

export default ScrollPanel
