import Link from 'next/link';

export default function DigitPanel(){
  const style = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    maxWidth: "100vw",
    maxHeight:"80vh",
    cursor: "pointer"
  }
  return(
    <Link href="/projects/digit_recognizer">
        <img src={"../../static/DigitRecognizer.png"} alt="Preview of AI project" style={style}></img>
    </Link>
  )
}
