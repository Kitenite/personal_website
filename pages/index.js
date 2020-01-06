import Layout from '../components/Layout';
import PostLink from '../components/PostLink'

export default function Blog() {
  return (
    <Layout>
      <h1>Kiet Ho</h1>
      <ul>
        <PostLink title="Showcase my best projects here" />
      </ul>
    </Layout>
  );
}
