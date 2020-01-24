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
    <Link href="/posts/voy_blog">
      <img src={"../../general/VoyPanel.png"} alt="Voy Phone Preview" style={style}></img>
    </Link>
  )
}
export default VoyPanel
