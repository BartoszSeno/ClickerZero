// This function formats a number with suffixes like K, M, B, T, etc.
export function formatNumber(num: any, decimalPlaces = 0) {
  const suffixes = [
    "",
    " K",
    " M",
    " B",
    " T",
    " Qa",
    " Qi",
    " Sx",
    " Sp",
    " Oc",
    " Un",
    " Do",
    " Tr",
    " Qa",
    " Qi",
    " Sx",
    " Sp",
    " Oc",
    " No",
    " D",
    " V",
    " T",
    " Qa",
    " Qi",
    " Sx",
    " Sp",
    " O",
    " N",
  ];
  const base = Math.floor(Math.log10(Math.abs(num)) / 3);
  const suffix = suffixes[base];
  const formattedNum = (num / Math.pow(10, base * 3)).toFixed(decimalPlaces);
  return formattedNum + suffix;
}
