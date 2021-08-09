// hello-msc/controllers/Author.js

const rescue = require('express-rescue');
const Joi = require('joi');
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;

  // Pedimos para o service buscar o autor
  const author = await service.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);

  // Caso não haja nenhum erro, retornamos o author encontrado
  return res.status(200).json(author);
});

const create = rescue(async (req, res, next) => {
  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    middleName: Joi.string().not().empty(),
    lastName: Joi.string().not().empty().required(),
  }).validate(req.body);

  // Caso exista algum problema com a validação, iniciamos o fluxo
  // de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await service.create(firstName, middleName, lastName);

  // Caso haja erro na criação do autor, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // do novo autor
  return res.status(201).json(newAuthor);
});

module.exports = {
  getAll,
  findById,
  create,
};
