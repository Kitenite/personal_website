import Layout from '../components/Layout.js'
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

import ContactPanel from './posts/ContactPanel'

export default function Contact() {
  return (
    <Layout>
      <Title>Contact</Title>
      <ScrollPanel title= {<a><b>Get</b>In Touch</a>}>
        <ContactPanel/>
      </ScrollPanel>
    </Layout>
  )
}
