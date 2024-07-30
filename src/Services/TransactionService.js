// src/services/TransactionService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/transactions';
const CARD_API_URL = 'http://localhost:8080/credit-card-details/details';


const postTransaction = (transactionType, creditcardNumber, merchantID, currency, transactionAmount,authCode) => {
  return axios.post(`${API_URL}`, null, {
    params: {
      transactionType,
      creditcardNumber,
      merchantID,
      currency,
      transactionAmount,
      authCode
    }
  });
};
const getCreditCardDetails =(number) => {
  return axios.get(CARD_API_URL , {params : { number}});
};
export default {
  postTransaction,
 getCreditCardDetails,
};
