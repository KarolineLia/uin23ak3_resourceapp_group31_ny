import Tabs from './Tabs'
import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <div id="front-page-container">
            <header>
                <Link to="/">
                <h1>Ressursarkiv</h1>
                </Link>
            </header>
            <main>
                <Tabs/>
                {/*<div id="HTML" className="tabcontent">
                    <h2>Kat1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        dapibus quis elit vel auctor. Nullam facilisis nec orci non lacinia.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed ullamcorper augue neque, nec vehicula nunc rutrum eget.
                    </p>
                    <ul>
                        <li><a href="#">Url 1</a></li>
                        <li><a href="#">Url 2</a></li>
                        <li><a href="#">Url 3</a></li>
                        <li><a href="#">Url 4</a></li>
                        <li><a href="#">Url 5</a></li>
                    </ul>
                </div>*/}
            </main>
        </div>
    )
}