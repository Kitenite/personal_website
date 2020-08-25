import BlogLayout from '../../components/BlogLayout.js'
import Button from '../../components/Button';
import Link from 'next/link';

export default function KPracticeBlog() {
  return(
   <BlogLayout>
     <div className="title">kpractice Blog</div>
       <div className="buttons">
       <a href="https://kpractice.com" target="_blank">
         <Button className="button" isClear="true">Try it out</Button>
       </a>
       <a href="https://github.com/Kitenite/music-practice-app" target="_blank">
         <Button className="button">View on Github</Button>
       </a>
     </div>
      <p className = "content-body">
        <img src={"../general/KPracticePanel.png"} alt="Practice App Preview" />
        <a className="header">Introduction</a>
        <br/>
        <br/>
        This is a blog recounting the features and learnings I’ve encountered developing the kpractice app over the course of the summer of 2020 on the side from my fulltime internship.
        <br/>
        <br/>
        Kpractice is made with the purpose of being an accessible practice tool for musician that can be accessed from any device. I was inspired to create the app for a professional musician friend who now uses it daily.
        <br/>
        <br/>
        <a className="header">Features</a>
        <br/>
        <br/>
        The app has 4 primary practice tools. These are features requested from users.
        <br/>
        <br/>
        <img src={"../blog/kpractice/kpractice-functions.png"} alt="Demo of functionalities"/>
        <br/>
        <br/>
        <b>Metronome</b>
        <br/>
        The metronome is a metronome with a central server that syncs all devices to the same rhythm. This was created for group musicians who have trouble practicing with the same metronome. 
        <br/>
        I’ve already dedicated a blog towards this feature. You can find it here: 
        <Link href="/posts/metronome_blog"><a> Metronome Blog</a></Link>
        <br/>
        <br/>
        <b>Drone</b>
        <br/>
        The drone uses the Web Audio API, it creates an oscillator which can be fed a frequency to oscillate towards. I stored the frequency corresponding to each note and fed it to the oscillator when the note is pressed. Pretty straight forward.
        <br/>
        <br/>
        <b>Tuner</b>
        <br/>
        The tuner is actually pretty cool. It is essentially the inverse of the drone. It takes in microphone input and isolate the frequency. It then maps the frequency to its corresponding note, printing it back to the user.
        <br/>
        <br/>
        <b>Timer</b>
        <br/>
        Anyone who knows how to write JavaScript should be able to write a timer. I won’t go into it. But look at how nice it looks.
        <br/>
        <br/>
        <b>Session</b>
        <br/>
        This feature works like a count-up timer but it also adds the session to your google calendar. This feature works relatively well through Google API though it was a pain to develop. 
        <br/>
        <br/>
        <a className="header">Frontend</a>
        <br/>
        <br/>
        Here we’ll talk about some front-end features based on the architecture and framework. The app is developed in Angular, which is a JavaScript framework. This is a powerful framework with some built in tool that I’ll showcase in this section.
        <br/>
        <img src={"../blog/kpractice/angular-logo.png"} alt="Angular logo"/>
        <br/>
        <b>Lazy-loading</b>
        <br/>
        Bundles are only loaded when they’re needed, saving startup performance and network usage for users
        <br/>
        <br/>
        <b>Progressive Web App</b>
        <br/>
        The app is cached over time, letting it both be saved as a native-appearing app and work offline. This is a great feature as the app doesn’t need network connection and can work anywhere.
        <br/>
        <br/>
        Here’s a video showcasing these features:
        <br/>
        <br/>
        <div className="video-wrapper"><iframe src="https://www.youtube.com/embed/FoxG5bBtXV4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <br/>
        <br/>
        <a className="header">Backend</a>
        <br/>
        <br/>
        <b>Data</b>
        <br/>
        The app is plugged into a Firebase NoSQL server for data storage. It also uses Firebase Authentication and Analytics. 
        <br/>
        <img src={"../blog/kpractice/firebase-logo.png"} alt="Firebase logo"/>
        <br/>
        <b>Server</b>
        <br/>
        The actual page server is written in an Express server and handle some of the functionalities such as serving bundles or keeping the metronome synced.
        <br/>
        <br/>
        <b>Analytics</b>
        <br/>
        Analytics works pretty well out of the box, I can see current user streams and all the action events. Unfortunately, this doesn’t track users with AdBlockers on.
        <br/>
        <br/>
        <img src={"../blog/kpractice/analytics-dashboard.png"} alt="Analytics dashboard"/>
        <br/>
        <br/>
        Here’s a demo video of the backend:
        <br/>
        <br/>
        <div className="video-wrapper"><iframe src="https://www.youtube.com/embed/35sh2h6U07Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <br/>
        <br/>
        <a className="header">Next Steps</a>
        <br/>
        <br/>
        I’m pretty happy to be able to wrap up this project. It took a little longer than intended as a function of learning Angular for the first time and working full-time. 
        <br/>
        <br/>
        If afforded more time, I would like to refactor the authentication scheme I used in the front-end, I think it’s unnecessarily long.
        <br/>
        <br/>
        I would also like to add a homepage to get the Google API verification. At the moment, the app sets off a warning to user from google because it’s not verified, which is very big nono.
        <br/>
        <br/>
        Overall, pretty happy with the result. I’m glad it’s being received very well and used consistently. Looking forward to the next project.
        <br/>
        <br/>
      </p>
    </BlogLayout>
  )
}
