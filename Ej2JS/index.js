const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a:  Las pizzas que tengan un id impar.

const pizzasIdImpares = pizzas.filter(pizzas => pizzas.id % 2 === 1);

  console.log('Las pizzas con ID impar son estas:');
pizzasIdImpares.forEach(pizzas => {
  console.log(pizzas.nombre);
})


// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const PizzaMenor600 = pizzas.some(pizzas => pizzas.precio < 600);
if (PizzaMenor600){
  console.log('¡Si, tenemos pizzas menores a $600!')
} else{
  console.log('No tenemos pizzas de menos de $600 en este momento.')
}
  

// c) El nombre de cada pizza con su respectivo precio.

function PizzasConPrecios(pizzas){
  console.log('Lista de precios:')
  pizzas.forEach((pizzas)=> {
    console.log(`${pizzas.nombre}:$${pizzas.precio}`);
  })
}
PizzasConPrecios(pizzas);



// d) Todos los ingredientes de cada pizza 

function PizzaIngredientes(ingredientes){
  console.log('Estos son los ingredientes de cada pizza:')
  ingredientes.forEach((pizzas)=> {
    console.log(`La ${pizzas.nombre} lleva: ${pizzas.ingredientes}`);
  })
}
PizzaIngredientes(pizzas);