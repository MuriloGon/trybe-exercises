// 01 - Selecione todos os bancos, ou seja, valores do campo bank ;
db.transactions.aggregate([]).itcount();

// 02 - Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      total_value: { $sum: '$value' }
    }
  }
])

// 03 - Selecione o valor total de transações;
db.transactions.aggregate([
  {
    $group: {
      _id: null,
      total_value: { $sum: '$value' }
    }
  }
])

// 03 - Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      total_value: { $sum: '$value' }
    }
  },
  {
    $match: {
      total_value: { $gt: 1000 }
    }
  }
])