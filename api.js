const axios = require('axios');
const crypto = require('crypto');

const apiUrl = process.env.API_URL;
const apiKey  = process.env.API_KEY;
const apiSecret = process.env.SECRET_KEY;

async function newOrder(data) {
if(!apiKey ||!apiSecret)
    throw new Error( 'Preencha corretamente suas chaves de API.');
data.tipe =  "MARKET";
data.timestamp = Date.now();
data.recvwindow = 60000; 
const signature  = crypto.createHmac("sha256", apiSecret)
   .update(`${new URLSearchParams(data)}`)
   .digest("hex");

const qs = `?${new URLSearchParams({...data,signature})}`;

try{
   const result = await axios({
       method: 'POST',
       url:`${apiUrl}/v3/order${qs}`,
       headers:{ "X-MBX-APIKEY": apiKey},
   })
   return result.data;
}
catch(err){
    console.error(err);
}

}

function buy(symbol, quoteOrderQty){
    const data = { symbol, quoteOrderQty, side: "BUY"};
    return newOrder(data);
}

function sell(symbol, quantity){
    const data = { symbol, quantity, side: "SELL" };
    return newOrder(data);
}
module.exports= {buy, sell};