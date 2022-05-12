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
      <div className="flex flex-col gap-3 fixed justify-center items-center top-0 left-0 w-full h-full bg-black text-white text-6xl">
        <h1>Moved to:</h1>
        <a
          className="block text-4xl hover:underline hover:text-blue-600"
          target="_self"
          href="https://627d62302033ef007d0a3fd4--splendid-sopapillas-573766.netlify.app/"
        >
          https://627d62302033ef007d0a3fd4--splendid-sopapillas-573766.netlify.app/
        </a>
        <h2 className="mt-10">
          Hosting on gh pages triggers a key rotation on OpenAI 😢
        </h2>
      </div>
    </div>
  );
}

export default App;
