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
  return out;
}

customerInfo(order);

function calcSubItemPrice(subItem) {
  return subItem.amount * subItem.price;
}

function calcItemPrice(item) {
  const keys = Object.keys(item);
  let subtotal = 0;
  for (let subitem of keys) {
    subtotal += calcSubItemPrice(item[subitem]);
  };
  return subtotal;
}

function calcTotalPrice(orderObject) {
  let total = 0;
  for (let key of Object.keys(orderObject)) {
    if (key !== 'delivery') {
      total += calcItemPrice(orderObject[key])
    }
  }

  if (orderObject['delivery']['price'])
    total += orderObject['delivery']['price'];

  return total;
}

function getAllPizzaTypes(pizzaObject) {
  return Object.keys(pizzaObject)
}

function getAllDrinks(drinksObject) {
  let output = [];

  for (let key of Object.keys(drinksObject)) {
    output.push(`${drinksObject[key].type ? drinksObject[key].type : ''}`)
  }
  return output;
}

const orderModifier = (order) => {
  const name = order.order.delivery.deliveryPerson;
  const pizza = getAllPizzaTypes(order.order.pizza).join(', ');
  const drinks = getAllDrinks(order.order.drinks).join(', ');
  const totalPrice = calcTotalPrice(order.order);

  return `Hello ${name}, the total price of ${pizza} and ${drinks} is ${totalPrice}`
}

const ex2 = orderModifier(order);
console.log(ex2)