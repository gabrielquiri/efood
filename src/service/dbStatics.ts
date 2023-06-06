import Restaurants from "../models/Restaurants"
import Plates from "../models/Plates"

import Image1 from '../assets/imagem_restaurant_1.png'
import Image2 from '../assets/imagem_restaurant_2.png'
import ImagePrato from '../assets/imagem_restaurant_prato.png'

const prato = new Plates(1, 'Pizza Marguerita', 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', ImagePrato)

export const db = [
  new Restaurants(
    1, 
    'Hioki Sushi', 
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    4.9,
    'Japonesa',
    true,
    [prato,prato,prato,prato,prato,prato],
    Image1
  ),
  new Restaurants(
    2, 
    'La Dolce Vita Trattoria', 
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    4.6,
    'Italiana',
    false,
    [prato],
    Image2
  ),
  new Restaurants(
    3, 
    'La Dolce Vita Trattoria', 
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    4.6,
    'Italiana',
    false,
    [prato],
    Image2
  ),
  new Restaurants(
    4, 
    'La Dolce Vita Trattoria', 
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    4.6,
    'Italiana',
    false,
    [prato],
    Image2
  ),
  new Restaurants(
    5, 
    'La Dolce Vita Trattoria', 
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    4.6,
    'Italiana',
    false,
    [prato],
    Image2
  ),
  new Restaurants(
    6, 
    'La Dolce Vita Trattoria', 
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    4.6,
    'Italiana',
    false,
    [prato],
    Image2
  ),
]