export const signInValidator = (email, password) => {

  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let emailregexp = /\S+@\S+\.\S+/;
  if (!emailregexp.test(email)) return "Invalid Email";
  if (!passwordRegex.test(password)) return "Invalid Password";
  return null
};
