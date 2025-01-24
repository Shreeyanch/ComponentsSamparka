import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Reservation from "./pages/Reservation";
import Game from "./pages/Game";
import Loyaltycard from "./pages/Loyaltycard";
import Loyaltycard1 from "./pages/Loyaltycard1";
import Share from "./pages/Share";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/game":
        title = "";
        metaDescription = "";
        break;
      case "/loyaltycard2":
        title = "";
        metaDescription = "";
        break;
      case "/loyaltycard1":
        title = "";
        metaDescription = "";
        break;
      case "/share":
        title = "";
        metaDescription = "";
        break;
        case "/reservation":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Reservation />} />
      <Route path="/game" element={<Game />} />
      <Route path="/loyaltycard2" element={<Loyaltycard />} />
      <Route path="/loyaltycard1" element={<Loyaltycard1 />} />
      <Route path="/share" element={<Share />} />
      <Route path="/reservation" element={<Reservation />} />

    </Routes>
  );
}
export default App;
