import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../credentials.json";
import { format } from "date-fns";

const doc = new GoogleSpreadsheet(
  "1w1V2sgWFCuX_8SiTwqT7CB6qx9pcy45SYzfCHYSynSU"
);

const genCoupon = () => {
  // converte para hexadecimal
  let code = parseInt(format(new Date(), "yyMMddHHmmssSSS"))
    .toString(16)
    .toUpperCase();
  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1]; // Selecionar planilha: Resultado-Pesquisa
    const data = JSON.parse(req.body);

    // Get data Config Sheet
    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A3:B3");
    const changePromo = sheetConfig.getCell(2, 0);
    const msgPromo = sheetConfig.getCell(2, 1);

    let Cupom = "";
    let Promo = "";

    if (changePromo.value === "VERDADEIRO") {
      Cupom = genCoupon();
      Promo = msgPromo.value;
    }

    // Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.nome,
      Email: data.email,
      Whatsapp: data.whatsapp,
      "Data Preenchimento": format(new Date(), "dd/MM/yyyy HH:mm:ss aaaa"),
      Cupom: Cupom,
      Promo: Promo,
      Nota: data.nota,
    });
  } catch (err) {}
  res.end("error");
};
