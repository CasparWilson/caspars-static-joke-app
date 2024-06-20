export function Joke(props){
return(
    <div>
        <h3>{props.setup}</h3>
        <h2>{props.punchline}</h2>
    </div>
)
}