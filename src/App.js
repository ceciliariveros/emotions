import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import Home from "./views/home/home";
import Category from "./views/category/category";


function App() {
    return (
        <>
         <Router>
            <NavBar />
             <Routes>
                 <Route path="/" element={<Home />}></Route>
                 <Route path="/category/:id" element={<Category />}></Route>
                 <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                 {/* <Route path="/about" element=""></Route> */}
             </Routes>
         </Router>
        </>
    );
}

export default App;
