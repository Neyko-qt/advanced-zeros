module.exports = function getZerosCount(number, base) {

  var minBase = 2;

  if (base >= minBase && base <= 256) {

    for (minBase; minBase < base; minBase++) {
      if (base % minBase == 0) {
        base = base / minBase;
      }
    }
  }

  var zerosCount = 0;

  while (number >= 1 && number <= 10e7) {
    number = Math.floor(number / base);
    zerosCount += number;
  }

    return zerosCount; 
}