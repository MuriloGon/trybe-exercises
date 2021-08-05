

function parseParams(req, res, next) {
  const {operation, num1, num2} = req.params;
  const op = operation;
  const a = Number(num1);
  const b = Number(num2);
  req.variables = {op, a, b};
  next();
}

function parametersValidation(res, req, next) {
  const {op, a, b} = res.variables;
  const operations = ['sum', 'sub', 'div', 'mul'];
  if (!operations.includes(op)) {
    return req.status(400).json({error: true, msg: 'enter a valid operation'});
  }
  if (isNaN(a) || isNaN(b)) {
    return req.status(400).json({error: true, msg: 'enter valid number'});
  }
  next();
}

function sum(res, _req, next) {
  const {op, a, b} = res.variables;
  if (op==='sum') res.result = a+b;
  next();
}

function sub(res, _req, next) {
  const {op, a, b} = res.variables;
  if (op==='sub') res.result = a-b;
  next();
}

function mul(res, _req, next) {
  const {op, a, b} = res.variables;
  if (op==='mul') res.result = a*b;
  next();
}

function div(res, req, next) {
  const {op, a, b} = res.variables;
  if (b === 0) {
    return req.status(400)
        .json({error: true, msg: 'not permited division by zero'});
  }
  if (op==='div') res.result = a/b;
  next();
}

export default [parseParams, parametersValidation, sum, sub, mul, div];

