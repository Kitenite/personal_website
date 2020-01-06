const Title = props => (
  <div>
    <a>{props.children}</a>
    <style jsx> {`
      height: 75vh;
      padding-bottom: 25vh;
      a{
        font-weight : lighter;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-size: 12vw;
        color: #3B3A3A;
      }
      `}</style>
  </div>
);

export default Title
