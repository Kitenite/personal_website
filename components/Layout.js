// Edit for global styles
import React from 'react'
import Head from 'next/head'
import Header from './Header'
import { initGA, logPageView } from '../utils/analytics'


export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render(){
    return (
      <div>
        <Head>
          <title>{this.props.page_title}</title>
          <link rel="shortcut icon" href="../static/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
          <Header/>
          {this.props.children}
        </div>
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap" rel="stylesheet"/>
        <style jsx>{`
          font-family: 'Roboto', sans-serif;
        `}</style>
      </div>
    )
  }

}
