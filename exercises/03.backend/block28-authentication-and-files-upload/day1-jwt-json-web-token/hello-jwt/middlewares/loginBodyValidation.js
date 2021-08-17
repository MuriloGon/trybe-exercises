const joi = require('joi');

const pwdAndUsrnameValidation = (username, password) => {
  const schema = joi.object({
    username: joi.string().alphanum().min(5).required(),
    password: joi.string().min(5).required(),
  });

  const { error } = schema.validate({ username, password });
  if (error) return { error: error.message };
  return {};
};

function validateLoginBody(req, res, next) {
  const { username, password } = req.body;
  const { error } = pwdAndUsrnameValidation(username, password);
  if (error) return res.status(400).json({ error });
  return next();
}

module.exports = validateLoginBody;