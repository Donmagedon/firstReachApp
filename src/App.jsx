import { ListContainer } from "./ListContainer";
import { useState, useEffect } from "react";
import { Results } from "./Results";

export default function App() {
  const [defaultView, changeView] = useState("default");
  const [coffee, createCoffee] = useState(null);
  const [input, setInput] = useState([]);
  const [moodQuestions, setMoodQuestions] = useState([]);
  const [personalityQuestions, setPersonalityQuestions] = useState([]);
  const [textureQuestions, setTextureQuestions] = useState([]);

  function handleUserInput(e) {
    setInput((prev) => {
      const repeaded = prev.some((curr) => curr.statement === e.target.name);
      const replaced = prev.filter((curr) => curr.statement !== e.target.name);
      if (repeaded) {
        return [
          ...replaced,
          { question: e.target.id, statement: e.target.name },
        ];
      }
      return [...prev, { question: e.target.id, statement: e.target.name }];
    });
  }
  const handleSubmit = function (event) {
    const deviceHeight = window.innerHeight;
    const deviceWidth = window.innerWidth;

    window.scroll({
      top: deviceWidth > 430 ? deviceHeight : deviceHeight * 1.2,
      behavior: "smooth",
    });
    event.preventDefault();
    changeView("different");
    handleQuery();
  };

  const handleQuery = async function () {
    try {
      const URI = "https://readmycoffeeapi.onrender.com/api/generate_coffee";
      const request = await fetch(URI, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await request.json().then((data) => {
        createCoffee(Array.isArray(data) ? data.map((obj) => obj) : data);
      });
    } catch (err) {
      return new Error(err);
    }
  };
  const handleReset = function(event){
    event.preventDefault();
    changeView("default")
  };

  useEffect(() => {
    const getQuestion = async function () {
      try {
        const URI = "https://readmycoffeeapi.onrender.com/api/questions";
        const request = await fetch(URI, {
          method: "GET",
        });
        await request.json().then((data) => {
          setPersonalityQuestions(
            data.filter(
              (items) => !items.determinesCreaminess && !items.determinesMood
            )
          );
          setTextureQuestions(
            data.filter((items) => items.determinesCreaminess)
          );
          setMoodQuestions(data.filter((items) => items.determinesMood));
        });
      } catch (err) {
        return new Error(err);
      }
    };
    getQuestion();
  }, []);
  return (
    <>
      <header>
        <h1>Your Mood Sets Your Coffee</h1>
        <p>
          "You must like coffee, otherwise why would you be here? But sometimes
          when you are at the coffee shop there are too many options, here you
          will be able to order or prepare the right coffee for you, based on
          your mood"
        </p>
        <div className="img_main"></div>
      </header>

      <main id="main">
        {defaultView === "default" ? (
          <form action="">
            <ListContainer
              listArry={personalityQuestions}
              state={handleUserInput}
            ></ListContainer>
            <ListContainer
              listArry={textureQuestions}
              state={handleUserInput}
            ></ListContainer>
            <ListContainer
              listArry={moodQuestions}
              state={handleUserInput}
            ></ListContainer>

            <button className="btn_submit" onClick={handleSubmit}>
              Send answers
            </button>
          </form>
        ) : (
          <Results data={coffee} state={handleReset}></Results>
          )}
      </main>
      <footer>
        <section className="footer-sides-section">
          <p>This is a website made to keep coding, this time learning React</p>
          <div className="copyright">
            Copyright 2024, Luiscar Castro es el mejor
          </div>
        </section>

        <section className="footer-sides-section last-section">
          <p>
            I don't really need to add a lot of links in the footer do I? I
            don't have anything else to share... <br /> <br /> <br />
            <br />
            well here's my social media
          </p>
          <ul className="app-footer-social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luiscar-castro-78aa85285/"
            >
              <li id="linkedin_link"></li>
            </a>
            <a
              target="_blank"
              href="https://donmagedon.github.io/LuiscarPortfolio/"
            >
              <li id="github_link"></li>
            </a>
          </ul>
        </section>
      </footer>
    </>
  );
}
