import Plates from './Plates';

class Restaurants {
  id: number
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
    pratos: Plates[]
  ) {
    this.id = id;
    this.name = nome;
    this.description = descricao;
    this.rate = avaliacao;
    this.cuisine = cozinha;
    this.emphasis = destaque;
    this.plates = pratos;
  }
}

export default Restaurants 