import React, { useState, Fragment } from "react";
import PageTitle from "../components/PageTitle";

export default () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    note: "",
  });
  const [selectedNote, setSelectedNote] = useState(1);
  const [success, setSuccess] = useState(false);
  const [userReturn, setUserReturn] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleNote = (e) => {
  //   console.log("Target: ", e.target);
  //   console.log("Target checked: ", e.target.checked);
  //   setSelectedNote(e.target.value);
  //   // if (e.target.checked) {
  //   //   setSelectedNote(e.target.value);
  //   // }
  //   console.log("selectedNote: ", selectedNote);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.nome,
      email: form.email,
      whatsapp: form.whatsapp,
      note: form.note,
    };
    console.log("nota: ", form.note);

    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setSuccess(true);
      setUserReturn(data);

      //Clear
      setForm({
        nome: "",
        email: "",
        whatsapp: "",
        note: "",
      });
    } catch (err) {}
  };
  return (
    <div className="flex flex-col w-1/2 text-center">
      <PageTitle title="Pesquisa" />
      <h1 className="font-bold text-xl capitalize">Críticas e sugestões</h1>
      <p className="my-4">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião
      </p>
      {!success && (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex mx-auto flex-col  w-1/3 shadow-l"
          action=""
        >
          <div className="mb-4">
            <label
              className="mb-2 font-bold block text-left text-gray-900 "
              htmlFor=""
            >
              Seu Nome:
            </label>
            <input
              className=" w-full rounded leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-600 py-2"
              placeholder="Insere seu nome..."
              type="text"
              name="name"
              value={form.nome}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-gray-900 font-bold mb-2"
              htmlFor="email"
            >
              E-mail:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="text"
              placeholder="Insere seu e-mail..."
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 font-bold block text-left text-gray-900 "
              htmlFor=""
            >
              Whatsapp:
            </label>
            <input
              className=" w-full rounded leading-tight focus:outline-none focus:shadow-outline appearance-none text-gray-600 py-2"
              placeholder="Insere seu telefone..."
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 font-bold block text-left text-gray-900 "
              htmlFor=""
            >
              Nota:
            </label>
            <div className="flex flex-row py-3 items-center">
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div key={index} className="flex flex-col px-2">
                    <p> {item} </p>
                    <input
                      type="radio"
                      value={item}
                      onChange={handleChange}
                      name="note"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="my-2 bg-blue-400 hover:shadow rounded block text-center py-2 px-4 font-bold text-gray-800"
          >
            Salvar
          </button>
        </form>
      )}
      {success && (
        <div>
          <p
            className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            Obrigado! por contribuir com sua sugestão ou crítica.
          </p>
          {userReturn.showCoupon && (
            <Fragment>
              <div className="mb-4 border p-4">
                Seu cupom: <br />
                <span className="font-bold text-2xl"> {userReturn.Cupom} </span>
              </div>
              <div>
                <span className="font-bold">{userReturn.Promo}</span>
              </div>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};
