# TECNHOGAR S. A. 

Mi nombre es Juan Pablo Barani y esta es mi primera aplicacion con REACT.JS.

Lo que hice fue una tipica tienda e-commerce de electronica, donde use una base de datos simple creada por mi que luego subi a la App de firebase en la nube, tomando unicamente las fotos de otras webs. 

# COMO COMENZAR

Lo primero que hay que hacer luego de clonar el repositorio es ejecutar el NPM INSTALL en el CLI para descargar las librerias del package-json. Luego hacer NPM START para ejecutar la aplicacion de forma local.

# COMO FUNCIONA LA APP

La App inicia mostrando una coleccion de articulos con con sus caracteristicas junto con navBar con las rutas a los productos por categorias y al carrito con los productos ya seleccionados.
Cada producto tiene un boton para ver dicho producto en detalle y seleccionar las cantidades a comprar. Una vez confirmada la cantidad apareceran 2 botones: el primero permite volver al home a seguir seleccionando productos o finalizar la compra lo que nos llevara al carrito con todos los productos seleccionados.
La logica del carrito permite que cada cambio creciente o decreciente en la cantidad de algun producto actualice automaticamente la cantidad en el contador del navBar y el stock disponible de el producto con el cual estemos interactuando, evitando asi que si selecciono por segunda vez un producto que ya tenia en el carrito, no me permita sobrepasar el stock limite de mi producto.

### Carpeta 'src':
En esta carpeta se encuentran las 3 sub-carpetas mas importantes: 'Base de datos y estilos', 'Componentes' y 'Contenedores' mas la carpeta 'service' en cual se encuentra la logica que conecta la app con la base de datos de Firebase y la carpeta context don se guardaron los useContext para toda la App.

## Base de datos y estilos

En esta carpeta se encuentran 2 archivos necesarios para el proyecto:

##### productos.js
Es el array de objetos inventados por mi usado como base de datos inicial y que luego subi una base de datos de FIREBAS.Este archivo ademas contiene todas las promesas para obtener los productos en general, por categorias y para ver el detalle individual del producto que seleccionemos. En este proyecto este archivo esta solo a modo de ejemplo ya que los datos son extraidos de la nube.

##### main.css
Es el archivo de estilos principal creado desde cero por mi para todo el proyecto.

#### Componentes:
En esta se encuentran todos los componentes visuales por separado. Estos son:

###### ItemDetail.js
Tiene el detalle de los productos y permite ver distintos modelos del mismo.

###### ItemList.js
Es el que mapea el array de productos y retorna un array de cards.

###### Item.js
Es el componente que retorna la card de productos que es mapeada por el ItemList.js.

###### ItemCount.js
Es el componente para agregar o quitar unidades de un producto en cada card.

###### CartWidget.js
Componente del navbar con logo del carrito de compras y la cantidad de unidades del mismo.

###### NavBar.js
Barra de navegacion en el header de la pagina.

###### Button.js
Componente boton reutilizable.

#### Contenedores

En este ese encuentran los componentes contenedores principales que son llamados por el archivo principal App.jss.
 

