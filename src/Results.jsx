import { ResultsCard } from "./ResultsCard"
export function Results({data}){
    return <section className="results-container">
        <ResultsCard data={data}></ResultsCard>
    </section>
}