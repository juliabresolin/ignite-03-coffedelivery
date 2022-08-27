import { v4 as uuidv4 } from 'uuid'

export const coffes = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    categories: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: './images/expresso-tradicional.png',
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    categories: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: './images/expresso-americano.png',
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    categories: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: './images/expresso-cremoso.png',
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    categories: ['Tradicional'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: './images/expresso-gelado.png',
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    categories: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: './images/cafe-com-leite.png',
  },
  {
    id: uuidv4(),
    name: 'Latte',
    categories: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: './images/latte.png',
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    categories: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: './images/capuccino.png',
  },
  {
    id: uuidv4(),
    name: 'Machiato',
    categories: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: './images/machiato.png',
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    categories: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: './images/mocaccino.png',
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    categories: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: './images/chocolate-quente.png',
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    categories: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: './images/cubano.png',
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    categories: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: './images/havaiano.png',
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    categories: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: './images/arabe.png',
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    categories: ['Especial'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: './images/irlandes.png',
  },
]
