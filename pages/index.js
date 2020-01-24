// Components
import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import AboutMePanel from './panels/AboutMePanel'
import VoyPanel from './panels/VoyPanel'
import DigitPanel from './panels/DigitPanel'
import DesignPanel from './panels/DesignPanel'


export default function Index() {
  return (
    <Layout page_title="Made By Kiet">
      <Title><a>kiet <b>Ho</b></a></Title>

      <ScrollPanel>
        <AboutMePanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Voy </b>Audio Tour</a>}>
        <VoyPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Handwriting </b>Classifier AI</a>}>
        <DigitPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Design </b>Projects</a>}>
        <DesignPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Hack</b>athon</a>}>
      </ScrollPanel>

      <ScrollPanel title={<a><b>More</b> To Come</a>}/>

      <style jsx> {`

      `} </style>

    </Layout>
  );
}
