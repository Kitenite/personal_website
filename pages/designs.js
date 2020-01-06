import Layout from '../components/Layout';
import PostLink from '../components/PostLink'

export default function Blog() {
  return (
    <Layout>
      <h1>Designs</h1>
      <ul>
        <PostLink title="Design 1" />
      </ul>
    </Layout>
  );
}
