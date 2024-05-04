import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //el if no permite incluir mas de una vez el mismo item
    if (categories.includes(newCategory)) return;
    //setCategories se utiliza para agregar una nueva categoria
    /// Los tres puntos son el operador de propagación (spread operator) quiere decir que a categories le agrega un nuevo elemento 'Valorant'
    //En este caso Valorant aparecera en primer Lugar
    setCategories([newCategory, ...categories]);
    //console.log(newCategory)
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        //La palabra on al principio de otra es que significa que es un evento
        //onnewcategory es una propiedad del componente
        //onNewCategory={onAddCategory}

        onNewCategory={(value) => onAddCategory(value)}
      />
      
        {categories.map((category) => (
         <GifGrid key={category} category={category}/>
        ))}
      
    </>
  );
};
