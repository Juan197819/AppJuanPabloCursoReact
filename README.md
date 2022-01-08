# TECNHOGAR S. A. 

Mi nombre es Juan Pablo Barani y esta es mi primera aplicacion con REACT.JS.

Lo que hice fue una tipica tienda e-commerce de electronica, donde yo mismo cree una base de datos de forma generica tomando unicamente las fotos de otras webs. 


### Carpeta 'src':
En esta carpeta se encuentran las 3 sub-carpetas mas importantes: 'Base de datos y estilos', 'Componentes' y 'Contenedores'.

## Base de datos y estilos

En esta carpeta se encuentran 2 archivos necesarios para el proyecto:

##### productos.js
Es el array de objetos inventados por mi usado como base de datos, el cual ademas contiene todas las promesas para obtener estos datos segun se desee. 

##### main.css
Es el archivo de estilos principal creado desde cero por mi para todo el proyecto.

#### Componentes:
En esta se encuentran todos los componentes visuales por separado. Estos son:

###### ItemDetail.js
Tiene el detalle de los productos y permite ver distintos modelos del mismo.

###### ItemList.js
Es el que mapea el array de productos y retorna un array de cards.

###### Item.js
Es el componente que retorna la card de praductos que es mapeada por el ItemList.js.

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
 

