const arrayProductos =[
    {
        id: 1,
        nombre: 'Celular LG',
        precio: 25000,
        stock: 8,
        foto: './imagenes/productos/cel LG.webp'
    },
    {
        id: 2,
        nombre: 'Celular Motorola',
        precio: 40000,
        stock: 10,
        foto: './imagenes/productos/cel Motorola.webp'
    },
    {
        id: 3,
        nombre: 'Celular Samsung',
        precio: 60000,
        stock: 5,
        foto: './imagenes/productos/cel Samsung.webp'
    },
    {
        id: 4,
        nombre: 'Notebook Lenovo',
        precio: 85000,
        stock: 4,
        foto: './imagenes/productos/notebook1.webp'
    },
    {
        id: 5,
        nombre: 'Notebook HP',
        precio: 100000,
        stock: 6,
        foto: './imagenes/productos/notebook2.webp'
    },
    {
        id: 6,
        nombre: 'Minicomponente',
        precio: 46600,
        stock: 3,
        foto: './imagenes/productos/parlante1.webp'
    },
    {
        id: 7,
        nombre: 'Pc Gamer Intel I3',
        precio: 110000,
        stock: 5,
        foto: './imagenes/productos/pc Gamer1.webp'
    },
    {
        id: 8,
        nombre: 'Pc Gamer Asus',
        precio: 92000,
        stock: 3,
        foto: './imagenes/productos/pc Gamer2.webp'
    },
    {
        id: 9,
        nombre: 'Silla Gamer',
        precio: 33000,
        stock: 4,
        foto: './imagenes/productos/silla pc Gamer.webp'
    },
    {
        id: 10,
        nombre: 'Tablet Gadnic 10"',
        precio: 28000,
        stock: 10,
        foto: './imagenes/productos/tablet1.webp'
    },
    {
        id: 11,
        nombre: 'Tv Smart LG 50"',
        precio: 55000,
        stock: 6,
        foto: './imagenes/productos/tv Smart1.webp'
    },
    {
        id: 12,
        nombre: 'Tv Smart Noblex 62"',
        precio: 85000,
        stock: 4,
        foto: './imagenes/productos/tv Smart2.webp'
    }
]

const promesaProduct = ()=>{ 
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve (arrayProductos)
        }, 2000)
    })
}

export default promesaProduct
