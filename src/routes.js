import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Begginin from "./pages/Begginin";
import ColorSelection from "./pages/ColorSelection";
import ChallengeSelection from "./pages/ChallengeSelection";
import Timer from "./pages/Timer";

function RoutesApp() {
    const location = useLocation();

    return (
        <BrowserRouter>
            <Routes location={location} key={location}>
                <Route path="/" element={ <Begginin />}></Route>
                <Route path="/BaseColor" element={ <ColorSelection />}></Route>
                <Route path="/Challenge" element={ <ChallengeSelection />}></Route>
                <Route path="/Timer" element={ <Timer />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;