import { SAMPLE_RESPONSE } from "../constants";
import Response from "./Response";

interface Props {}

const Responses: React.FC<Props> = () => {
  return (
    <section>
      <h1 className="title">Responses</h1>
      <Response
        prompt="Write a story about a superhero"
        response={SAMPLE_RESPONSE.choices[0].text}
      />
    </section>
  );
};

export default Responses;
