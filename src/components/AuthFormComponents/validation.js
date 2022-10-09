export const val = {
  name: {
    pattern: "[a-zA-Z0-9]+",
    title:
      "The name must contain only Latin characters",
  },
  email: {
    pattern:
      '[^@\\s]+@[^@\\s]+\\.[^@\\s]+',
    title:
      'The mail must be in the format user@gmail.com',
  },
  password: {
    pattern:
      '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
    title:
      'The password must contain minimum eight characters, at least one letter and one number',
  },
};
