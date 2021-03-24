const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const { name, phoneNumber } = order;
  const adress = `St: ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`
  const orderName = order.order.delivery.deliveryPerson;
  const out = `Hello ${orderName}, delivery from: ${name}, Telephone: ${phoneNumber}, ${adress}`
  console.log(out)
  return out
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);