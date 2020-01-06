import Link from 'next/link'



export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/designs">
        <a>Designs</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <style jsx>{`
        padding: 2rem;
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
