export default class ConvertService {
  static convertMoney(FROM, TO) {
    return fetch(
      ` https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${FROM}/${TO}`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
