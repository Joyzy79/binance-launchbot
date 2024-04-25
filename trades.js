require("dotenv").config();
const fs = require("fs");
const api = require("./api");
const SYMBOL = process.env.SYMBOL;

(async () => {
  const data = await api.trades(SYMBOL);
  function convertToCSV(data) {
    const header = Object.keys(data[0]).join(";"); 
    const rows = data.map((obj) => {
      const formattedRow = {
        ...obj,
        price: parseFloat(obj.price).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        qty: parseFloat(obj.qty).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        quoteQty: parseFloat(obj.quoteQty).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        time: obj.time.toString(), 
      };
      return Object.values(formattedRow).join(";");
    }); 
    return `${header}\n${rows.join("\n")}`; 
  }

  function writeToCSV(data, filename) {
    const csvData = convertToCSV(data);
    fs.writeFileSync(filename, csvData, "utf8"); 
  }

  
  const filename = "output.csv";

  
  writeToCSV(data, filename);

  console.log(`Arquivo CSV gerado com sucesso: ${filename}`);
})();
