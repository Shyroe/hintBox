import React from "react";
import Head from "next/head";

export default ({ title }) => {
  return (
    <Head>
      <title>{title} - Palpitebox</title>
    </Head>
  );
};
