import BlogLayout from '../../components/BlogLayout.js'
import Button from '../../components/Button';
import Link from 'next/link';

export default function DigitBlog() {
  return(
   <BlogLayout>
     <div className="title">Template</div>
       <div className="buttons">
       <Link href="/projects/digit_recognizer">
         <Button className="button" isClear="true">Internal link</Button>
       </Link>
       <a href="https://www.thevoyapp.com" target="_blank">
         <Button className="button" isClear="true">External link</Button>
       </a>
       <a href="https://github.com/Kitenite/" target="_blank">
         <Button className="button">View on Github</Button>
       </a>
     </div>
      <p className = "content-body">
        <img src={"../general/HackathonPreview.png"} alt="Minnehack Phone Preview" />
        <a className="header">Inspiration</a>
        <br/>
        <br/>
        In our brainstorming session, we found that many people tend to be intimidated to go out and meet new people or join social events. Much of the concerns have to do with safety in meeting up with new people and the difficulty of connecting to new people.
        <br/>
        <br/>
        Our product is an app that lets anyone turn a simple outing to a social event. The app also uses points as social proof to ensure safety for users in meeting up with new people.
        <br/>
        <br/>
        <div className="video-wrapper"><iframe src="https://www.youtube.com/embed/XeaeL2qygaY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <br/>
        <br/>
        <a className="header">What it does</a>
        <br/>
        <br/>
        Users can also set a minimum amount of points needed to join an event as well. And anyone without a score high enough won't even see the event. This will ensure more safety-conscious users to have a safe and good social experience.
        <br/>
        <br/>
        <img src={"../blog/minnehack/flutter-logo.png"} alt="Flutter logo"/>
      </p>
    </BlogLayout>
  )
}
