import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { sendPrompt } from "../utils/ApiClient";
import { DataBody } from "../interfaces";
import { CircleLoader } from "react-spinners";

interface Props {}

const Form: React.FC<Props> = () => {
  const formik = useFormik({
    initialValues: {
      prompt: "",
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
      const res = await sendPrompt(data);
      console.log(res);

      formik.resetForm();
      formik.setSubmitting(false);
    },
    validationSchema: Yup.object({
      prompt: Yup.string().required(),
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
      <Button
        type="submit"
        className="font-bold py-3 px-5 w-full sm:w-auto sm:self-end"
        disabled={!(formik.isValid && formik.dirty)}
        text="Submit"
      />
      {formik.isSubmitting && (
        <div className="flex flex-col justify-center items-center absolute">
          <CircleLoader size={60} />
          <span>Submitting...</span>
        </div>
      )}
    </form>
  );
};

export default Form;
