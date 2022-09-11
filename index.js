
function MainContent() {
    return (
        <h1> Bismillahir-Rahmanir-Rahim</h1>
    )
}

function UnorderList() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" alt=""/>
            <ul>
                <li>Pricing</li>
                <li>about</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}


ReactDOM.render(
    <UnorderList />,
    document.getElementById("root")
)