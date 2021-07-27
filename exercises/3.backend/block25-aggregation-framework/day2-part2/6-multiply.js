// 01 Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  {
    $set: {
      total: {
        $multiply: [
          "$sale_price",
          "$quantity"
        ]
      }
    }
  }
]);

// 02 Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
db.products.aggregate([
  {
    $set: {
      totalProfit: {
        $multiply: [
          {
            $subtract: [
              '$sale_price',
              { $sum: ['$purchase_price', '$taxes'] }
            ]
          },
          "$quantity"
        ]
      }
    }
  }
]);
