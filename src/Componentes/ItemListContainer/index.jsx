import { useEffect, useState } from "react";
import productos from "../../mocks/productos";
import ItemList from "../ItemList";

   function ItemListContainer({categoryId, isCategoryRoute}) {
      const [products, setProducts] = useState([]);

      useEffect(()=> {
         const productsPromise = new Promise ((resolve, reject) =>
         setTimeout (()=> resolve (products), 2000)
         );
         
         productsPromise
            .then((response)=> {
               if(isCategoryRoute) {
               const productosFiltrados = response.filter(
                  (products) => products.category === categoryId
                  );
                  setProducts(productosFiltrados)
               } else {
                  setProducts(response)
               }
            })
            .catch((err)=> console.log(err));
      }, [categoryId]);
     
      return   <section>
      <div>
            <ItemList productos={productos}/>
      </div>
   </section>

   }


export default ItemListContainer