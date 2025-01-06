import { ListContainer } from "./ListContainer"
import { useState } from "react"
import { Results } from "./Results"


export default function App(){
    const test = [
        {
            statement:"what is it",
            question1:"nigga",
            question2:"beener"
        },
        {
            statement:"jeta",
            question1:"bacalao",
            question2:"dodo"
        }
    ]
    const [coffeeOptions,createCoffee] = useState("default")
    const  handleView = function(event){
        const deviceHeight = window.innerHeight
        const deviceWidth = window.innerWidth

        window.scroll({
            top: deviceWidth > 430 ? deviceHeight : deviceHeight * 1.2,
            behavior: "smooth",
          });
        event.preventDefault()
        createCoffee("no")
    }    
    return <>
    <header>
    <h1>Your Mood Sets Your Coffee</h1>
    <p>"You must like coffee, otherwise why would you be here? But sometimes when you are at the coffee shop there are too many options, here you will be able to order or prepare the right coffee for you, based on your mood"</p>
    <button className="btn_start">Make my coffee</button>
    <div className="img_main"></div>

    </header>
    <main id="main">
        {coffeeOptions === "default" ?<form  action="">
        <ListContainer listArry={test}></ListContainer>
        <button  className="btn_submit" onClick={handleView}>Send answers</button>
        <a href="#main" target="">a</a>
        </form>: <Results></Results>

      }
    </main>
    <footer>
            <section className="footer-sides-section">
                <p>This is a website made to keep coding, this time learning React</p>
                <div className="copyright">Copyright 2024, Luiscar Castro es el mejor</div>

            </section>

            <section className="footer-sides-section last-section">

            <p>I don't really need to add a lot of links in the footer do I? I don't have anything else to share... <br /> <br /> <br /><br />well here's my social media</p>
            <ul className="app-footer-social">
                   <a target="_blank" href="https://www.linkedin.com/in/luiscar-castro-78aa85285/"><li id="linkedin_link"></li></a>
                   <a target="_blank" href="https://donmagedon.github.io/LuiscarPortfolio/LuiscarPortfolio1/"><li id="github_link"></li></a>
                </ul>
            </section>
            
        </footer>

    </>
}