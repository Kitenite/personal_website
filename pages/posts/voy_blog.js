import BlogLayout from '../../components/BlogLayout.js'
import Button from '../../components/Button';

export default function DigitBlog() {
  return(
   <BlogLayout>
      <div className="title">Voy: My First Startup</div>
        <div className="buttons">
        <a href="https://www.thevoyapp.com" target="_blank">
          <Button className="button" isClear="true">View website</Button>
        </a>
      </div>
      <p className = "content-body">
        <img src={"../static/VoyPanel.png"} alt="Voy app screenshot"/>
        <a className="header">Introduction</a>
        <br/>
        <br/>
        Voy Audio Tour was the first company I started my sophomore year of college with my friend, Cody Perakslis. The company seeks to democratize local knowledge by allowing anyone to create an audio tour of their current location immediately. What started off as a side project came to win multiple awards, got us into Minnedemo, Y Combinator Startup school, raised venture capital and seed grants and became a full-time job. We are now going through the process of selling the company to American Public Media to move on to new opportunities (at the time of this writing).
        <br/>
        <br/>
        The product involves and iOS front-end with an AWS backend. My job was the design and implementation of the front end and make API calls to our server.
        <br/>
        <br/>
        Design: Sketch
        <br/>
        Development: Swift (Java-like) and Xcode
        <br/>
        <br/>
        This blog is a summary of the project, involving front-end technology, design choices, and our accomplishments.
        <br/>
        <br/>
        <img src={"../static/blog/voy/map.png"} alt="App screenshot"/>
        <br/>
        <br/>
        <a className="header">The Product</a>
        <br/>
        <br/>
        Unfortunately the code is proprietery and so can not be shown here but I can share the implementation of the project and some of the basic technology invovled. I would also say that a large bulk of the project involves our database schemas and server which is created by the wizadry of Cody Perakslis and I cannot do it justice by explaining it here. So the summary will only involve my part of the front-end implementation.
        <br/>
        <br/>
        The product involves a map component, an audio player, a creation tool and a user/authentication system.
        <br/>
        <br/>
        <img src={"../static/blog/voy/find.png"} alt="App screenshot"/>
        <br/>
        <br/>
        <a className="sub-header">Map</a>
        <br/>
        <br/>
        The map component takes user’s location data, make a POST request with the location of the user and receive back a JSON list of all the tours available around the area. We then sort and display that tour information.
        <br/>
        <br/>
        The tour is attached to a tour ID that we can use to make other API calls to vote for the tour or find any other metadata associated with it. Attached to the tour is also a link to query our tour audio file from our S3 bucket to display in the media player.
        <br/>
        <br/>
        <img src={"../static/blog/voy/audio.png"} alt="App screenshot"/>
        <br/>
        <br/>
        <a className="sub-header">Audio Player</a>
        <br/>
        <br/>
        The player queries our audio files, manages queues, history and checkpoints. The checkpoints corresponds with user location to know where a user should be on the tour and handle audio events accordingly. These audio events can be specified in the creation of the audio tour.
        <br/>
        <br/>
        <img src={"../static/blog/voy/add.png"} alt="App screenshot"/>
        <br/>
        <br/>
        <a className="sub-header">Creation Tool</a>
        <br/>
        <br/>
        The creation tool takes in user microphone input, runs noise cancellation and voice signifier in the background and segments recordings into episodes for easy re-recording. The recording also takes in user location in the background and automatically create checkpoints corresponding to the audio timestamps to build out a route of the tour.
        <br/>
        <br/>
        After a user finishes creating their audio file, they can edit any part of the route and starting point or use the default. User can then input metadata as they need and hit publish. This uploads the audio to our S3 server using AWS Amplify, receive the link back and make a POST request to our create API with the uploaded tour information. The tour would be immediately available to the public at that location and can be edited or change using our edit API calls.
        <br/>
        <br/>
        <img src={"../static/blog/voy/signin.png"} alt="App screenshot"/>
        <br/>
        <br/>
        <a className="sub-header">User and Authentication</a>
        <br/>
        <br/>
        User profiles can be created  and logged-in through the app’s login page. We interfaced with our user schemas through AWS Amplify and Cognito. We authenticated using phone number or email with 2-factor which gives us a user key to create the user. Each sign-in or boot-up of the app will query a new key from the server.
        <br/>
        <br/>
        Users also had relevant metadata about how many tours they’ve create, what their sum voting counts are from all their tools and their saved tours. We were going through implementation of a user feed of friends and followers as the school year came.
        <br/>
        <br/>
        <a className="sub-header">Product Summary</a>
        <br/>
        <br/>
        All in all, the project was very technically challenging and provided a lot of learning for me. I was able to learn how Xcode of iOS development work, dip my toe into API management and other server-side interfacing skills. Again, a large chunk of the project’s complexities and value is owed to Cody and his back-end contribution, my job had been much easier.
        <br/>
        <br/>
        <a className="header">Awards</a>
        <br/>
        <br/>
        Some of the awards we've earned over the course of the project. Other were not mentioned without links including:
        <br/>
        <a href="https://www.startupschool.org" target="_blank">
          YC Startup School 2018
        </a>
        <br/>
        <a href="https://carlsonschool.umn.edu/faculty-research/gary-s-holmes-center-entrepreneurship/programs-and-clubs-students/bizpitch-contest" target="_blank">
          Holmes Center Biz Pitch 2018
        </a>
        <br/>
        <a href="https://tbsr.wildapricot.org" target="_blank">
          tBSR Innovation Award
        </a>
        <br/>
        <br/>
        <a href="https://minnestar.org/minnedemo/past-demos/?date=2018-10-11" target="_blank">
          <a className="sub-header">Minnedemo: </a>
          <br/>
          <br/>
          <img src={"../static/blog/voy/minnedemo-logo.png"} alt="Minnedemo logo"/>
          <br/>
        </a>
        <br/>
        <div className="video-wrapper"><iframe src="https://www.youtube.com/embed/R3GIrI0LGlo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <br/>
        <br/>
        <a href="https://research.umn.edu/units/uspatial/mapping-prize/2019-best-maps" target="_blank">
          <a className="sub-header">U-Spatial Mapping Award: </a>
          <br/>
          <br/>
          <img src={"../static/blog/voy/u-spatial-logo.png"} alt="U-spatial logo"/>
          <br/>
        </a>
        <br/>
        <a className="header">Publicity</a>
        <br/>
        <br/>
        <a href="https://www.mndaily.com/article/2019/04/n-student-app-to-highlight-history-of-umn-campus-area" target="_blank">
          <a className="sub-header">Minnesota Daily: </a>
          <br/>
          <br/>
          <img src={"../static/blog/voy/mn-daily-logo.png"} alt="MN Daily logo"/>
          <br/>
        </a>
        <br/>
        <a href="https://www.glennelson.org/news/thevoyapp" target="_blank">
          <a className="sub-header">Glen Nelson Center:</a>
          <br/>
          <img src={"../static/blog/voy/gnc-logo.png"} alt="Glen Nelson Center logo"/>
        </a>
        <br/>
        <br/>
        <a href="https://www.twincities.com/2019/07/06/american-public-medias-glen-nelson-center-seeds-28-media-technology-start-ups-from-downtown-st-paul/" target="_blank">
          <a className="sub-header">Twin Cities Pioneer Press:</a>
          <br/>
          <img src={"../static/blog/voy/tc-logo.png"} alt="Twin Cities Pioneer Press logo"/>
        </a>
        <br/>
        <br/>
      </p>
    </BlogLayout>
  )
}
