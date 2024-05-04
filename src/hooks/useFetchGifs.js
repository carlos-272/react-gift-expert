import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
//Un hook es una funcion que regresa algo en este caso el return es el objeto que regresa
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages)
      setIsLoading(false)
    }
    useEffect(() => {
      getImages();
    }, [])
  return {
    images,
    isLoading,
  }
}
