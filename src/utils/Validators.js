/**Validador de CPF */
export const validateCPF = (cpfNumber) => {
    const cpfLength = 11;
    cpfNumber = cpfNumber.replace(/\D/g, '');
    // Verifica o tamanho da string.
    if ([cpfLength].indexOf(cpfNumber.length) < 0) return { isValid: false };
    // Verifica se todos os dígitos são iguais.
    if (/^([0-9])\1*$/.test(cpfNumber)) return { isValid: false };
    // A seguir é realizado o cálculo verificador.
    const cpfArray = cpfNumber.split('').reverse().slice(2);
    // Calcula o primeiro dígito
    cpfArray.unshift(buildDigit(cpfArray, cpfLength));
    // Calcula o segundo dígito
    cpfArray.unshift(buildDigit(cpfArray, cpfLength));
    // Dígito verificador não é válido, resultando em falha.
    if (cpfNumber !== cpfArray.reverse().join('')) return { isValid: false };
  
    return { isValid: true };
  }
  
  /**Make de CPF digit validation */
  const buildDigit = (arr = [], cpfLength = 0) => {
    const digit = arr.map((val, idx) => val * (idx + 2)).reduce((total, current) => total + current) % cpfLength;
    if (digit < 2) return 0;
    return cpfLength - digit;
  }
  
  //Validador de CNPJ
  export const validateCNPJ = value => {
    let cnpj = value.replace(/[^\d]+/g, '');
    //Verifica valor empty
    if (cnpj === '') return { isValid: false };
    //Verifica tamanho menor que 14
    if (cnpj.length !== 14)
      return { isValid: false };
    // Elimina CNPJs isValidos conhecidos
    if (cnpj === "00000000000000" ||
      cnpj === "11111111111111" ||
      cnpj === "22222222222222" ||
      cnpj === "33333333333333" ||
      cnpj === "44444444444444" ||
      cnpj === "55555555555555" ||
      cnpj === "66666666666666" ||
      cnpj === "77777777777777" ||
      cnpj === "88888888888888" ||
      cnpj === "99999999999999")
      return { isValid: false };
  
    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    //Verifica o primeiro dígito
    if (resultado.toString() !== digitos.charAt(0))
      return { isValid: false };
  
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  
    //Verifica o segundo digito
    if (resultado.toString() !== digitos.charAt(1))
      return { isValid: false };
    
    //CNPJ válido
    return { isValid: true };
  }
  
  /**Valida e-mail. */
  export const validateEmail = (email) => {
    if (!email) return { isValid: false };
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return { isValid: re.test(String(email).toLowerCase()) };
  }