export default function Button(props) {
  const isClear = props.isClear
  return(
    <button onClick={props.onClick} className={isClear ? "clear-button" : "black-button"}>
      <a className="title">{props.children}</a>
      <div className="button-clear"/>
      <style jsx>{`
        cursor: pointer;
        font-weight:lighter;
        min-width: 10vw;
        .clear-button{
          background: white;
          border-radius: 25px;
          border-style: solid;
          border-width: 1px;
          border-color: black;
          color:black
        }
        .black-button{
          background: black;
          border-radius: 25px;
          border-width: 0px;
          color:white
        }
        .title{
          font-size: 3vh;
        }
        `}</style>
    </button>
  )
}
