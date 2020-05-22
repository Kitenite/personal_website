import Link from 'next/link';

function Metro() {
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
    <Link href="/posts/metronome_blog.js">
      <img src={"../../general/MetronomePanel.png"} alt="Panel App Preview" style={style}></img>
    </Link>
  )
}
export default Metro
