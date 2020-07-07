import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../credentials.json";

const doc = new GoogleSpreadsheet(
  "1w1V2sgWFCuX_8SiTwqT7CB6qx9pcy45SYzfCHYSynSU"
);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    // Pegar a terceira planilha (nome é Configurações) dentro do google sheets
    const sheet = doc.sheetsByIndex[2];
    // Para buscar os dados da planilha ,é preciso pedir antes para carregar os dados em memória.
    // Carregar apenas as celulas que vamos utilizar
    await sheet.loadCells("A3:B3");

    // Pegar celular que tem o checkbox que ativa e desativa promoções
    const changePromo = await sheet.getCell(2, 0);
    console.log(changePromo.value);

    // Pegar a celula que exibe a mensagem de promoção
    const msgPromo = await sheet.getCell(2, 1);
    console.log(msgPromo.value);

    res.end(
      JSON.stringify({
        showCoupon: changePromo.value === "VERDADEIRO",
        message: msgPromo.value,
      })
    );
  } catch (err) {
    res.end(
      JSON.stringify({
        showCoupon: false,
        message: "",
      })
    );
  }
};
