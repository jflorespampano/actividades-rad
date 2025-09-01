# actividad

1. abra [abra](https://codi.link/)
    * en el área html, copie el siguiente código html:
    ```css
        .contenedor {
            display: flex;
        }

        .interno{
            padding: 10px;
            background-color: bisque;
            border-style:inset;
            border-color: blue;
        }
    ```
    ```html
        <div class="contenedor">
            <div class="interno">
                <p>lorem1</p>
            </div>
            <div class="interno">
                <p>lorem2</p>
            </div>
            <div class="interno">
                <p>lorem3</p>
            </div>
        </div>
    ```
2. agregue:
    ```css
        .contenedor {
            display: flex;
            flex-direction: column;
        }
    ```
3. agregue:
    ```css
        .contenedor {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    ```
4. cambie la ultima linea por:

    a. justify-content: flex-start; /* Predeterminado - al inicio */
    b. justify-content: flex-end; /* Al final */
    c. justify-content: center; /* Centrado */
    d. justify-content: space-between; /* Espacio entre elementos */
    e. justify-content: space-around; /* Espacio alrededor de elementos */
    f. justify-content: space-evenly; /* Espacio distribuido uniformemente */

5. Finalmente cambie el css por:

```css

.contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: inset;
  height: 500px;
  justify-content: space-evenly;
  
}
```
