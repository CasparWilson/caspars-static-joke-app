import { Joke } from "./components/Joke";
import {jokesData} from "./jokesData"

function App() {

    const jokes = jokesData.map(jokeData => {
        return (
            <Joke
            key={jokeData.setup}
            setup={jokeData.setup}
            punchline={jokeData.punchline}
            />
        )
    })
    return (
        <div>
            <h1>JOKES</h1>
            {jokes}
        </div>
    );
}

export default App;
