import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// content
import BlackAndWhitePanel from './panels/BlackAndWhitePanel'
import ColoredPanel from './panels/ColoredPanel'



export default function Blog() {
  return (
    <Layout page_title="Designs By Kiet">
      <Title>Designs</Title>

      <ScrollPanel title={<a><b>Black</b> and White</a>}>
        <BlackAndWhitePanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Paint</b> and Canvas</a>}>
        <ColoredPanel/>
      </ScrollPanel>


      <ScrollPanel title={<a><b>More</b> To Come</a>}/>
    </Layout>
  );
}
