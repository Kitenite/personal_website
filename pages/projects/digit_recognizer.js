import DrawingCanvas from './components/DrawingCanvas'
import Layout from '../../components/Layout';
import Link from 'next/link';

class DigitRecognizer extends React.Component {
  render(){
    return (
      <Layout>
        <div className="Page">
          <a className="title">Draw any digit from 0-9</a><br/>
          <a className="title">(Currently under maintenance)</a>
          <div className="canvas-wrapper">
            <DrawingCanvas/>
          </div>
          <br/>
          <Link href="/posts/digit_blog">View project blog</Link>
          <style >{`
            .Page{
              padding-top:5vh;
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
