import { useEffect, useState } from "react";
import productos from "../../mocks/productos";
import ItemList from "../ItemList";
function ItemListContainer({greeting, state,}) {
   console.log(state);
   const [listadoProductos, setListadoProductos] = useState([]);
   useEffect(() => {
      const getData=()=>{ return new Promise ((resolve, reject) =>setTimeout(() => productos, 2000)
      )};
      getData.then((Response)=> setListadoProductos (Response)).catch((err)=> console.log(err));
      },[]);
      console.log({productos})

   return   <section>
               <div>{greeting}</div>;
               <div>{state}</div>
               <div>
                  <ul>
                     <ItemList productos={listadoProductos}/>
                  </ul>
               </div>
            </section>
}

export default ItemListContainer