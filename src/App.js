import ChSelection from "./components/ChallengeSelection";
import ColorSelection from "./components/ColorSelection";
import Start from "./components/Start";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <Start />
      <ColorSelection />
      <ChSelection />
      <Timer />
    </div>
  );
}

export default App;
