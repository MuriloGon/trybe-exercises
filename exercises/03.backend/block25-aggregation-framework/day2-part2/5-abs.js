// 01 - Calcule o valor absoluto do lucro total de cada produto.
const totalAbsProduct = {
  totalProfit: {
    $abs: {
      $subtract: [
        { $add: ['$purchase_price', '$taxes'] },
        '$sale_price'
      ]
    }
  }
}
db.products.aggregate([
  {
    $set: {
      ...totalAbsProduct
    }
  }
]);
