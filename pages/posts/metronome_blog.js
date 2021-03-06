import BlogLayout from '../../components/BlogLayout.js'
import Button from '../../components/Button';
import Link from 'next/link';

export default function DigitBlog() {
  return(
   <BlogLayout>
     <div className="title">Synchronous Metronome</div>
       <div className="buttons">
       <a href="https://sync-metronome.herokuapp.com" target="_blank">
         <Button className="button" isClear="true">Try it out</Button>
       </a>
       <a href="https://github.com/Kitenite/sync_metronome" target="_blank">
         <Button className="button">View on Github</Button>
       </a>
     </div>
      <p className = "content-body">
        <img src={"../general/MetronomePanel.png"} alt="Metronome Preview" />
        <a className="header">Inspiration</a>
        <br/>
        <br/>
        One of my friends is a musician in a quartet.
        During practice, each player in the group needs to sync with each other and keep the same pace.
        Though this is usually done with a regular metronome, when playing together, they've had a hard time hearing the same metronome.
        <br/>
        <br/>
        The solution to this was to play quietly enough that they can hear the same metronome, which makes it difficult practice well.
        They've also tried to sync their metronomes up manually but never succeeded. And with 4 players, it becomes almost impossible to get all the devices synched up.
        <br/>
        <br/>
        This application is a metronome that syncs up all devices to the same pace and lets players interact with each others' pace.
        <br/>
        <br/>
        <a className="header">What it does</a>
        <br/>
        <br/>
        Hopefully self-explanatory, the metronome always syncs no matter when you hit play.
        Players will all hear the same metronome at any entry point no matter where they are, and can change the BPM for everyone.
        <br/>
        <br/>
        <div className="video-wrapper"><iframe src="https://www.youtube.com/embed/2LLWO7513DU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <br/>
        <br/>
        <a className="header">How it works</a>
        <br/>
        <br/>
        The time keeping is done through a centralized server using websockets. Time is synced between the central server and each clients on startup.
        The server keeps track of the start time and calculates how many cycles the timer has ran. The next upcoming beat can be calculated using this value.
        <br/>
        <br/>
        When a client makes a socket connection and hits play, the server sends the next upcoming beat to the client and the BPM which the client uses to play the metronome.
        The client can also update the central metronome rate using socket emit.
        <br/>
        <br/>
        This project utilizes Socket.io for synching, Express and Node.js for server and vanilla HTML, CSS, JQuery/JS for the client. I've also designed and implemented all the UI and animation.
        <br/>
        <br/>
        <img src={"../blog/metronome/socket-io-logo.png"} alt="Socket.io logo"/>
        <br/>
        <br/>
        <a className="header">Next Steps</a>
        <br/>
        <br/>
        I'm done with this project for now but if I have to build this to scale, I'd probably use a framework instead of vanilla DOM.
        I've also been hearing alot of buzz about this TypeScript stuff so it would've been a good thing to try.
        <br/>
        <br/>
        For scaling the amount of users above 100, it would be best to have "rooms" or seperate server for seperate groups.
        Same way you'd do in a Massive Multiplayer Online game. This would allow for 1 server to handle a certain amount of clients.
        <br/>
        <br/>
      </p>
    </BlogLayout>
  )
}
