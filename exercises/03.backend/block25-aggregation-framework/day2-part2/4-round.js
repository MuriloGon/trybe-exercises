// 01 - Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate([
  {
    $set: {
      floor: { $floor: '$purchase_price' }
    }
  }
]);

// 02 - Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
db.products.aggregate([
  {
    $set: {
      inteiro_lucro: { $ceil: { $subtract: ['$sale_price', { $sum: ['$purchase_price', '$taxes'] }] } }
    }
  }
]);
