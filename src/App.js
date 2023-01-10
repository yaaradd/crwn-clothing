import { Routes, Route, Outlet} from "react-router-dom";

import Home from "./routs/home/home.component";
import Navigation from "./routs/navigation/navigation.component";
import Authentication from "./routs/authentication/authentication";

const Shop = () => {
  return(
    <div>
      <h1>SHOP</h1>
    </div>
  )
}


const App = () => {

  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
  
};

export default App;


