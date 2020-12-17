import React, { useState } from "react";
import "./styles.css";

const priyam = "https://devpriyam.netlify.app";

const comedians = {
  american: [
    {
      name: "Andrew Schulz",
      intro:
        "Andrew Cameron Schulz is an American comedian from New York. He is known for his work on Guy Code, Flagrant 2 podcast, The Brilliant Idiots podcast and the Amazon original series Sneaky Pete.",
      link: "https://www.youtube.com/channel/UCLZc32yrTEMxH1ZO-6fKOzA"
    },
    {
      name: "George Carlin",
      intro:
        "Late George Denis Patrick Carlin was an American stand-up comedian, actor, social critic, and author. Regarded as one of the most important and influential stand-up comics of all time. He was known for his dark comedy and reflections on politics, the English language, psychology, religion, and taboo subjects.",
      link: "https://www.youtube.com/watch?v=6IvmVqGycEo&t=118s"
    },
    {
      name: "Dave Chappelle",
      intro:
        "David Khari Webber Chappelle is an American stand-up comedian, actor, writer and producer. With his incisive observations, he has been described as poetically unfiltered and sociopolitically introspective, with an ability to illuminate and interrogate agonizing and poignant topics.",
      link: "https://www.youtube.com/watch?v=bR66wfF_mkM"
    }
  ],
  indian: [
    {
      name: "Varun Grover",
      intro:
        "Varun Grover is an Indian stand-up comic, writer and poet. Though he won the award for Best Lyricist (Moh Moh Ke Dhaage) at the 63rd National Film Awards in 2015. He is also the co-creator of Aisi Taisi Democracy.",
      link: "https://www.youtube.com/channel/UCDE7MoDdJwleaIAd3qFJF1A"
    },
    {
      name: "Vipul Goyal",
      intro:
        "Vipul Goyal is an Indian stand-up comedian and actor. He is counted among the top comedy performers in India and also plays the main protagonist in the web-series Humorously Yours. He is often called the Indian Seinfeld as he does some observational comedy.",
      link: "https://www.youtube.com/channel/UCvLcuNVAb5sKRu7sHuFT0vQ"
    },
    {
      name: "Zakir Khan",
      intro:
        "Zakir Khan is an Indian stand-up comedian, writer, poet, presenter and actor. In 2012, he rose to popularity by winning Comedy Central's India's Best Stand Up Comedian competition. He has also been a part of a news comedy show, On Air with AIB. His popular acts are 'Kaksha Gyarvi' and 'Haq Se Single' on Amazon Prime.",
      link: "https://www.youtube.com/channel/UCkS7Vxu4PjM99w0Is6idjcg"
    }
  ],
  british: [
    {
      name: "Ricky Gervais",
      intro:
        "Ricky Dene Gervais is an English comedian, actor, writer, producer, and director. He is best known for co-creating, writing, and acting in the British television series The Office (2001–2003). He has won seven BAFTA Awards, five British Comedy Awards, two Emmy Awards, a Golden Globe Award, and the Rose d'Or twice (2006 and 2019), as well as a Screen Actors Guild Award nomination.",
      link: "https://www.youtube.com/watch?v=F22XTs1ggHs"
    },
    {
      name: "Jimmy Carr",
      intro:
        "James Anthony Patrick Carr is an English-Irish comedian, writer and television presenter. He is known for his dark humour, distinctive laugh, and heckler interaction. Carr moved to a career in comedy in 2000.",
      link: "https://www.youtube.com/channel/UCf9BO33b-MnIxB5y0azrxmg"
    },
    {
      name: "Russell Howard",
      intro:
        "Russell Joseph Howard is an English comedian, television presenter, radio presenter and actor, best known for his TV shows Russell Howard's Good News and The Russell Howard Hour and his appearances on the topical panel TV show Mock the Week.",
      link: "https://www.youtube.com/user/russellhoward"
    }
  ]
};

const comediansList = Object.keys(comedians);

export default function App() {
  let [comedianName, setComedianName] = useState("american");
  function btnClickHandler(country) {
    setComedianName(country);
  }
  return (
    <div className="App">
      <header>
        <h1 className="heading">Gigggle!</h1>
        <h2 className="description">Get a taste of global comedy :)</h2>
      </header>

      <div>
        {comediansList.map(function (country) {
          return (
            <button
              className="buttons"
              onClick={() => btnClickHandler(country)}
            >
              {country}
            </button>
          );
        })}

        <div className="container">
          <ul className="result">
            {comedians[comedianName].map(function (comedians) {
              return (
                <li>
                  <h3>{comedians.name}</h3>
                  <h5>{comedians.intro}</h5>
                  <p>
                    <a href={comedians.link} target="_blank">
                      Watch Here
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <footer>
            <p>
              Made with ❤️ by{" "}
              <a href={priyam} target="_blank">
                Priyam
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
