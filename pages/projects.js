import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import VoyPanel from './posts/VoyPanel'

export default function Blog() {
  return (
    <Layout page_title="Projects By Kiet">
      <Title>Projects</Title>
      <ScrollPanel title={<a><b>Voy</b> Audio Tour</a>}>
        <VoyPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>More</b> To Come</a>}/>

    </Layout>
  );
}
