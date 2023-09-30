# Next.js 13 TODO App

Bienvenido al repositorio de mi proyecto construido con la versión más reciente de Next.js, la versión 13. Este proyecto no solo demuestra mi habilidad para trabajar con tecnologías vanguardistas, sino también mi dedicación en seguir las mejores prácticas y estándares en el desarrollo web.

## Aplicación Todo con Usuarios:

La aplicación se centra en gestionar y visualizar "Todos" (tareas) y usuarios. Aquí están algunos de sus componentes clave:

- **TabsWrapper**: Ofrece una navegación tabulada entre la vista principal y la vista de usuarios.
- **TodoForm**: Permite a los usuarios agregar nuevas tareas, asociándolas a usuarios existentes.

- **TodoList & Todo**: Muestra una lista de tareas actuales donde cada tarea puede ser marcada como completada, editada o eliminada.

- **UserForm**: Los usuarios pueden crear nuevos usuarios para ser asociados a tareas.

- **User**: Representa a un usuario individual y ofrece la opción de eliminarlo.

## Principales Características:

### 1. **Next.js 13 - App Router**:

- **Enfoque en el enrutamiento**: El esqueleto de cada aplicación es su enrutamiento, y con Next.js 13, el enrutamiento ha evolucionado para ser más intuitivo y potente.
- **Componentes basados en el Sistema de Archivos**: Next.js sigue un enfoque basado en el sistema de archivos para definir rutas. Las carpetas definen rutas, mientras que los archivos dentro de estas carpetas crean la interfaz de usuario que se muestra para un segmento de ruta.
- **Componentes de Servidor**: Por defecto, los componentes dentro del directorio `app` son Componentes de Servidor de React. Esta es una optimización de rendimiento que permite fácilmente adoptarlos, aunque también se pueden usar Componentes Cliente.

### 2. **GraphQL**:

- Utilizado para gestionar todas las peticiones, proporcionando una capa de abstracción robusta y flexible entre el frontend y el backend.
- Apollo Client: Apollo Client es un cliente GraphQL de código abierto que se integra con React y Next.js para proporcionar una experiencia de desarrollo de aplicaciones modernas.

### 3. **React Server Components**:

- React Server Components permite renderizar componentes en el servidor, lo que reduce la carga en el cliente y mejora el rendimiento global.

### 4. **Tailwind CSS**:

- Para la estilización, hemos adoptado Tailwind CSS, un framework de utilidad-first, que agiliza el proceso de diseño y permite construir interfaces de usuario estéticamente agradables directamente desde HTML.

### 5. **Zustand**:

- Adoptamos Zustand para gestionar el estado global de la aplicación, proporcionando un flujo de datos coherente y fácil de seguir.

## Más Detalles Técnicos:

- **Segmentos de Ruta**: Cada carpeta en una ruta representa un segmento de ruta que se mapea a un segmento correspondiente en una URL.
- **Convenciones de Archivos**: Next.js 13 viene con una serie de archivos especiales que sirven propósitos específicos, como `layout`, `page`, `loading`, `not-found`, `error`, entre otros.

[Enlace a mi portfolio](#) (Añade aquí el enlace a tu portafolio).
