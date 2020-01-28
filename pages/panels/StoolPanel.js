import Carousel from '../../components/Carousel'

const imgs = [
  "../../design/step_stool/1.png",
  "../../design/step_stool/2.png",
  "../../design/step_stool/3.png",
  "../../design/step_stool/4.png",
  "../../design/step_stool/5.png",
  "../../design/step_stool/6.png",
  "../../design/step_stool/7.png",
  "../../design/step_stool/8.png",
  "../../design/step_stool/9.png",
  "../../design/step_stool/10.png"
];

export default function StoolPanel(){
  return(
    <Carousel images={imgs}/>
  )
}
