import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ConvertService from "./convertservice.js";

function getElements(response) {
  console.log(response);
  if (response.result === "success") {
    const convertedCurrency =
      $("#currencyFrom").val() / response.conversion_rate;
    $("#currencyTo").val(convertedCurrency);
  } else {
    $("#showErrors").text(`There was an ${response.result}: unsupported-code`);
  }
}

$(document).ready(function () {
  $("button#convert").on("click", () => {
    const TO = $("select#to").val();
    const FROM = $("select#from").val();
    ConvertService.convertMoney(FROM, TO).then(function (response) {
      getElements(response);
    });
  });
});
