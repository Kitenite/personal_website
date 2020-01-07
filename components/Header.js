import Link from './HeaderLink'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div>
      <Link href="/" activeClassName='active'>
        <a>About</a>
      </Link>
      <Link href="/projects" activeClassName='active'>
        <a>Projects</a>
      </Link>
      <Link href="/designs" activeClassName='active'>
        <a>Designs</a>
      </Link>
      <Link href="/contact" activeClassName='active'>
        <a>Contact</a>
      </Link>
      <style jsx>{`
        padding: 2vw;
        .active {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #3B3A3A;
        }
        a:active {
          font-weight: bold;
        }
        a:hover {
          opacity: 0.6;
        }

        `}</style>
    </div>
  )
}
