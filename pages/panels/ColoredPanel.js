import Carousel from '../../components/Carousel'

const imgs = [
  "../../art/3-min.jpg",
  "../../art/2-min.jpg",
  "../../art/4-min.jpg",
  "../../art/5-min.jpg",
  "../../art/6-min.jpg",
  "../../art/7-min.jpg",
  "../../art/8-min.jpg",
  "../../art/9-min.jpg",
  "../../art/10-min.jpg",
  "../../art/11-min.jpg",
  "../../art/12-min.jpg",
  "../../art/13-min.jpg",
  "../../art/15-min.jpg",
  "../../art/16-min.jpg",
  "../../art/17-min.jpg",
  "../../art/21-min.jpg"
];

export default function ArtPanel(){
  return(
    <Carousel images={imgs}/>
  )
}
