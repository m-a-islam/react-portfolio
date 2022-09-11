
function MainContent() {
    return (
        <h1> Bismillahir-Rahmanir-Rahim</h1>
    )
}

function UnorderList() {
    return (
        <ul>
            <li>Pricing</li>
            <li>about</li>
            <li>Contact</li>
        </ul>
    )
}
const page = (
    <div>
        <h1>My Awsome website in React</h1>
        <h3>Reason I love React</h3>
        <ol>
            <li>Hello</li>
            <li>There</li>
            <li>thee</li>
        </ol>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)