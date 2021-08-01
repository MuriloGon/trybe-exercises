// Exercise 01
db.clientes.aggregate([
  {
    $set: {
      idade: {
        $dateDiff: {
          endDate: '$$NOW',
          startDate: '$dataNascimento',
          unit: 'year'
        }
      }
    }
  }
]
);

// Exercise 02
db.clientes.aggregate([
  {
    $set: {
      idade: {
        $dateDiff: {
          endDate: '$$NOW',
          startDate: '$dataNascimento',
          unit: 'year'
        }
      }
    }
  },
  {
    $match: {
      idade: { $gte: 18, $lte: 25 }
    }
  },
  { $count: 'quantos?' }
]);

// Exercise 03
db.clientes.aggregate([
  {
    $set: {
      idade: {
        $dateDiff: {
          endDate: '$$NOW',
          startDate: '$dataNascimento',
          unit: 'year'
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      as: 'compras',
      localField: 'clienteId',
      foreignField: 'clienteId',
    }
  },
])

// Exercise 04, 05
db.clientes.aggregate([
  {
    $set: {
      idade: {
        $dateDiff: {
          endDate: '$$NOW',
          startDate: '$dataNascimento',
          unit: 'year'
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      as: 'compras',
      localField: 'clienteId',
      foreignField: 'clienteId',
    }
  },
  // { $unwind: '$compras' },
  {
    $match: {
      'compras.dataVenda': {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-01')
      }
    }
  },
  { $project: { _id: '$compras.dataVenda' } },
  { $count: 'total' }
])


// Exercise 06
db.clientes.aggregate([
  {
    $set: {
      idade: {
        $dateDiff: {
          endDate: '$$NOW',
          startDate: '$dataNascimento',
          unit: 'year'
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      as: 'compras',
      localField: 'clienteId',
      foreignField: 'clienteId',
    }
  },
  {
    $match: {
      'compras.dataVenda': {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-01')
      }
    }
  },
  { $unwind: '$compras' },
  {
    $group: {
      _id: '$endereco.uf',
      subtotalcount: { $count: {} }
    }
  },
  { $sort: { subtotalcount: -1 } },
  { $limit: 5 }
])

// Exercise 07, 08
// ZzZzZz
// ZzZzZz
// ZzZzZz