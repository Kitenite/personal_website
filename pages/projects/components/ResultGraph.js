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
          <p>{result[0]}</p>
          <p>{result[1]}%</p>
        </div>
      ))}
      <style jsx>{`
        .title{
          padding-bottom:0.1vh;
          font-size:3vh;
          text-decoration: underline;
        }
        .confidence-element{
          padding:2vw;
          display: inline-block;
          layout: inline-flex;
          text-align:center;
        }
        .bar{
          height: 20vh;
          width: 1vw;
          border-radius:2vw;
        }
        `}</style>
    </div>
  )
}
