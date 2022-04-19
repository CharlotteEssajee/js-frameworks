import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import { KEY } from "../constants/api";

export default function Home(props) {
  console.log(props);
  return (
    <Layout>
      <Head title="Home" />
      <Heading content="Home" />

      {props.generes.map((genere) => {
        return (
          <a
            className="genere-card"
            key={genere.slug}
            href={`generes/${genere.slug}`}
          >
            {genere.name}
          </a>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  let generes = [];

  try {
    const response = await axios.get(BASE_URL + KEY);

    generes = response.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      generes: generes,
    },
  };
}
