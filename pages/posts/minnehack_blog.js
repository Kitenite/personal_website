import BlogLayout from '../../components/BlogLayout.js'
import Button from '../../components/Button';

export default function DigitBlog() {
  return(
   <BlogLayout>
      <div className="title">MinneHack 2020 Project Blog</div>
        <div className="buttons">
        <a href="https://github.com/Kitenite/social_challenges" target="_blank">
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
        The app game-ifies the process of socializing while using points to increase security and verify identities. A user starts out with no reputation points and can join other people's events to gain points and socialize. Once they show up to an event, the owner of the event can verify that they've shown up and are a safe person to hang out with. As users go to more event, they get more points and can be verified as a reputable member of the community.
        <br/>
        <br/>
        Once a user has enough points they can also create their own events. An event can be as simple as saying "I'm going to the park today". Other people in the area can decide to join you in your event. Each event gains score as more users with high points signs up to them. This signals to newer members of the community that the event is safe to attend as creditable members of the community will be there.
        <br/>
        <br/>
        Users can also set a minimum amount of points needed to join an event as well. And anyone without a score high enough won't even see the event. This will ensure more safety-conscious users to have a safe and good social experience.
        <br/>
        <br/>
        <img src={"../blog/minnehack/flutter-logo.png"} alt="Flutter logo"/>

        <a className="header">How we built it</a>
        <br/>
        <br/>
        Most of us were very familiar with application development and backend/dev-ops work so we decided to challenge ourselves with completely new frameworks and environments. For the app itself, we used Flutter, a Progressive Web App framework that none of us have experience with. We also used Google Cloud Platform, specifically Firebase, for the back-end as another learning challenge.
        <br/>
        <br/>
        <img src={"../blog/minnehack/gc-logo.png"} alt="Google Cloud logo"/>
        <br/>
        <br/>
        <a className="header">Challenges we ran into</a>
        <br/>
        <br/>
        Our biggest issue had been working with Flutter's design which mixes DOM elements with functional code, making it extremely hard to read and maintain. Flutter's lack of documentation was especially difficult for our less experienced members.
        <br/>
        <br/>

        <a className="header">Accomplishments that we're proud of</a>
        <br/>
        <br/>
        We refrained from jumping into coding right away and actually over an hour upfront to brain-storm, document and flesh out our ideas before even thinking about technology implementation. This greatly facilitated the latter 23-hours of development. This up-front work also helped us get to know each other better as we've just met at the event.
        <br/>
        <br/>
        <img src={"../blog/minnehack/documentation.png"} alt="Our documentations"/>
        <br/>
        <br/>

        <a className="header">What we learned</a>
        <br/>
        <br/>
        We found a really good app idea we were all happy about. We learned to deal with a very beginner-unfriendly framework and how to work around that. We also learned to just accept the ridiculous parts and have fun with our time here.
        <br/>
        <br/>
        <img src={"../blog/minnehack/minnehack-logo.png"} alt="Minnehack logo"/>
        <br/>
        <br/>
        <a className="header">What's next for Social Capital</a>
        <br/>
        <br/>
        We intend to release it to production, generate some interest casually and see where the idea takes itself. Overall we just had a ton of fun and met really cool people.
        <br/>
        <br/>
      </p>
    </BlogLayout>
  )
}
