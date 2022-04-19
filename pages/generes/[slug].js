import axios from "axios";
import Head from "../../components/layout/Head";
import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import { BASE_URL } from "../../constants/api";
import { KEY } from "../../constants/api";

export default function Genere({ genere }) {
  console.log(genere);
  return (
    <Layout>
      <Head title={genere.name} />
      <Heading content={genere.name} />
      <p className="detail-paragraph">{genere.description}</p>
      <img className="detail-img" src={genere.image_background} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(`${BASE_URL}${KEY}`);

    console.log(response.data);

    const generes = response.data.results;

    const paths = generes.map((genere) => ({
      params: { slug: genere.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.slug}${KEY}`;
  console.log(url);

  let genere = null;

  try {
    const response = await axios.get(url);
    genere = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { genere: genere },
  };
}
