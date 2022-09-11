
function MainContent() {
    return (
        <div>
            <h1>Learning React</h1>
            <ul>
                <li>Pricing</li>
                <li>about</li>
                <li>Contact</li>
            </ul>
        </div>

    )
}



function Footer() {
    return (
        <footer>
            <small> copyright @Muhammad </small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(
    <Page />,
    document.getElementById("root")
)