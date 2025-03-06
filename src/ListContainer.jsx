import { ListCard } from "./ListCard"
import { useState } from "react";
export function ListContainer({listArry,state}){

    return <section className="lc-container">
        <ul className="lc-ul"> 
            {
                listArry.map((data)=>{
                  return <ListCard 
                  key={data._id}
                  statement={data.statement}
                  questions={data.questions}
                  state={state}

                  >
                  </ListCard>
                })
                
            }
                 
        </ul>
    </section>
    
}

