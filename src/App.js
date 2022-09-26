import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search></Search>
      <Category></Category>
       <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
