import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="container-fluid mx-auto">
      <Header />
      <div className="py-5 flex justify-center items-center">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
