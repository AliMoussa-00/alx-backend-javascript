const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
};

export default getPaymentTokenFromAPI;
