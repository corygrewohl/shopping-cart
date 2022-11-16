import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import GlobalStyles from "./Components/styles/Global";
import store from "./redux/store";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;