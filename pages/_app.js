import React from "react";
// Essa página ela é padrão e aparecerá em todas as outras paginas.
// Import css
import "../css/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function _app({ Component, pageProps }) {
  return (
    // <div className="container-fluid mx-auto">
    //   <Header />
    //   <div className="py-5 flex justify-center items-center">
    //     <Component {...pageProps} />
    //   </div>
    //   <Footer />
    // </div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default _app;
