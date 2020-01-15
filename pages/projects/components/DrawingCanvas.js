import {useState, useRef, useEffect} from 'react';
import SignatureCanvas from 'react-signature-canvas'

export default function DrawingCanvas(){
  // useStates
  const sigCanvas = useRef({});
  const [imageURL, setImageURL] = useState(null);
  const [resultArray, setResultArray] = useState(null);
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  // Canvas Configuration

  if (process.browser) {
    useEffect(() => setHeight(document.children[0].clientHeight), [document.children[0].clientHeight])
    useEffect(() => setWidth(document.children[0].clientWidth), [document.children[0].clientWidth])
  }
  const canvasWidth =  Math.min(height, width)/2;
  const brushSize = (canvasWidth/30).toString(10);

  // Functions
  const clearPad = () => {
    sigCanvas.current.clear();
    setImageURL(null);
    setResultArray(null);
  };
  const submitPad = () => {
    let submittedImage = sigCanvas.current.getTrimmedCanvas();
    let result = processImage(submittedImage)
    apiCall(result[1]);
    setImageURL(result[0].toDataURL("image/png"));
  };

  // Query our AI model
  const apiCall = (image_array) => {
    const model_url = '/api/v1/models/digit_model:predict';
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // Get results and process
      if (xhr.responseText){
        let reponse = JSON.parse(xhr.responseText);
        processResult(reponse)
      }
    });
    xhr.open('POST', model_url);
    xhr.send(JSON.stringify({ "instances": image_array }));
  }

  const processResult = (reponse) => {
    let unsorted_array = reponse["predictions"][0];
    let sorted_array = Array(unsorted_array.length);
    // Get all results above 0.00%
    for (var i = 0; i< unsorted_array.length; i++){
      let index = unsorted_array.indexOf(Math.max(...unsorted_array));
      let confidence = (unsorted_array[index]*100).toFixed(2)
      if (confidence > 0){
        sorted_array[i] = [index, confidence];
        unsorted_array[index] = 0;
      }
    }
    setResultArray(sorted_array);
  }

  const result_graph = (resultArray) => {
    return(<div>
      {resultArray.map((result, index) => (
        <p key={index}>Number: {result[0]} <br/>Confidence: {result[1]}%</p>
    ))}
    </div>
    )
  }

  const processImage = (img) => {
    // Scale image
    const canvas =document.createElement('canvas');
    const scale = Math.min(20/img.width, 20/img.height);
    canvas.width = 28;
    canvas.height = 28;
    const cctx = canvas.getContext('2d');
    cctx.imageSmoothingEnabled = true;
    const scaled_width = img.width*scale;
    const scaled_height = img.height*scale;
    const dx = (28 - scaled_width)/2;
    const dy = (28 - scaled_height)/2;
    cctx.drawImage(img, dx, dy, scaled_width, scaled_height);


    // Turn into 2D array of 28x28
    const image_array = Array(28);
    var column_count = 0
    var row_count = 0
    var column_array = Array(28);

    // invert colors, make black and white and remove alpha
    var imgData = cctx.getImageData(0, 0, canvas.width, canvas.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {

      // Fill array
      if (column_count >= 28){
        column_count = 0;
        image_array[row_count] = column_array;
        // Reset column_array
        column_array = Array(28);
        row_count++;
      }

      if (imgData.data[i + 3] > 0){
        // Used to visualize image for debugging, can be discarded
        imgData.data[i] = 255;
        imgData.data[i+1] = 255;
        imgData.data[i+2] = 255;
        // Convert to either 0 or 1
        column_array[column_count] = 1;
      } else {
        // Used to visualize image for debugging, can be discarded
        imgData.data[i] = 0;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        // Convert to either 0 or 1
        column_array[column_count] = 0;
      }
      imgData.data[i + 3] = 255;
      column_count++;
    }

    // Lazy add final row empty
    var final_row = Array(28);
    for (var i =0; i< final_row.length; i++){
      final_row[i] = 0;
    }
    image_array[27] = final_row;

    // Print out array
    // console.log(image_array);

    cctx.putImageData(imgData, 0, 0);
    let newImage = canvas;
    return [newImage, image_array];
  }

  return(
    <div>
      <SignatureCanvas
            ref = {sigCanvas}
            penColor='black'
            velocityFilterWeight='0'
            maxWidth= {brushSize}
            dotSize='0'
            canvasProps={{
              width: canvasWidth,
              height: canvasWidth,
              className: 'signatureCanvas'
            }} />
      <div className="button-wrapper">
        <button className="button" onClick={clearPad}>clear</button>
        <button className="button" onClick={submitPad}>submit</button>
      </div>
      {resultArray ? (
        <>
          <a>Your result: </a>
          <a>{result_graph(resultArray)}</a>
        </>
      ) : null}

      {imageURL ? (
        <>
          <a>Processed Digit</a>
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px"
            }}
          />
        </>
      ) : null}
    </div>
  )
}
