import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import VoyPanel from './panels/VoyPanel'
import MetronomePanel from './panels/MetronomePanel'
import DigitPanel from './panels/DigitPanel'
import MinnehackPanel from './panels/MinneHackPanel'
import CalculatorPanel from './panels/CalculatorPanel'
import KPracticePanel from './panels/KPracticePanel'



export default function Blog() {
  return (
    <Layout page_title="Projects By Kiet">
      <Title>Projects</Title>
      <ScrollPanel title={<a><b>Audio</b> Tour App</a>}>
        <VoyPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Handwriting </b>Classifier AI</a>}>
        <DigitPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>kpractice</b> App</a>}>
        <KPracticePanel/>
      </ScrollPanel>
      
      <ScrollPanel title={<a><b>Synchronous </b>Metronome</a>}>
        <MetronomePanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Social</b> Credit App</a>}>
        <MinnehackPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Concurrent</b> Calculator</a>}>
        <CalculatorPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>More</b> To Come</a>}/>

    </Layout>
  );
}
