
interface GrupoAlimentos {
    verduras: string;
    otros: string;
  }
  
  interface Receta {
    nombre: string;
    image: string;
    dificultad: string;
    tiempoPreparacion: string;
    gruposAlimentos: GrupoAlimentos;
    explicacionNutricional: string;
    receta: string;
  }
  
  export default Receta;
  