
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
        <img src="./react-logo.png" width="40px" alt=""/>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)