import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {images, isloading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isloading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem 
            key={image.id}
           { ...image }//Trae todas las propiedades que hay en el image 
            />
          ))
        }
        
       
      </div>
    </>
  );
};
//{ ...image } reemplaza a las propiedades siguientes:
//title={image.title}
//url={image.url}