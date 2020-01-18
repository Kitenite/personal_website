import Layout from '../components/Layout.js'
import Title from '../components/Title'
import ScrollPanel from '../components/ScrollPanel'

import ContactPanel from './panels/ContactPanel'

export default function Contact() {
  return (
    <Layout page_title="Contact Kiet">
      <Title>Contact</Title>
      <ScrollPanel title= {<a><b>Get</b>In Touch</a>}>
        <ContactPanel/>
      </ScrollPanel>
    </Layout>
  )
}
