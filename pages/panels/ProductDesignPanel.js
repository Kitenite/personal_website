import Carousel from '../../components/Carousel'

const imgs = [
  "../../design/product_sketch/1.png",
  "../../design/product_sketch/2.png",
  "../../design/product_sketch/3.png",
  "../../design/product_sketch/4.png",
  "../../design/product_sketch/5.png",
  "../../design/product_sketch/6.png"
];

export default function ProductDesignPanel(){
  return(
    <Carousel images={imgs}/>
  )
}
