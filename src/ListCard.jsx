import  DOMPurify  from "dompurify";

export function ListCard({ statement, questions,state }) {

  if (questions)
    return (
      <li className="lc-li">
        <h2>{statement}</h2>
        <div className="lc-options-container">
          {questions.map((data, index) => {
            return (
              <div key={index} className="lc-options-box">
                <label htmlFor={data.question}>
                  <input onChange={(e)=>{
                    state(e)
                  }
                  } type="radio" name={statement} id={data.question} />
                  <div  dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(data.svg)}} className="img_options">
                    
                  </div>
                  <p className="lc-li-question">{data.question}</p>
                </label>
              </div>
            );
          })}
        </div>
      </li>
    );
}
