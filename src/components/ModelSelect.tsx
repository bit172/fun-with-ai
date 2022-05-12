import React from "react";
import { MODELS } from "../constants";

interface Props {
  model: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ModelSelect: React.FC<Props> = ({ model, handleChange }) => {
  return (
    <div>
      <label className="font-bold" htmlFor="model-select">
        <span className="mr-2">Model:</span>
        <select
          id="model-select"
          name="model"
          className="bg-indigo-200 rounded-md"
          value={model}
          onChange={handleChange}
        >
          {MODELS.map((m, i) => (
            <option key={i} value={i}>
              {m}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ModelSelect;
