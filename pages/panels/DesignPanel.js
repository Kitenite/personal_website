import Carousel from '../../components/Carousel'

const imgs = [
  "../../design/2.png",
  "../../design/1.png",
  "../../design/3.png"
];

export default function DesignPanel(){
  return(
    <Carousel images={imgs}/>
  )
}
