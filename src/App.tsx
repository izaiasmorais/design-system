import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

function App() {
  return (
    <div className="w-full h-[100vh] bg-zinc-900 flex items-center justify-center">
      <div className="mx-auto my-0 max-w-[500px] w-full bg-zinc-700 p-4 gap-2 rounded">
        <Heading children="Heading view" />
        <Text children="Text view" size="lg" className="block mb-2 " />
        <TextInput className="block mb-2" />
        <Button children="Button view" />
      </div>
    </div>
  );
}

export default App;
