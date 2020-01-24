import Layout from '../components/Layout';
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// content
import BlackAndWhitePanel from './panels/BlackAndWhitePanel'
import ColoredPanel from './panels/ColoredPanel'
import DesignPanel from './panels/DesignPanel'
import AchievementPanel from './panels/AchievementPanel'



export default function Blog() {
  return (
    <Layout page_title="Designs By Kiet">
      <Title>Designs</Title>

      <ScrollPanel title={<a><b>Illustrations</b> and Designs</a>}>
        <DesignPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Black</b> and White</a>}>
        <BlackAndWhitePanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Paint</b> and Canvas</a>}>
        <ColoredPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>Achievement</b> Icons</a>}>
        <AchievementPanel/>
      </ScrollPanel>

      <ScrollPanel title={<a><b>More</b> To Come</a>}/>
    </Layout>
  );
}
