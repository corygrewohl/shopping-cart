import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import GlobalStyles from "./styles/Global";

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