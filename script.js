var romanized = function () {
  var num = document.getElementById("toConvert").value;
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var romanized = "";

  if (num <= 0) {
    window.alert("Please enter some positive number!");
    return;
  }

  for (var i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNum[i];
      num -= decimalValue[i];
    }
  }
  document.getElementById("answerDiv").style.display = "block";
  return document.getElementById("answer").innerHTML = romanized;
};
document.getElementById("convert").onclick = function () { romanized(); };
document.getElementById("answerDiv").style.display = "none";
