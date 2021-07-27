// 01 - Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      as: 'transactions',
      let: { client_name: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$$client_name', '$from']
            }
          }
        },
        {
          $project: {
            _id: 0,
          }
        }
      ]
    }
  }
]);

// 02 - Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      as: 'transactions',
      let: { client_name: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$$client_name', '$from']
            }
          }
        },
        {
          $project: {
            _id: 0,
          }
        }
      ]
    }
  },
  {
    $limit: 4
  }
]);

// 03 - Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      as: 'transactions',
      let: { client_name: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$$client_name', '$from']
            },
          }
        },
        {
          $project: {
            _id: 0,
          }
        }
      ]
    }
  },
  {
    $match: {
      State: 'Florida'
    }
  }
]);
