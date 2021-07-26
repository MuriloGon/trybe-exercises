// 01 - Selecione todas as transações feitas pelo cliente chamado "Dave America".
db.transactions.aggregate([]);

// 02 - Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".
db.transactions.aggregate([
  {
    $match: {
      $or: [
        { value: { $gte: 700, $lte: 6000 } },
        { from: 'Lisa Simpson' }
      ]
    }
  }
]);

// 02 - Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([
  { $match: { value: { $gte: 1000 } } },
  { $limit: 3 },
  { $sort: { value: -1 } }
]);