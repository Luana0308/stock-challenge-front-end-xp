const validateEmailForm = (input: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

const validatePasswordForm = (input: string): boolean => {
  const minCharacteres = 5;
  return input.length >= minCharacteres;
};

export const validateForm = (email: string, password: string): boolean => {
  return validateEmailForm(email) && validatePasswordForm(password);
};
