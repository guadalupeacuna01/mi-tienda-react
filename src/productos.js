const prodLibreria = [
    {
        id: 1,
        nombre: "Agenda semanal 2026",
        color: "Marrón",
        imagen:"/agenda-marron-2026.jpg",
        categoria: "agendas-2026",
        precio: 25000,
        descripcion: "Agenda semanal 2026 con tapa dura en color marrón liso papel simil cuero, tamaño A5, ideal para organizar tu año con estilo y funcionalidad.",
    },
    {
        id: 2,
        nombre: "Agenda semanal 2026",
        color: "Azul",
        imagen: "/agenda-azul-2026.jpg",
        categoria: "agendas-2026",
        precio: 25000,
        descripcion: "Agenda semanal 2026 con tapa dura en color azul liso papel simil cuero, tamaño A5,ideal para organizar tu año con estilo y funcionalidad.",
    },
    {
        id: 3,
        nombre: "Agenda semanal 2026",
        color: "Rosa",
        imagen: "/agenda-rosa-2026.jpg",
        categoria: "agendas-2026",
        precio: 25000,
        descripcion: "Agenda semanal 2026 con tapa dura con papel simil cuero de color rosa con estampado, tamaño A5, ideal para organizar tu año con estilo y funcionalidad.",
    },
    {
        id: 4,
        nombre: "Cuaderno rayado",
        color: "Celeste",
        imagen: "/cuaderno-celeste.jpg",
        categoria: "cuadernos",
        precio: 15500,
        descripcion: "Cuaderno de tapa dura en color celeste con diseño minimalista, tamaño A5, 100 hojas rayadas, ideal para tomar notas y escribir con estilo.",
    },
    {
        id: 5,
        nombre: "Cuaderno rayado",
        color: "Marrón",
        imagen: "/cuaderno-marron.jpg",
        categoria: "cuadernos",
        precio: 15500,
        descripcion: "Cuaderno de tapa dura en color marrón con diseño minimalista, tamaño A5, 100 hojas rayadas, ideal para tomar notas y escribir con estilo.",
    },
    {
        id: 6,
        nombre: "Cuaderno rayado",
        color: "Frutal",
        imagen: "/cuaderno-rosa.jpg",
        categoria: "cuadernos",
        precio: 15500,
        descripcion: "Cuaderno de tapa dura con estampado frutal, tamaño A5, 100 hojas rayadas, ideal para tomar notas y escribir con estilo.",
    },
    {
        id: 7,
        nombre: "Cartuchera",
        color: "Marrón estampada",
        imagen: "/cartuchera-marron.jpg",
        categoria: "cartucheras",
        precio: 20300,
        descripcion: "Cartuchera de tela en color marrón con flores beige estilo minimalista, tamaño 20x10 cm, ideal para guardar tus lapiceras con estilo.",
    },
    {
        id: 8,
        nombre: "Cartuchera",
        color: "Negra",
        imagen: "/cartuchera-negra.jpg",
        categoria: "cartucheras",
        precio: 20300,
        descripcion: "Cartuchera de tela en color negra lisa, tamaño 20x10 cm, ideal para guardar tus lapiceras con estilo.",
    },
    {
        id: 9,
        nombre: "Set lapiceras",
        color: "Marrón",
        imagen: "/set-lapiceras.jpg",
        categoria: "lapiceras",
        precio: 15000,
        descripcion: "Set de 6 lapiceras de gel en tinta negro de punta fina de 0.7 mm, 1 resaltador tinta marrón y un portaminas con minas inlcuidas, ideal para escribir con elegancia y precisión.",
    },
    {
        id: 10,
        nombre: "Pack 3 lapiceras",
        color: "Amarillo, Naranja y Violeta",
        imagen: "/lapiceras-colores.jpg",
        categoria: "lapiceras",
        precio: 15000,
        descripcion: "Pack de 3 lapiceras de gel en tinta amarilla, naranja y violeta de punta fina de 0.7 mm, ideal para escribir con elegancia y precisión.",
    },
    {
        id: 11,
        nombre: "Mini Neon Gel Pens",
        color: "Colores varios",
        imagen: "/mini-lapiceras-gel.jpg",
        categoria: "lapiceras",
        precio: 15000,
        descripcion: "Pack de 10 mini lapiceras de gel de variedad de colores, ideal para escribir con colores.",
    }
];

export default prodLibreria;

const delay = (tiempo) => new Promise(resolve => setTimeout(resolve, tiempo));

export const getProductos = () => {
  return new Promise(async (resolve) => {
    await delay(800);
    resolve(prodLibreria);
  });
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const prod = prodLibreria.find(p => p.id === parseInt(id));
        prod ? resolve(prod) 
        : reject("Producto no encontrado");
      }, 800);
    });
  };
  