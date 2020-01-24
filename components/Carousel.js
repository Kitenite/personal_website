import React from 'react'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      fade: true,
      currentImageIndex: 0 };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.state.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      fade: !this.state.fade,
      currentImageIndex: index });
  }

  nextSlide() {
    const lastIndex = this.state.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      fade: !this.state.fade,
      currentImageIndex: index });
  }

  render() {
    const fade = "image " + (this.state.fade ? "fade" : "fade1");

    return (
      <div className="carousel">
        <div className="arrow" onClick= {this.previousSlide}>{"〈"}</div>
          <div className="image-wrap">
            <img className={fade} src={this.state.images[this.state.currentImageIndex]} />
          </div>
        <a className="arrow" onClick= {this.nextSlide}>{"〉"}</a>
        <style jsx>{`
          .carousel{
            padding-top:10vh;
            text-align:center;
            max-width:100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            animation-name: fadeOut;
            animation-duration: 1s;
          }
          .arrow{
            min-width:10vw;
            display:flex;
            align-items: center;
            flex: 1 0 auto;
            align-content: center;
            justify-content: center;
            cursor: pointer;
            user-select: none;
          }
          .arrow:hover{
            opacity:0.5;
          }
          .image-wrap{
            height: 80vh;
            width:80vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image{
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
            margin: auto;
            vertical-align: middle;
          }
          .fade{
            animation-name: crossFade;
            animation-duration: 1s;
          }
          .fade1{
            animation-name: crossFade1;
            animation-duration: 1s;
          }
          @keyframes crossFade {
            0% {opacity: 0;}
            100% {opacity: 1;}
          }
          @keyframes crossFade1 {
            0% {opacity: 0;}
            100% {opacity: 1;}
          }
          `}</style>
      </div>
    )
  }
}
export default Carousel;
