import { ListCard } from "./ListCard"
export function ListContainer({listArry}){
    return <section className="lc-container">
        <ul className="lc-ul"> 
            {
                listArry.map((data)=>{
                  return <ListCard 
                  key={data.statement}
                  statement={data.statement}
                  question1={data.question1}
                  question2={data.question2}
                  ></ListCard>
                })
            }
                 
        </ul>
    </section>
    
}