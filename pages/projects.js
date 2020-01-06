import Layout from '../components/Layout';
import PostLink from '../components/PostLink'
import Title from '../components/Title'

export default function Blog() {
  return (
    <Layout>
      <Title>Projects</Title>
      <ul>
        <PostLink title="Project 1" />
      </ul>
    </Layout>
  );
}
