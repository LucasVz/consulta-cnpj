import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

async function getCompanies(cnpj) {
  return await axios({
    url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
    adapter: jsonpAdapter,
    callbackParamName: 'callback',
  });
}

export { getCompanies };
