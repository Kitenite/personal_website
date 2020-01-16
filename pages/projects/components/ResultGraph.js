export default function ResultGraph(props){
  const resultArray = (props.result) ? (props.result) : [0,0]
  return(
    <div>
      <p className="title">Result</p>
      <a className="final-answer">Final answer: {resultArray[0][0]}</a>
      <p className="title">Confidence breakdown:</p>
      {resultArray.map((result, index) => (
        <div className="confidence-element">
          <div className="bar" style={{
            backgroundColor: (result[1] >75) ? '#5DEBA4' : (result[1] >=50) ?'#FFCA41':'#FF6868',
            height: (result[1]) ? (result[1]*2) : 0
          }}/>
          <p>{result[1]}%</p>
          <p>{result[0]}</p>
        </div>
      ))}
      <style jsx>{`
        .title{
          padding-bottom:0.1vh;
          font-size:3vh;
          text-decoration: underline;
        }
        .final-answer{
          font-size: 2.5vh;
        }
        .confidence-element{
          padding:2vw;
          display: inline-block;
          layout: inline-block;
          text-align:center;
        }
        @keyframes growFromBottom {
          0% {
            transform: scaleY(0);
            transform-origin: bottom
          }
          100% {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }
        .bar{
          margin: auto;
          height: 20vh;
          width: 1vw;
          border-radius:2vw;
          animation: 3s ease-out 0s 1 growFromBottom;
        }
        `}</style>
    </div>
  )
}
