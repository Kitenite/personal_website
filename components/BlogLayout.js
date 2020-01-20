import Layout from './Layout.js'

export default function BlogLayout(props){
  return(
    <Layout>
      <div className="wrapper">{props.children}</div>
      <style>{`
        .buttons{
          text-align: center;
        }
        .wrapper{
          font-weight:lighter;
          line-height: 3.5vh;
          font-size: 2.5vh;
          margin: 0vw 10vw 10vw 10vw;
        }
        img{
          max-width: 80vw;
          max-height: 80vh;
          display:block;
          margin:auto;
        }
        .title{
          margin: 5vw;
          align: center;
          font-size: 5vh;
          text-align: center;
        }
        .header{
          font-size: 4vh;
          font-weight : bold;
        }

        .sub-header{
          font-size: 3vh;
          font-weight : medium;
        }
        .video-wrapper{
          width: 70vw;
          height: 70vh;
          margin: 0 auto;
          max-width: 70vw;
          max-height: 70vh;
        }
        iframe{
          position: relative;
          height: 100%;
          width: 100%;
        }
        `}</style>
    </Layout>
  )
}
