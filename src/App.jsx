import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

export default function App() {
    const card = data.reduce((acc, curr) => {
        acc.push(<Card
            key={curr.id}
            {...curr}    
        />)
        return acc;
    }, []);
    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">
                {card}
            </section>
        </div>
    );
};