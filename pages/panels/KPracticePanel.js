import Link from 'next/link';

function KPracticePanel() {
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
    <Link href="/posts/kpractice_blog">
      <img src={"../../general/KPracticePanel.png"} alt="Practice App Mobile Preview" style={style}></img>
    </Link>
  )
}
export default KPracticePanel
