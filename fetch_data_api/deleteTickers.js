const axios = require('./axios');

axios.get('/bitbanks/deleteTickers').then(res => console.log(res.data));
axios.get('/bitflyers/deleteTickers').then(res => console.log(res.data));
axios.get('/coinchecks/deleteTickers').then(res => console.log(res.data));
axios.get('/quoinexs/deleteTickers').then(res => console.log(res.data));
axios.get('/btcboxs/deleteTickers').then(res => console.log(res.data));
axios.get('/zaifs/deleteTickers').then(res => console.log(res.data));
