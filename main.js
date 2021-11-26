const celcius = document.getElementById('celcius');
const reamur = document.getElementById('reamur');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');


kelvin.oninput = () => {
  let kelvinValue = parseInt(kelvin.value);
  let toCelcius = kelvinValue - 273;
  celcius.value = toCelcius;
  updateResults(toCelcius);
}

reamur.oninput = () => {
  let perbandingan = 5/4;
  let reamurValue = parseInt(reamur.value);
  let celciusValue = reamurValue*perbandingan;
  celcius.value = celciusValue;
  updateResults(celciusValue);
  
}

fahrenheit.oninput = () => {
  let perbandingan = 5/9;
  let celciusVal = perbandingan * (parseInt(fahrenheit.value) - 32 );
  updateResults(celciusVal);
}

celcius.oninput = () => {
  let celciusVal = parseInt(celcius.value);
  updateResults(celciusVal);
}

function celciusToReamur(celciusVal) {
  let perbandingan = 4/5;
  let hasilAkhir = perbandingan*celciusVal;
  return hasilAkhir;
}

function celciusToFahrenheit(celciusVal) {
  let perbandingan = 9/5;
  let hasilAkhir = (perbandingan*celciusVal)+32;
  return hasilAkhir;
}

function celciusToKelvin(celciusVal) {
  let hasilAkhir = celciusVal+273;
  return hasilAkhir;
}

function updateResults(celciusVal) {
  let _reamur = celciusToReamur(celciusVal);
  let _fahrenheit = celciusToFahrenheit(celciusVal);
  let _kelvin = celciusToKelvin(celciusVal);
  
  
  celcius.value = celciusVal;
  fahrenheit.value = _fahrenheit;
  kelvin.value = _kelvin;
  reamur.value = _reamur;
}
