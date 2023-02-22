export const maskCurrency = (data) => {
  const result = data
    .replace(/(\D)/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
  return result
}

export const clearCurrency = (data) => {
  if (data.length > 2) {
    const result = data
      .replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, '$1.$2');
    return result
  }
  return `${data}`
}

export const maskCnpj = (data) => {
  const result = data
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')

  return result
}

export const maskPhone = (data) => {
  const quatro = data.substring(0, 2)

  if (quatro < 11) {
    const result = data
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?$)/, '$1')
    return result

  } else {
    const result = data
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})(\d+?$)/, '$1')

    return result
  }
}

export const maskCep = (data) => {
  const result = data
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')

  return result
}