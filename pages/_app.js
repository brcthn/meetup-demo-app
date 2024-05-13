import "../styles/globals.css";
import Layout from "../components/layout/Layout";
require("dotenv").config();
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
