import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { CircleLoader } from "react-spinners";

import { sendPrompt } from "../utils/ApiClient";
import { AIResponse, APIResponse, DataBody } from "../interfaces";

import ModelSelect from "./ModelSelect";

interface Props {
  setResponses: React.Dispatch<React.SetStateAction<AIResponse[]>>;
}

const Form: React.FC<Props> = ({ setResponses }) => {
  const formik = useFormik({
    initialValues: {
      prompt: "",
      model: "0",
    },
    onSubmit: async (values) => {
      const data: DataBody = {
        prompt: values.prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      const res: APIResponse = await sendPrompt(data, parseInt(values.model));

      const normalRes: AIResponse = {
        prompt: values.prompt,
        response: res.choices[0].text,
      };

      setResponses((prev) => [...prev, normalRes]);
      formik.resetForm();
      formik.setSubmitting(false);
    },
    validationSchema: Yup.object({
      prompt: Yup.string().required(),
      model: Yup.string().required(),
    }),
  });

  return (
    <form
      className="relative flex flex-col justify-center items-center"
      onSubmit={formik.handleSubmit}
    >
      <textarea
        id="prompt"
        className="bg-fuchsia-100 opacity-45 text-lg rounded-md w-full h-60 border-2 mb-3 disabled:bg-fuchsia-200 disabled:text-gray-400"
        value={formik.values.prompt}
        onChange={formik.handleChange}
        disabled={formik.isSubmitting}
      />
      <div className="flex flex-col items-center gap-3 sm:gap-0 sm:flex-row sm:justify-between w-full">
        <ModelSelect
          model={formik.values.model}
          handleChange={formik.handleChange}
        />
        <Button
          type="submit"
          className="font-bold py-3 px-5 w-full sm:w-auto sm:self-end"
          disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
          text="Submit"
        />
      </div>

      {formik.isSubmitting && (
        <div className="absolute flex flex-col justify-center items-center">
          <CircleLoader size={60} />
          <span>Submitting...</span>
        </div>
      )}
    </form>
  );
};

export default Form;
