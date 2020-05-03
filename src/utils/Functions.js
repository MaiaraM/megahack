/**
/**Verifica se possui um callback válido e devolve para quem chamou
 * @param  {string} e eventClick
 * @param  {function} callback funcao de retorno
 * @param  {object} data objeto que será devolvido
 */
export function clickGeneric(e, callback, data) {
  if (callback) { callback(e, data); }
}

/**Return numbers without characteres */
export const onlyNumbers = (value) => {
  return value ? value.replace(/\D/g, '') : '';
};

export const currencyToNumber = (value, currency = "R$") => {
  const string = value.replace(".","").replace(",",".").replace(currency, "");
  return Number(string);
}

export const toFloat = (value, toReplace = "") => {
  const string = value.replace(".","").replace(",",".").replace(toReplace, "");
  return parseFloat(string);
}

/**onChangeValue need to be a function */
export const onChangeValue = (e, prop, obj = this) => {
  obj[prop] = e.target.value;
}

/*
* Transforma uma data em uma string no formato YYYY-MM-DD
*/
export function dateToText(value, separator="/", reverse = false) {
  if (!value) return '';
  const date = new Date(value);
  if (reverse) return `${date.getDate()}${separator}${date.getMonth() + 1}${separator}${date.getFullYear()}`;
  return `${date.getFullYear()}${separator}${date.getMonth() + 1}${separator}${date.getDate()}`;
}
/*
* Dado uma string válida, retorna uma data.
*/
export function textToDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(year, month - 1, day);
  return date;
}

/**Retorna data convertida
 * 29 de Agosto de 2019 *
 */
export const convertDate = (dateConvert) => {
	let date;
	if (dateConvert instanceof Date) {
		date = dateConvert;
	} else date = new Date(dateConvert)
	// requer um dia da semana jutamente com uma data longa
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('pt-BR', options);
}

/**Converte valor float em string*/
export const convertPrice = (value = 0, currency = "BRL") => {
  return value.toLocaleString("pt-BR", { style: "currency" , currency: currency});
}

/**Formata moedas */
export const formatNumbers = (value, prefix = '', suffix = '') => {
  if (!value) {
    return prefix.concat('0,00').concat(suffix);
  };
  let v = value.toString().replace(/\D/g, '');
  v = (v / 100).toFixed(2) + '';
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  return prefix.concat(v).concat(suffix);
}

/**Decode base64 */
export const decodeJWT = (token) => {
  let base64Url = token.split('.')[1];
  return JSON.parse(window.atob(base64Url));
}
/**Rememove  */
export const removeItemList = (list = [], item) => {
  list.splice(list.indexOf(item), 1);
}

/**Sort listBy prop */
export const sortListBy = (list, prop) =>
  list.sort((a, b) => {
    if (a[prop] < b[prop]) { return -1; }
    if (a[prop] > b[prop]) { return 1; }
    return 0;
  });

