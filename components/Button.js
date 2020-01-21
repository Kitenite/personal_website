export default function Button(props) {
  const isClear = props.isClear
  return(
    <button onClick={props.onClick} className={isClear ? "button clear" : "button black"}>
      <a className="title">{props.children}</a>
      <div className="button-clear"/>
      <style jsx>{`
        cursor: pointer;
        font-weight:lighter;
        min-width: 10vw;
        .button{
          border-radius: 25px;
        }
        .button.clear{
          background: white;
          border-style: solid;
          border-width: 1px;
          border-color: black;
          color:black
        }
        .button.black{
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
