import BlogLayout from '../../components/BlogLayout.js'
import Button from '../../components/Button';
import Link from 'next/link';


export default function DigitBlog() {
  return(
   <BlogLayout>
      <div className="title">Digit Recognizer</div>
        <div className="buttons">
        <Link href="/projects/digit_recognizer">
          <Button className="button" isClear="true">Try it out</Button>
        </Link>
        <a href="https://github.com/Kitenite/web-digit-recognizer" target="_blank">
          <Button className="button">View on Github</Button>
        </a>
      </div>

      <p className = "content-body">
        <a className="header">Introduction</a>
        <br/>
        <br/>
        This project is a handwritten digit classifier with a React front-end and AWS/Docker backend. The model was developed using Tensorflow and served using Tensorflow Serving.
        <br/>
        <br/>
        Languages: Javascript, HTML, CSS, Python
        <br/>
        Frameworks: React.js, Express.js, Node.js
        <br/>
        Environments: AWS EC2, Docker
        <br/>
        <br/>
        There are 3 components to the digit recognizer. Each I learned through doing this project
        <br/>
        1. The model
        <br/>
        2. The client
        <br/>
        3. The server
        <br/>
        <br/>
        This blog post is a walkthrough of my process of developing this project. Mostly for personal record keeping but also to showcase the way I personally solve problems. So without further delay, here was my process:
        <br/>
        <br/>
        <a className="header">The model</a>
        <br/>
        <br/>
        For building and training the model, I used Tensorflow. In my opinion, it’s a very beginner-friendly tool for people like me without a ton of data science experience.
        <br/>
        <br/>
        <img src={"../static/blog/tensorflow-logo.png"} alt="Tensorflow logo" ></img>
        <a href="https://www.tensorflow.org/learn" target="_blank">https://www.tensorflow.org/learn</a><br/>
        <br/>
        <br/>
        Instead of having to manually build out your own model, Tensorflow allows for a level of abstraction by letting you simply input what the shape of your model is. An example model creation can be seen below with the bolded part being customizable.
        <br/>
        <br/>
        <img src={"../static/blog/tensorflow-code.png"} alt="Tensorflow code" style={{maxHeight:"20vh"}}></img>
        <br/>
        <br/>
        In this case I am creating a model with 1 hidden layer, an input layer that takes in a matrix of 28x28 and outputs 10 different classification. We can see why in a little bit.
        <br/>
        So what I wanted to do is create model that takes in handwritten digit and tell me what the corresponding number is. This project is loosely based on the tensorflow clothing classfication tutorial that can be found here:
        <br/>
        <br/>
        <a href="https://www.tensorflow.org/tutorials/keras/classification" target="_blank">https://www.tensorflow.org/tutorials/keras/classification</a><br/>
        <br/>
        <br/>
        The dataset that I want to use is the MNIST handwriting dataset.
        <br/>
        <br/>
        <a href="http://yann.lecun.com/exdb/mnist/" target="_blank">http://yann.lecun.com/exdb/mnist/</a><br/>
        <br/>
        <br/>
        We can see from the image description that the images are formatted by 28x28 matrix of pixels, which is why we’d want our input to be 28 by 28. Next, all we needed to do was load and run the model. The test output gives us an accuracy of 88%, which is good enough for the amount of data and training we had.<br/>
        <br/>
        <img src={"../static/blog/accuracy.png"} alt="Test accuracy"/>
        <br/>
        <br/>
        <a className="header">The client</a>
        <br/>
        <br/>
        For the client, I used React.js to create my own client. I learned through playing around with their Tic-tac-toe tutorial and created my own drawing pad using actual simulated pixels which can be found here:
        <br/>
        <img src={"../static/blog/react-logo.png"} alt="React logo"/>
        <br/>
        Pixel board:
        <a href="https://github.com/Kitenite/pixel_board" target="_blank"> https://github.com/Kitenite/pixel_board</a><br/>
        <br/>
        React tutorial:
        <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank"> https://reactjs.org/tutorial/tutorial.html</a><br/>
        <br/>
        <br/>
        After I’ve gotten comfortable with React, I continued by implementing a simple drawing pad.
        <br/>
        <img src={"../static/blog/drawing-pad.png"} alt="Drawing pad"/>
        <br/>
        The problem is the drawings created will be so different from the input sizes of tensorflow so I need to size the images according to the MNIST dataset specifications. The code for this is here:
        <br/>
        <br/>
        <a href="https://github.com/Kitenite/web-digit-recognizer/blob/master/src/components/ImageProcessor.js" target="_blank">https://github.com/Kitenite/web-digit-recognizer/blob/master/src/components/ImageProcessor.js</a><br/>
        <br/>
        <br/>
        The resizing involed compressing the image to 20x20, put 8px buffer our the image to center it by weight, convert it to black and white and invert that color. Here is the side-by-side comparison.
        <br/>
        <br/>
        <img src={"../static/blog/side-by-side.png"} alt="Comparison of processed image and MNIST image"/>
        <br/>
        <br/>
        Pretty good. Conversely, we can also train the model on a larger set of images of different ranges which makes for a much more versatile model. But that’s another project for another day. We’ll save this image and feed it to the client.
        <br/>
        <br/>
        <img src={"../static/blog/image-result.png"} alt="Image result"/>
        <br/>
        <br/>
        It works!
        <br/>
        <br/>
        <a className="header">The Server</a>
        <br/>
        <br/>
        Now that we have the client, we need something for it to talk to. The more challenging way to do this is probably to deploy a production server and make API calls to it. I opted for this route as I wanted to learn more about AWS and Docker. We will use a Docker image provided by tensorflow called Tensorflow Serving which manages the model lifecycle and provides us with a neat REST Api to work with. More information on it can be found here:
        <br/>
        <br/>
        <a href="https://www.tensorflow.org/tfx/guide/serving" target="_blank">https://www.tensorflow.org/tfx/guide/serving</a><br/>
        <br/>
        <br/>
        I also had to learn how docker work and so here’s the link for that.
        <br/>
        <br/>
        <img src={"../static/blog/docker-logo.png"} alt="Docker logo"/>
        <a href="https://docs.docker.com/get-started/" target="_blank">https://docs.docker.com/get-started/</a><br/>
        <br/>
        <br/>
        So after we’ve familiarized ourselves with Docker, we want to pull the tensorflow Docker image. Let’s try to run it in our localhost.
        <br/>
        <br/>
        <img src={"../static/blog/docker-test.png"} alt="Docker test"/>
        <br/>
        <br/>
        Awesome. Now we use the client REST api to talk to our container.
        <br/>
        <br/>
        <img src={"../static/blog/REST-test.png"} alt="REST API test"/>
        <br/>
        <br/>
        Perfect. Now that our client and server talking, we can work on deploying our server.
        <br/>
        <br/>
        <a className="header">Deployment</a>
        <br/>
        <br/>
        I decided to host my Docker server on AWS because I’ve done work with a cloud engineer before and have always wanted to learn more about AWS. I used the EC2 service here.
        <br/>
        <br/>
        <img src={"../static/blog/EC2-logo.png"} alt="AWS EC2 logo"/>
        <a href="https://docs.aws.amazon.com/ec2/index.html" target="_blank">https://docs.aws.amazon.com/ec2/index.html</a><br/>
        <br/>
        <br/>
        Following the guide, I spun up a LINUX instance and ported my Docker image there. The API can now be reached at our public IP for any to access. Now all I had to do was pretty the app up with some Sketch, hook our app up to our favorite hosting site, Heroku, and watch the magic.
        <br/>
        <br/>
        <img src={"../static/blog/app-screenshot.png"} alt="App screenshot"/>
        <a href="https://madebykiet.com/projects/digit_recognizer" target="_blank">https://madebykiet.com/projects/digit_recognizer</a><br/>
        <br/>
        <br/>
        And we are finally done!
        <br/>
        (There was also 20+ hours spent trying to solve the CORS issue but nobody want to hear about that. It was fixed using a proxy server with Express.js)
        <br/>
        <br/>
        <a className="header">Conclusion</a>
        <br/>
        <br/>
        All in all, it the project took around 2 weeks of development time. Most of the time was spent learning how to use everything (I also was on vacation for some of it). I learned very valuable React and backend skills thanks to this project and am very excited to implement these in my next ones.
        <br/>
        <br/>
        With more time, I would like to modify the AWS server to collect  user input and accuracy. From that I can start building out my own MNIST dataset and train the model on those to improve it. But that’s another project for another time.
      </p>
  </BlogLayout>
 )
}
