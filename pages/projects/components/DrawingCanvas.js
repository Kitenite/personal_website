import React, {useState, useRef, useEffect} from 'react';
import SignatureCanvas from 'react-signature-canvas'
import ImageProcessor from './ImageProcessor'


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
    let result = ImageProcessor(submittedImage)
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
