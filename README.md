# GuitarLA - Carrito de Compras 🎸

Este es un proyecto de práctica profesional desarrollado con **React** y **Vite**, que simula una tienda de guitarras con un sistema de carrito de compras dinámico y funcional.

---

## 🧠 Aprendizajes en React

En el desarrollo de este proyecto, he puesto en práctica conceptos fundamentales del ecosistema moderno de React:

* **Composición de Componentes:** División de la interfaz en piezas reutilizables como `Header`, `Guitar` y el Carrito para un código mantenible.
* **State Management (useState):** Gestión del estado global del carrito (agregar, eliminar, vaciar y modificar cantidades) de forma reactiva.
* **Efectos (useEffect):** Implementación de persistencia de datos con `localStorage` para que la selección del usuario se mantenga tras recargar la página.
* **Props & Destructuring:** Transferencia eficiente de información y funciones entre componentes padres e hijos.
* **Metodologías de Arreglos:** Uso intensivo de `.map()`, `.filter()` y `.reduce()` para renderizar productos y calcular totales en tiempo real.

---

## 🛠️ Tecnologías y Herramientas

* **React:** Biblioteca principal para la construcción de la interfaz.
* **Vite:** Tooling de última generación para un desarrollo rápido y optimizado.
* **Bootstrap v5.2.3:** Framework de CSS utilizado para el diseño base y la estructura responsiva.
* **CSS3 (Custom):** Estilos personalizados para animaciones complejas y el comportamiento del menú del carrito.
* **ESLint:** Configuración para asegurar la calidad y las mejores prácticas en el código.

---

## ✨ Características Destacadas

* **Menú de Carrito Interactivo:** Implementado con lógica CSS para mostrarse dinámicamente al interactuar con el icono.
* **Diseño Responsivo:** Adaptabilidad total a dispositivos móviles, tablets y escritorio mediante Media Queries.
* **Animaciones:** Uso de `@keyframes` para suavizar la aparición de elementos visuales en el encabezado.
* **Optimización de UI:** Inclusión de prefijos de compatibilidad (`-webkit`) y propiedades estándar para asegurar una visualización consistente en todos los navegadores.

---

## 📦 Estructura del Proyecto

| Carpeta/Archivo | Descripción |
| :--- | :--- |
| `src/components/` | Componentes reutilizables de la aplicación. |
| `src/App.jsx` | Componente raíz que contiene la lógica principal y el estado. |
| `src/index.css` | Estilos globales, variables y personalizaciones de Bootstrap. |
| `public/img/` | Recursos visuales (imágenes de guitarras y assets del diseño). |

---

## 🚀 Instalación y Ejecución

Para tener una copia local de este proyecto funcionando, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/guitar-la-carrito.git](https://github.com/tu-usuario/guitar-la-carrito.git)
    ```

2.  **Entrar a la carpeta del proyecto:**
    ```bash
    cd guitar-la-carrito
    ```

3.  **Instalar las dependencias:**
    ```bash
    npm install
    ```

4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---

Desarrollado con ❤️ como parte de mi camino en el aprendizaje de Desarrollo Web Frontend.
