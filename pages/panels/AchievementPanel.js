import Carousel from '../../components/Carousel'

const imgs = [
  "../../design/7.jpg",
  "../../design/11.jpg",
  "../../design/5.jpg",
  "../../design/12.jpg",
  "../../design/8.jpg",
  "../../design/4.jpg",
  "../../design/6.jpg",
  "../../design/9.jpg",
  "../../design/10.jpg",
];

export default function DesignPanel(){
  return(
    <Carousel images={imgs}/>
  )
}
