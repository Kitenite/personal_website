// Components
import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import AboutMePanel from './posts/AboutMePanel'
import VoyPanel from './posts/VoyPanel'

export default function Blog() {
  return (
    <Layout page_title="Stuff By Kiet">
      <Title><a>kiet <b>Ho</b></a></Title>

      <ScrollPanel>
        <AboutMePanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Voy </b>Audio Tour</a>}>
        <VoyPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>AI </b>Projects</a>}>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Hack</b>athon</a>}>
      </ScrollPanel>

      <ScrollPanel title={<a><b>More</b> To Come</a>}/>

      <style jsx> {`

      `} </style>

    </Layout>
  );
}
