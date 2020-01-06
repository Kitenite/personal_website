import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default PostLink
