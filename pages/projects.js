import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import VoyPanel from './posts/VoyPanel'

export default function Blog() {
  return (
    <Layout>
      <Title>Projects</Title>
      <ScrollPanel title={<a><b>Voy</b> Audio Tour</a>}>
        <VoyPanel/>
      </ScrollPanel>
    </Layout>
  );
}
