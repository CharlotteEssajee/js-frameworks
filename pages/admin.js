import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";

export default function Admin() {
  return (
    <Layout>
      <Head title="Admin" />

      <div className="container">
        <Heading content="Admin" />
      </div>
    </Layout>
  );
}
