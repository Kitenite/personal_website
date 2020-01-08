// Edit for global styles
import Head from 'next/head'
import Header from './Header'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.page_title}</title>
        <link rel="shortcut icon" href="../static/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header/>
        {props.children}
      </div>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap" rel="stylesheet"/>
      <style jsx>{`
        font-family: 'Roboto', sans-serif;

      `}</style>

    </div>
  )
}
