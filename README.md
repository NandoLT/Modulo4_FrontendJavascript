### Para poder hacer correr el proyecto descargar sparrest.js de  https://github.com/kasappeal/sparrest.js y sustituir la carpeta public por la incluida en el repo, en caso de no existir cimplemente añadirla a la ráiz de sparrest, así como el archivo db.json
------------------------------------
------------------------------------
------------------------------------


# Datos de Acceso 
## Usuario 1:
### Usuario: leonlc@hotmail.com 
### Contraseña: 123456
### Productos: Del 1 - 5
-------------------------
## Usuario 2:
### Usuario: veronica1985@gmail.com 
### Contraseña: 123456
### Productos: Del 6 - 7
--------------------------
--------------------------

# Menú
- Menú base con botones de Login y Registro, si la web detecta que no está logueado.
- Caso de estar logueqdo el menú mostraría las opciones de: Crear producto, ir a la sección privada del usuario y un botón de log out.

# Página de Inicio
- Listado completo de productos, en esta sección de la web, sólo se puede ver el listado y acceder al detalle.

# Página de Detalle
- El detalle muestra de manera extendida la información del producto, mostrando como dato adicional la descripción.
- En esta sección si el usuario está logueado y el producto ha sido creado por el, tendrá acceso al borrado y a la edición del mismo.

# Página de Edición
- En la página de edición sólo se puede entrar si estás logueado. En caso contrario vuelve a la página de inicio.
- Si estando logueado se accede por url /edit-product.html, estando está sin una query, se le indicará al usuario que ha accedido sin indicar ningún producto.
- Si se accede por la ruta detalla --> editar se mostrará un formulario con los campos de los que consta el producto.

1. Nombre, descripción y precio se puede editar directamente.
2. Los tags tenemos la posibilidad de borrar los que tenemos y añadir nuevos.
3. Pra modificar Tipo de producto e imagen debemos eliminar el estado actual para que nos muestre de nuevo el campo select del formulario y el buscador de archivos.

- Cuando terminamos la edición volvemos a la vista detalle.

# Login y Registro
- Páginas de Login y Registro básicas. 

# Página de MyNodepop
- Esta equivaldría a la sección privada de cada usuario mostrando únicamente los productos que cada usuario ha subidoa a la web.
>TODO: Implementar botones de edición y borrado en la ficha resumen de producto.


