# yup

Yup es una biblioteca de JavaScript para validación de esquemas (schema validation), especialmente popular en el desarrollo de formularios con React (combinado con librerías como React Hook Form o Formik). Permite definir reglas de validación de datos de manera declarativa y con sintaxis intuitiva.

## instalación

```sh
# Opcional: Para validación con Yup
npm install @hookform/resolvers yup
```

## Ejemplo con Yup:

```jsx
const schema = yup.object().shape({
  email: yup.string().email().required()
});
const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

```

## ejemplo de yup/react-form-hook

```js
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}
```

