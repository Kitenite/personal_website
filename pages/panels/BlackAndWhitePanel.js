import Carousel from '../../components/Carousel'

const imgs = [
  "../../art/1-min.jpg",
  "../../art/22-min.jpg",
  "../../art/23-min.jpg",
  "../../art/14-min.jpg",
  "../../art/18-min.jpg",
  "../../art/19-min.jpg",
  "../../art/24-min.jpg",
  "../../art/25-min.jpg",
  "../../art/26-min.jpg"

];

export default function ArtPanel(){
  return(
    <Carousel images={imgs}/>
  )
}
