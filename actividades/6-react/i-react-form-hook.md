# react form hook

React Hook Form es una biblioteca popular para manejar formularios en React de manera eficiente y con mínimo código. Se destaca por su rendimiento, facilidad de uso y validación integrada, utilizando hooks como useForm. Es una alternativa moderna a soluciones como Formik o Redux Form.


Características principales

* Alto rendimiento:
* Minimiza re-renders innecesarios en los componentes.
* Controla inputs de forma no controlada (uncontrolled) por defecto, lo que mejora la velocidad.
* Validación fácil:
* Soporta validación nativa (HTML5), esquemas con Yup o Zod, y validación personalizada.
* Mínimo boilerplate:

Simplifica el manejo de estados y eventos con register.

Ejemplo básico:

```jsx
<input {...register("nombre")} />

```
* Integración con UI libraries:

* Compatible con Material UI, Ant Design, Chakra UI, etc.

* Manejo de errores intuitivo:

* Acceso a errores via formState.errors.

## instalación

```sh
npm install react-hook-form
# Opcional: Para validación con Yup
npm install @hookform/resolvers yup
```

## ejemplo básico

El siguiente extracto de código demuestra un ejemplo de uso básico

```js
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // Mira el valor de la entrada: example pasando su nombre

  return (
    /* "handleSubmit" validará los inputs antes de hacer "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* registra el input en el hook invocando a la dunción "register" */}
      <input defaultValue="test" {...register("example")} />
      
      {/* incluye validacion con required u otra regla de validacion HTML */}
      <input {...register("exampleRequired", { required: true })} />
      {/* los errores se regresan cuando la validacion del campo falla  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}
```

## registrando campos 

Uno de los conceptos clave en React Hook Form es registrar el componente en el hook. 

```js
register("cmpo")
```

Esto hará que su valor esté disponible tanto para la validación como para el envío del formulario.

**Nota:** Cada campo debe tener un nombre como clave para el proceso de registro.

## aplicando validación

Lista de reglas de validación soportadas

* required
* min
* max
* minLength
* maxLength
* pattern
* validate


Ejemplo:
```js
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
```

## ligas

[documentación](https://www.react-hook-form.com/get-started/)