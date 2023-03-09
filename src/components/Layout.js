import Tabs from './Tabs'
import { Link } from "react-router-dom";
import Categorypage from './Categorypage';

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
                <Categorypage/>
            </main>
        </div>
    )
}