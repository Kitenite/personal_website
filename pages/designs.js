import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'

export default function Blog() {
  return (
    <Layout>
      <Title>Designs</Title>
      <ul>
        <PostLink title="Design 1" />
      </ul>
    </Layout>
  );
}
