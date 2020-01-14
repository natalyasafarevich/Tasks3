// Функции-валидаторы для всех примеров

// Возвращает true, если символ является валидным символом логина.
export const isValidLoginCharacter = char =>
  (char >= "a" && char <= "z") || char === "_";


export const isValidLogin = login =>
  login &&
  login.trim() &&
  login.split("").every(char => isValidLoginCharacter(char));
export const isValidEmail = email => email === "" || email.includes("@");