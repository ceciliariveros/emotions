import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Bienvenido a Emotions e-commerce!"/>
        </>
    );
}

export default App;
