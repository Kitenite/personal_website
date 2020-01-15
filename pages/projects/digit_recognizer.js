import DrawingCanvas from './components/DrawingCanvas'
import Layout from '../../components/Layout';


class DigitRecognizer extends React.Component {
  render(){
    return (
      <Layout>
        <div className="Page">
          <a className="title">Draw any digit from 0-9</a>
          <div className="canvas-wrapper">
            <DrawingCanvas/>
          </div>
          <style >{`
            .Page{
              text-align: center;
            }
            .button-wrapper{
              padding: 5vh;
            }
            .canvas-wrapper{
              font-weight : lighter;
              padding-top: 5vh;
            }
            .signatureCanvas{
              border: solid 1px;
            }
            .title{
              font-weight : lighter;
              font-size: 30px;
              font-size: 4vh;
            }
            `}</style>
        </div>
      </Layout>
    );
  }
}

export default DigitRecognizer;
