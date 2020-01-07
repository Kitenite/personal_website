// Components

import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

// Content
import AboutMe from './posts/AboutMe'

export default function Blog() {
  return (
    <Layout>
      <Title><a>kiet <b>Ho</b></a></Title>

      <ScrollPanel>
        <AboutMe/>
      </ScrollPanel>


      <ScrollPanel>
        <a><b>Voy </b>Audio Tour</a>
      </ScrollPanel>

      <ScrollPanel>
        <a><b>AI </b>Projects</a>
      </ScrollPanel>


      <ScrollPanel>
        <div>
        <a><b>Hack</b>athon</a>
        </div>
      </ScrollPanel>

    </Layout>
  );
}
