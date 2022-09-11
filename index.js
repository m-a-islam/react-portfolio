




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