import emailValidator from 'email-validator';

function validateLoginReq(req) {
  const {email, password} = req.body;

  if (
    !email ||
    !password ||
    typeof(password) !== 'string' ||
    typeof(email) !== 'string' ||
    password.length < 4 ||
    password.length > 8 ||
    !emailValidator.validate(email)
  ) return false;
  return true;
}

export default validateLoginReq;
