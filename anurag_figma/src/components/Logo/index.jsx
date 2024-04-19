import React from "react";
import { Text, Heading, } from "..";




export default function Logo({ rework, ai = "ai", ...props }) {
  return (
    <div {...props}>
      <div className="flex items-center gap-1 flex-wrap">
        <Heading
         
         size="lg"
         as="h1"
         className=  " " >

        <div>
          
          <img src="images/imgess_anu_rework_ai.svg" width={200}height={500} color="white" alt="" /></div>

      
       
        </Heading>
       
      
      </div>
    </div>
  );
}
