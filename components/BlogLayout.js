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
          font-size: 3vh;
          font-weight : bold;
        }

        `}</style>
    </Layout>
  )
}
