import Form from "./components/Form";
import Responses from "./components/Responses";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AIResponse } from "./interfaces";

function App() {
  const [responses, setResponses] = useLocalStorage<AIResponse[]>(
    "responses",
    []
  );

  return (
    <div className="md:container md:mx-auto mb-20 p-2 md:p-0">
      <h1 className="title">Fun with AI</h1>
      <Form setResponses={setResponses} />
      <Responses responses={responses} />
    </div>
  );
}

export default App;
