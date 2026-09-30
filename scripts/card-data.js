const cardsData = [
  {
    id: 1,
    category: "coffee",
    title: "Irish coffee",
    description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    priceInDollars: 7,
    src: "../resources/catalog/coffee-1.jpg",
    alt: "Irish coffee",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 2,
    category: "coffee",
    title: "Kahlua coffee",
    description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    priceInDollars: 7,
    src: "../resources/catalog/coffee-2.jpg",
    alt: "Kahlua coffee",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 3,
    category: "coffee",
    title: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    priceInDollars: 5.5,
    src: "../resources/catalog/coffee-3.jpg",
    alt: "Honey raf",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 4,
    category: "coffee",
    title: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    priceInDollars: 5,
    src: "../resources/catalog/coffee-4.jpg",
    alt: "Ice cappuccino",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 5,
    category: "coffee",
    title: "Espresso",
    description: "Classic black coffee",
    priceInDollars: 5,
    src: "../resources/catalog/coffee-5.jpg",
    alt: "Espresso",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 6,
    category: "coffee",
    title: "Latte",
    description: "Espresso coffee with the addition of steamed milk and dense milk foam",
    priceInDollars: 5.5,
    src: "../resources/catalog/coffee-6.jpg",
    alt: "Latte",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 7,
    category: "coffee",
    title: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    priceInDollars: 5.5,
    src: "../resources/catalog/coffee-7.jpg",
    alt: "Latte macchiato",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 8,
    category: "coffee",
    title: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    priceInDollars: 6.5,
    src: "../resources/catalog/coffee-8.jpg",
    alt: "Coffee with cognac",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Cinnamon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 9,
    category: "tea",
    title: "Moroccan",
    description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    priceInDollars: 4.5,
    src: "../resources/catalog/tea-1.png",
    alt: "Moroccan",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Lemon",
        price: 0.25,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 10,
    category: "tea",
    title: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    priceInDollars: 5,
    src: "../resources/catalog/tea-2.png",
    alt: "Ginger",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Lemon",
        price: 0.5,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Lemon",
        price: 0.25,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 11,
    category: "tea",
    title: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    priceInDollars: 5,
    src: "../resources/catalog/tea-3.png",
    alt: "Cranberry",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Lemon",
        price: 0.25,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 12,
    category: "tea",
    title: "Sea buckthorn",
    description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    priceInDollars: 5,
    src: "../resources/catalog/tea-4.png",
    alt: "Sea buckthorn",
    sizes: {
      "S": { 
        size: "200 ml",
        price: 0,
      },
      "M": { 
        size: "300 ml",
        price: 1,
      },
      "L": { 
        size: "400 ml",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Sugar",
        price: 0.25,
      },
      "2": { 
        additive: "Lemon",
        price: 0.25,
      },
      "3": { 
        additive: "Syrup",
        price: 1,
      },
    },
  },
  {
    id: 13,
    category: "dessert",
    title: "Marble cheesecake",
    description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    priceInDollars: 3.5,
    src: "../resources/catalog/dessert-1.png",
    alt: "Marble cheesecake",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 14,
    category: "dessert",
    title: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    priceInDollars: 4,
    src: "../resources/catalog/dessert-2.png",
    alt: "Red velvet",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 15,
    category: "dessert",
    title: "Cheesecakes",
    description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    priceInDollars: 4.5,
    src: "../resources/catalog/dessert-3.png",
    alt: "Cheesecakes",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 16,
    category: "dessert",
    title: "Creme brulee",
    description: "Delicate creamy dessert in a caramel basket with wild berries",
    priceInDollars: 4,
    src: "../resources/catalog/dessert-4.png",
    alt: "Creme brulee",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 17,
    category: "dessert",
    title: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    priceInDollars: 4.5,
    src: "../resources/catalog/dessert-5.png",
    alt: "Pancakes",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 18,
    category: "dessert",
    title: "Honey cake",
    description: "Classic honey cake with delicate custard",
    priceInDollars: 4.5,
    src: "../resources/catalog/dessert-6.png",
    alt: "Honey cake",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 18,
    category: "dessert",
    title: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    priceInDollars: 5.5,
    src: "../resources/catalog/dessert-7.png",
    alt: "Chocolate cake",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
  {
    id: 20,
    category: "dessert",
    title: "Black forest",
    description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    priceInDollars: 6.5,
    src: "../resources/catalog/dessert-8.png",
    alt: "Black forest",
    sizes: {
      "S": { 
        size: "50 g",
        price: 0,
      },
      "M": { 
        size: "100 g",
        price: 1,
      },
      "L": { 
        size: "200 g",
        price: 1.5,
      },
    },
    additives: {
      "1": { 
        additive: "Berries",
        price: 0.75,
      },
      "2": { 
        additive: "Nuts",
        price: 0.75,
      },
      "3": { 
        additive: "Jam",
        price: 0.5,
      },
    },
  },
]

export { cardsData };