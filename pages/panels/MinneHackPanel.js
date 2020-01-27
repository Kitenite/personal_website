import Link from 'next/link';

function MinnehackPanel() {
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
    <Link href="/posts/minnehack_blog">
      <img src={"../../general/HackathonPreview.png"} alt="Minnehack Phone Preview" style={style}></img>
    </Link>
  )
}
export default MinnehackPanel
