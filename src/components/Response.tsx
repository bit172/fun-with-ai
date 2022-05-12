interface Props {
  prompt: string;
  response: string;
}

const Response: React.FC<Props> = ({ prompt, response }) => {
  return (
    <div className="glass px-4 py-5">
      <div className="response-row">
        <h2 className="w-20 font-bold">Prompt:</h2>
        <p className="break-all">{prompt}</p>
      </div>
      <div className="response-row">
        <h2 className="w-20 font-bold">Response:</h2>
        <p className="break-all">{response}</p>
      </div>
    </div>
  );
};

export default Response;
