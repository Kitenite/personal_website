import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'

export default function Blog() {
  return (
    <Layout page_title="Designs By Kiet">
      <Title>Designs</Title>
      <ul>
        <PostLink title="Design 1" />
      </ul>
    </Layout>
  );
}
