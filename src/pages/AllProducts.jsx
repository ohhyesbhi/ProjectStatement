import Cards from "../components/Cards";

import axios from "axios";
import {HiSquares2X2} from "react-icons/hi2";

import { useEffect,useState } from "react";

function AllProducts() {

    const [cards,setCards] = useState([]);
    const [text,setText] = useState("");
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const [layout,setLayout] = useState(false);
    
  useEffect(()=>{
      loadcards();
  },[]);
  
  async function loadcards(){
      const response = await axios.get("https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093");
      setCards(response.data.data);
  }
  
  function handleOnClick(){
       setColor(text);
       setSize(text);
  }

  return (
 <>

 <div className="flex justify-center items-center w-full mt-4">
   <input onChange={(e)=>setText(e.target.value)} type="text"  placeholder="Type here" className="input input-bordered w-96" />
   <button className="btn btn-primary ml-3" onClick={()=>handleOnClick()}>Enter</button>
   <HiSquares2X2 onClick={()=>setLayout(!layout)} className=" ml-4 text-3xl cursor-pointer"/>
 </div>
 {
    layout ?
    <>
    <div className="flex flex-col justify-center items-center">
{
    cards.map ((products)=> {
        
        return (
            
              <div className="ml-4 mt-4"  key={products.product_title} >
                <Cards size={size} color={color} img = {products.product_image} title={products.product_title} variants = {products.product_variants}/>
              </div>
            
                          );
     
    })
}
</div>
    </>
    :
<div className="grid grid-cols-3 gap-0">

{
    cards.map ((products)=> {
        
        return (
            
              <div className="ml-4 mt-4" key={products.product_title}>
                <Cards size={size} color={color} img = {products.product_image} title={products.product_title} variants = {products.product_variants}/>
              </div>
            
                          );
     
    })
}

</div>

 }
 


</>
  );
}

export default AllProducts;
