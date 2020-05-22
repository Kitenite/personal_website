import Link from 'next/link';

function CalculatorPanel() {
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
    <a href="https://github.com/Kitenite/concurrent_calculator" target="_blank">
      <img src={"../../general/CalculatorPanel.png"} alt="Voy Phone Preview" style={style}></img>
    </a>
  )
}
export default CalculatorPanel
