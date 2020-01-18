import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import VoyPanel from './panels/VoyPanel'
import DigitPanel from './panels/DigitPanel'

export default function Blog() {
  return (
    <Layout page_title="Projects By Kiet">
      <Title>Projects</Title>
      <ScrollPanel title={<a><b>Voy</b> Audio Tour</a>}>
        <VoyPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Handwriting </b>Classifier AI</a>}>
        <DigitPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>More</b> To Come</a>}/>

    </Layout>
  );
}
