import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/layout/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />

      <div className="container">
        <Heading content="Contact" />
        <ContactForm />
      </div>
    </Layout>
  );
}
