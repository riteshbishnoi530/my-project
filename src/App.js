import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/view/Home";
import { About } from "./components/view/About";



function App() {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="about-us" element={<About/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
