import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Bienvenido a Emotions e-commerce!"/>
            <ItemDetailContainer></ItemDetailContainer>
        </>
    );
}

export default App;
