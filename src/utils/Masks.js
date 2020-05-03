
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';

//PHONE
export const maskPhone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

//CELPHONE com 9 no inicio (9 0000-0000)
export const maskCell = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

//CPF
export const maskCPF = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

//CNPJ ( 00.000.000/0000-00)
export const maskCNPJ = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

//CEP
export const maskCEP = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

//Data
export const maskDate = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

export const maskEmail = emailMask;

//Moeda
export const maskMoeda = createNumberMask({
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    requireDecimal: true,
    prefix: 'R$',
    suffix: '' // This will put the dollar sign at the end, with a space.
});
