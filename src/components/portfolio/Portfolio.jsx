import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Application",
        },
        {
            id: "ai",
            title: "Artificial Intelligence",
        },
        {
            id: "ml",
            title: "Machine Learning",
        },
        {
            id: "cc",
            title: "Cloud Computing",
        },
        {
            id: "sac",
            title: "Security & Cryptography",
        }
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    id={item.id}
                    title={item.title}
                     active={selected === item.id}
                     setSelected={setSelected}
                      />
                ))}
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
