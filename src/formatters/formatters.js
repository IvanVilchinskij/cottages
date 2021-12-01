export const phoneFormatter = (phone, withSymbols = false) => {
  const phoneNumbers = phone.split('')

  if (withSymbols) {
    return `${phoneNumbers[0]} (${phoneNumbers.slice(1, 4).join('')}) ${phoneNumbers.slice(4, 7).join('')}-${phoneNumbers.slice(7, 9).join('')}-${phoneNumbers.slice(9).join('')}` 
  } else {
    return `${phoneNumbers[0]} ${phoneNumbers.slice(1, 4).join('')} ${phoneNumbers.slice(4, 7).join('')} ${phoneNumbers.slice(7, 9).join('')} ${phoneNumbers.slice(9).join('')}` 
  }
} 
