import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom"
import {useRecoilValue} from "recoil"
import { usernameState } from "../atoms";

function Home (){

  const id = useRecoilValue(usernameState)

  return (
    <div>
      Home dato: {id}
    </div>

    
    )
    
}




export { Home };
