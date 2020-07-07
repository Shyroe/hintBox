import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 py-5">
      <h2 className="text-white text-center">
        Projeto desenvolvidor por: Khalil Shyroe /{" "}
        <a
          className="hover:text-red-500 hover:font-bold"
          href="https://github.com/Shyroe"
        >
          {" "}
          Github
        </a>{" "}
        /{" "}
        <a
          className="hover:text-red-500 hover:font-bold"
          href="https://www.linkedin.com/in/leonardo-camargo/"
        >
          {" "}
          LinkedIn
        </a>{" "}
      </h2>
    </div>
  );
}

export default Footer;
