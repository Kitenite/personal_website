// Edit for global styles

import Header from './Header'

export default function Layout(props) {
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap" rel="stylesheet"/>
      <style jsx>{`
        font-family: 'Roboto', sans-serif;
      `}</style>

    </div>
  )
}
