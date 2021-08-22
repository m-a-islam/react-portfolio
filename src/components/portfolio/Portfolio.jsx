import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web Application</li>
                <li>Machine Learning</li>
                <li>Big Data</li>
                <li>Cloud Computing</li>
                <li>Security and Cryptography</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/00/41/work-from-home-remote-working-with-a-business-vector-31080041.jpg" alt="" />
                    <h3>EWM</h3>
                </div>
                <div className="item">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/00/41/work-from-home-remote-working-with-a-business-vector-31080041.jpg" alt="" />
                    <h3>EWM</h3>
                </div>
                <div className="item">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/00/41/work-from-home-remote-working-with-a-business-vector-31080041.jpg" alt="" />
                    <h3>EWM</h3>
                </div>
                <div className="item">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/00/41/work-from-home-remote-working-with-a-business-vector-31080041.jpg" alt="" />
                    <h3>EWM</h3>
                </div>
                <div className="item">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/00/41/work-from-home-remote-working-with-a-business-vector-31080041.jpg" alt="" />
                    <h3>EWM</h3>
                </div>
            </div>
        </div>
    )
}
