const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

/* Criamos um stream de um arquivo */
const stream = fs.createReadStream('./image-test.png');

/* Aqui, criamos um formulário com um campo chamado 'file' que carregará */
/* o stream do nosso arquivo */
const form = new FormData();
form.append('file', stream);

/* Esse arquivo não será enviado no body da requisição como de costume. */
/* Em ambientes NodeJS, é preciso setar o valor de boundary no header */
/* 'Content-Type' chamando o método `getHeaders` */
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error(error);
  });
