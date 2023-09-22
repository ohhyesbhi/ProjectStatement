import { useEffect, useState } from "react";


function Cards({img,title,variants,color,size}) {
const [variant,setVariant] = useState([]);

useEffect(()=>{
    const mappedData = variants.map(item => {
           return Object.values(item)[0];
    });

    setVariant(mappedData);
},[]);

  return (
  <>
  <div className="card w-96 bg-base-100 shadow-xl flex flex-row">
      <figure>
          <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
          <h2 className="card-title">{title}</h2>
       {
        variant.map((items)=>{
            const element = items.split('/').shift() + "";
            const element2 = items.split('/').pop() + "";
         return (
            
             (color == element || size == element2)?
              <p className=" bg-yellow-200" key={items}>{items}</p>
             :
              <p key={items}>{items}</p>
              );
        }
         )
       }
      </div>
   </div>
  
  </>
  );
}

export default Cards;
