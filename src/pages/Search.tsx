import { useEffect } from "react";
import React  from "react";
import {Link, useParams} from "react-router-dom"


function Search(){
    const params = useParams()
    
    useEffect(()=>{
        console.log(params);
        
    }, [params])


  return (
    <div>
        Soy el buscador
        <Link to = "/">Link a la home</Link>
        <Link to = "/search/termos">Link a la termos</Link>

    </div>
  )
}
export {Search}