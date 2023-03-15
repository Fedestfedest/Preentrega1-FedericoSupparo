import { useState } from "react";
import NavBar from "./Componentes/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer"
const App =() => {
const [state, setState] = useState(0)
const productos = [
    {
      id: '01',
      name: 'random1',
      category: 'nuevos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis',
      price: 75,
      img: 'https://picsum.photos/200',
      stock: 5,
    }]
return (
<div>
<NavBar setState={setState} state={state}/>
<ItemListContainer greeting="Productos buenos,bonitos y baratos" state={state}/> 
</div>
)
}
export default App;