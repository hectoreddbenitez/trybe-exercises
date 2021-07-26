const order1= {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
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

const customerInfo = pedido => 
  console.log(`Olá ${pedido.order.delivery.deliveryPerson}, entrega para: ${pedido.name}, Telefone: ${pedido.phoneNumber}, R. ${pedido.address.street}, Nº: ${pedido.address.number}, AP: ${pedido.address.apartment}`)
 

customerInfo(order1);

order1.name = 'Luiz Silva'
order1.payment.total = 50
const orderModifier = (order) => {
const solicitude = Object.keys(order.order.pizza)

  console.log(`Olá ${order.name}, o total do seu pedido de ${solicitude}, e Coca-Cola Zero é R$ 50,00.`)


}

orderModifier(order1);