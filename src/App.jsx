import { Joke } from "./components/Joke";

function App() {
    return (
        <div>
            <h1>JOKES</h1>
            <Joke
    setup="A man walks into a library and asks the librarian for books about paranoia."
    punchline="The librarian whispers, 'They're right behind you!'"
  />
        </div>
    );
}

export default App;
