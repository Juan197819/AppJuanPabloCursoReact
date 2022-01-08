const arrayProductos =[
    {
        id: 1,
        categoria: 'Celulares y Tablets',
        nombre: 'Celular LG',
        precio: 25000,
        stock: 8,
        foto: './imagenes/productos/cel LG.webp'
    },
    {
        id: 2,
        categoria: 'Celulares y Tablets',
        nombre: 'Celular Motorola',
        precio: 40000,
        stock: 10,
        foto: './imagenes/productos/cel Motorola.webp'
    },
    {
        id: 3,
        categoria: 'Celulares y Tablets',
        nombre: 'Celular Samsung',
        precio: 60000,
        stock: 5,
        foto: './imagenes/productos/cel Samsung.webp'
    },
    {
        id: 4,
        categoria: 'Notebooks',
        nombre: 'Notebook Lenovo 15"',
        precio: 85000,
        stock: 4,
        foto: './imagenes/productos/notebook1.webp'
    },
    {
        id: 5,
        categoria: 'Notebooks',
        nombre: 'Notebook HP 20"',
        precio: 100000,
        stock: 6,
        foto: './imagenes/productos/notebook2.webp'
    },
    {
        id: 6,
        categoria: 'Audio y Video',
        nombre: 'Minicomponente',
        precio: 46600,
        stock: 3,
        foto: './imagenes/productos/parlante1.webp'
    },
    {
        id: 7,
        categoria: 'Gamer',
        nombre: 'Pc Gamer Intel I3',
        precio: 110000,
        stock: 5,
        foto: './imagenes/productos/combo Gamer.webp'
    },
    {
        id: 8,
        categoria: 'Gamer',
        nombre: 'Pc Gamer Asus',
        precio: 92000,
        stock: 3,
        foto: './imagenes/productos/escritorio Gamer.webp'
    },
    {
        id: 9,
        categoria: 'Gamer',
        nombre: 'Silla Gamer',
        precio: 33000,
        stock: 4,
        foto: './imagenes/productos/silla pc Gamer.webp'
    },
    {
        id: 10,
        categoria: 'Celulares y Tablets',
        nombre: 'Tablet Gadnic 10"',
        precio: 28000,
        stock: 10,
        foto: './imagenes/productos/tablet1.webp'
    },
    {
        id: 11,
        categoria: 'Audio y Video',
        nombre: 'Tv Smart LG',
        precio: 45000,
        stock: 6,
        foto: './imagenes/productos/tv Smart1.webp'
    },
    {
        id: 12,
        categoria: 'Audio y Video',
        nombre: 'Tv Smart Noblex',
        precio: 68000,
        stock: 4,
        foto: './imagenes/productos/tv Smart2.webp'
    }
]

export const promesaProd = ()=>{ 
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve (arrayProductos)
        }, 1000)
    })
} 

export const getItem = (id)=>{ 
    return new Promise ((resolve, reject)=>{

        const product=arrayProductos.find(producto=> Number (producto.id) === Number(id));
        setTimeout(()=> {
            resolve (product)
        }, 1000)
    })
}

export const getItemByCategory = (categoria)=>{ 
    return new Promise ((resolve, reject)=>{

        const product=arrayProductos.filter(producto=>producto.categoria === (categoria));
        setTimeout(()=> {
            resolve (product)
        }, 1000)
    })
}

