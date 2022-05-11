// Lista de alergias
export const alergenos: Array<string> = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries", 
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"
];

export class Allergies {
  // creamos un objeto numerico para almecenar el resultado de contar Alergenos
  aIndex: number;
  constructor(allergenIndex: number) {
    // almacenamos todo en un tipo numerico
    this.aIndex = allergenIndex;
  }

  public list(): string[] {
    // creamos array
    let list = [];
    // creamos bucle
    for(let i=0; i<alergenos.length; i++) {
      if( this.aIndex & 2 ** i) {
        // Metemos en el array el resultado
        list.push(alergenos[i]);
      }
    }
    // devolvemos resultado
    return list;
  }

  public allergicTo(allergen: string): boolean {
    // Busca en el array alergenos que se le indican
    const numA = alergenos.findIndex(item => allergen == item);
    // devolvemos 
    return (numA>=0) && (this.aIndex & 2 ** numA ) > 0;
  }
}