

export function ResultsCard({data}){
        try{
            console.log(data)
            if(!data){
                throw Error("Loading data...")
            }
            return <header className="results-card">
            <h3>We recommend you...</h3>
            <div className="results-card-box">
                <h4 className="results-card-title">{Array.isArray(data) ? data[0].name : data.name}</h4>
                <div style={{backgroundImage:`url(${Array.isArray(data) ? data[0].image : data.image})`}} className="results-card-image">
                        
                        </div>
                <p className="results-card-description">{Array.isArray(data) ? data[0].description : data.description}</p>
    
            </div>
        </header>
        }catch(err){
            console.error(err)
        }




}