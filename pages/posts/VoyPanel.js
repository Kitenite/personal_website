import Link from 'next/link';

function VoyPanel() {
  const style = {
    display: "block",
    paddingTop:"10vh",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80vw",
    maxHeight:"70vh",
    cursor: "pointer"
  }
  return(
    <Link href="/projects">
      <img src={"../../static/VoyPanel.png"} alt="Voy Phone Preview" style={style}></img>
    </Link>
  )
}
export default VoyPanel
