import React from "react";
import useSWR from "swr";
import PageTitle from "../components/PageTitle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default () => {
  const { data, eror } = useSWR("/api/get-promo", fetcher);
  // return <pre>{JSON.stringify(data)}</pre>;
  return (
    <div className="text-center">
      <PageTitle title="Início" />
      <p className="mb-4">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião
      </p>
      <button className="bg-blue-400 py-2 px-4 text-center text-white mb-5 rounded-md">
        Dar opinião ou sugestão
      </button>
      {!data && <p>Carregando...</p>}
      {data && data.showCoupon && <p> {data.message} </p>}
    </div>
  );
};
