import { Route, Routes, useLocation } from "react-router-dom";
import Begginin from "./pages/Begginin";
import ColorSelection from "./pages/ColorSelection";
import ChallengeSelection from "./pages/ChallengeSelection";
import Timer from "./pages/Timer";
import { AnimatePresence } from "framer-motion";

function RoutesApp() {
    const location = useLocation();

    return (
        
        <AnimatePresence mode="wait">
            <Routes location={location} key={location}>
                <Route path="/" element={ <Begginin />}></Route>
                <Route path="/BaseColor" element={ <ColorSelection />}></Route>
                <Route path="/Challenge" element={ <ChallengeSelection />}></Route>
                <Route path="/Timer" element={ <Timer />}></Route>
            </Routes>
        </AnimatePresence>
        
    )
}

export default RoutesApp;