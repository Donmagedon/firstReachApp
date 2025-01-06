export function ListCard({statement,question1,question2}){
    return <li className="lc-li">
        <h2>{statement}</h2>
        <div className="lc-options-container">
        <div className="lc-options-box">
            <label htmlFor={question1}>
            <input type="radio" name={statement} id={question1}/>
            <div className="img_options"></div>
            <p className="lc-li-question">{question1}</p>
                </label></div>
        <div className="lc-options-box">
            <label htmlFor={question2}>
            <input type="radio" name={statement} id={question2} />
            <div  className="img_options"></div>
            <p className="lc-li-question">{question2}</p>
            </label>

            </div>
        </div>
        </li>  
}