import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import "./styles/global.css";

function App() {
  return (
    <div className="w-full h-[100vh] bg-zinc-900 ">
      <div className="max-w-[500px]">
        <Heading children="Heading view" />
        <Text children="Text view" />
        <Button children="Button view" />
      </div>
    </div>
  );
}

export default App;
