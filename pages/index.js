import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'

export default function Blog() {
  return (
    <Layout>
      <Title><a>kiet <b>Ho</b></a></Title>
      <ul>
        <PostLink title="Showcase my best projects here" />
      </ul>
    </Layout>
  );
}
