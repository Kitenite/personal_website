import React from 'react'

const imgs = [
  "../../static/VoyPanel.png",
  "../../static/AboutMe.png",
  "../../static/DigitRecognizer.png"
];

class Carousel extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0 };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgs.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index });
  }

  nextSlide() {
    const lastIndex = imgs.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index });
  }

  render() {
    return (
      <div className="carousel">
        <a className="arrow left" onClick= {this.previousSlide}>left</a>
        <img className="image-slide" src={imgs[this.state.currentImageIndex]} />
        <a className="arrow right" onClick= {this.nextSlide} >right</a>
        <style jsx>{`
          .carousel{
            text-align:center;
            max-width:100vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .arrow{
            display:flex;
            align-items: center;
            flex: 1 0 auto;
            align-content: center;
            justify-content: center;
          }
          .arrow.left{

          }
          .arrow.right{
          }

          .image-slide{
            background-size: cover;
            background-position: center;
            height: 70vh;
            width: auto;
            margin: auto;
          }

          `}</style>
      </div>
    )
  }
}
export default Carousel;
