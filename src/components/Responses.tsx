import { AIResponse } from "../interfaces";
import Response from "./Response";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface Props {
  responses: AIResponse[];
}

const Responses: React.FC<Props> = ({ responses }) => {
  return (
    <section>
      <h1 className="title">Responses</h1>
      {responses.length > 0 ? (
        <TransitionGroup className="responses-list flex flex-col-reverse gap-6">
          {responses.map((res, i) => (
            <CSSTransition key={i} timeout={500} classNames="response">
              <Response prompt={res.prompt} response={res.response} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div>
          <p className="text-lg">No responses to show.</p>
        </div>
      )}
    </section>
  );
};

export default Responses;
