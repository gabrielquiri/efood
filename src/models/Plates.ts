class Plates {
  id: number
  name: string
  description: string
  image?: string

  constructor(id: number, nome: string, descricao: string, image?: string){
    this.id = id;
    this.name = nome;
    this.description = descricao;
    this.image = image;
  }
}

export default Plates