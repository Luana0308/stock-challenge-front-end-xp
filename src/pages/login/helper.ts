const validateEmailForm = (input: string): boolean => {
  return input.includes('@');
};

const validatePasswordForm = (input: string): boolean => {
  return input.length > 5;
};

export const validateForm = (email: string, password: string): boolean => {
  return validateEmailForm(email) && validatePasswordForm(password);
};
