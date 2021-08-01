// Exercise 01
db.clientes.aggregate([
  { $match: { sexo: 'MASCULINO' } }
]);

// Exercise 02
db.clientes.aggregate([
  {
    $match: {
      sexo: 'FEMININO',
      dataNascimento: { $gte: new Date(1995, 0, 0), $lte: new Date(2005, 0, 0) }
    }
  },
  { $sort: { dataNascimento: -1 } }
]);

// Exercise 03
db.clientes.aggregate([
  {
    $match: {
      sexo: 'FEMININO',
      dataNascimento: { $gte: new Date(1995, 0, 0), $lte: new Date(2005, 0, 0) }
    }
  },
  { $sort: { dataNascimento: -1 } },
  { $limit: 5 }
]);

// Exercise 04
db.clientes.aggregate([
  { $match: { 'endereco.uf': 'SC' } },
  {
    $group: {
      _id: 'uf',
      total: { $count: {} }
    }
  }
]);

// Exercise 05
db.clientes.aggregate([
  {
    $group: {
      _id: '$sexo',
      total: { $count: {} }
    }
  }
])

// Exercise 06
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: { $sum: 1 }
    }
  }
]);

// Exercise 07
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: { $sum: 1 }
    }
  },
  {
    $project: {
      estado: '$_id.uf',
      sexo: '$_id.sexo',
      total: '$total',
      _id: 0
    }
  }
]);

// Exercise 08
db.vendas.aggregate([
  {
    $group: {
      _id: '$clienteId',
      total: { $sum: '$valorTotal' }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);

// Exercise 09
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $group: {
      _id: '$clienteId',
      total: { $sum: '$valorTotal' }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);

// Exercise 10
db.vendas.aggregate([
  {
    $group: {
      _id: '$clienteId',
      compras: { $sum: 1 }
    }
  },
  { $match: { compras: { $gt: 5 } } },
  { $count: 'clientes' }
]);

// Exercise 11
db.vendas.aggregate([
  {
    $match: {
      dataVenda: { $gte: ISODate('2020-01-01'), $lt: ISODate('2020-03-01') }
    }
  },
  {
    $group: {
      _id: '$clienteId',
      compras: { $count: {} }
    }
  },
  { $match: { compras: { $lt: 3 } } },
  { $count: 'total de clientes' }
]);

// Exercise 12
db.vendas.aggregate([
  {
    $lookup: {
      from: 'clientes',
      foreignField: 'clienteId',
      localField: 'clienteId',
      as: 'clienteInfo'
    }
  },
  { $unwind: '$clienteInfo' },
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-12-31'),
      }
    }
  },
  {
    $group: {
      _id: "$clienteInfo.endereco.uf",
      totalVendas: { $sum: 1 }
    }
  },

  {
    $project: {
      _id: 0,
      uf: '$_id',
      totalVendas: 1,
      mediaVendas: { $avg: '$totalVendas' }
    }
  },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 }
]);


// Exercise 13
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31'),
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      foreignField: 'clienteId',
      localField: 'clienteId',
      as: 'clienteInfo'
    }
  },
  { $unwind: '$clienteInfo' },
  {
    $group: {
      _id: "$clienteInfo.endereco.uf",
      totalVendas: { $sum: 1 },
      mediaVendas: { $avg: '$valorTotal' }
    }
  },

  {
    $project: {
      _id: 0,
      uf: '$_id',
      totalVendas: 1,
      mediaVendas: 1
    }
  },
  { $sort: { uf: -1 } },
]);