import { ResultsCard } from "./ResultsCard"
export function Results({data,state}){
    return <section className="results-container">
        <ResultsCard data={data}></ResultsCard>
        <button onClick={state} className="btn_reset">Get another coffee</button>
    </section>
}