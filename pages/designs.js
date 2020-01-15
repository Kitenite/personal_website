import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'


export default function Blog() {
  return (
    <Layout page_title="Designs By Kiet">
      <Title>Designs</Title>
      <ScrollPanel title={<a><b>More</b> To Come</a>}/>
    </Layout>
  );
}
