import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyCarousel from "./components/MyCarousel";
import MyNewCarousel from "./components/MyNewCarousel";
import SpliderSet from "./components/SpliderSet";
import MyFooter from "./components/MyFoooter";

function App() {
  return (
    <>
      <MyHeader />
      <MyCarousel />
      <MyNewCarousel />
      <SpliderSet />
      <MyFooter />
    </>
  );
}

export default App;
