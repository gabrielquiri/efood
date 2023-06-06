import Plates from './Plates';

class Restaurants {
  id: number
  image?: string
  name: string
  description: string
  rate: number
  cuisine: string
  emphasis: boolean
  plates: Plates[]

  constructor(
    id: number,
    nome: string,
    descricao: string,
    avaliacao: number,
    cozinha: string,
    destaque: boolean,
    pratos: Plates[],
    image?: string
  ) {
    this.id = id;
    this.name = nome;
    this.description = descricao;
    this.image = image;
    this.rate = avaliacao;
    this.cuisine = cozinha;
    this.emphasis = destaque;
    this.plates = pratos;
  }
}

export default Restaurants 