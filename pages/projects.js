import Layout from '../components/Layout';
import PostLink from '../components/PostLink'

export default function Blog() {
  return (
    <Layout>
      <h1>Projects</h1>
      <ul>
        <PostLink title="Project 1" />
      </ul>
    </Layout>
  );
}
