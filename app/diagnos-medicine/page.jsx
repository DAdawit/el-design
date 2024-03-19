"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DiagnosisPreview from "@/components/Preview";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      druges: [{ name: " ", description: " ", quantity: 1, essential: false }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "druges", // unique name for your Field Array
    }
  );

  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (action, data) => {
    console.log(action);
    console.log(data);
    setError("");
    setLoading(true);
  };

  const handlePreview = (data) => {
    // onSubmit("preview", data);
    console.log(data);
    setData(data);
    setOpen(true);
  };

  // Intermediary function for submit
  const handleSubmitAction = (data) => {
    onSubmit("submit", data);
  };

  return (
    <>
      <DiagnosisPreview open={open} setOpen={setOpen} data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto py-7  mt-5 px-10">
          <h1 className="text-3xl font-medium text-center text-gray-700 mb-5">
            DIAGNOSIS
          </h1>
          <form
            className="grid grid-cols-1 mb-10  w-full gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="shadow-lg p-8">
              <div className="grid">
                <label htmlFor="email">DIAGNOSIS RESULT *</label>
                <textarea
                  {...register("diagnosis_result", {
                    required: "Diagnosis result is required ",
                  })}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <small className="text-red-500">
                  {errors.diagnosis_result?.message}
                </small>
              </div>
            </div>
            <div>
              <h1 className="text-xl py-5 uppercase">Medications </h1>

              {fields.map((field, index) => (
                <div key={field.id} className="shadow-lg p-8">
                  <div className="grid">
                    <label htmlFor={`druges-${index}-value`}>Drug Name *</label>
                    <input
                      id={`druges-${index}-name`}
                      type="text"
                      placeholder="Drug Name"
                      {...register(`druges.${index}.name`, {
                        required: "Drug Name is required",
                      })}
                    />

                    <small className="text-red-500">
                      {errors.druges && errors.druges[index]?.name?.message}
                    </small>
                  </div>
                  <div className="grid">
                    <label htmlFor={`druges-${index}-value`}>
                      Description *
                    </label>
                    <input
                      id={`druges-${index}-name`}
                      type="text"
                      placeholder="Description"
                      {...register(`druges.${index}.description`, {
                        required: "Description is required",
                      })}
                    />
                    <small className="text-red-500">
                      {errors.druges &&
                        errors.druges[index]?.description?.message}
                    </small>
                  </div>
                  <div className="grid">
                    <label htmlFor={`druges-${index}-value`}>Quantity *</label>
                    <input
                      id={`druges-${index}-name`}
                      type="number"
                      placeholder="Quantity"
                      {...register(`druges.${index}.quantity`, {
                        required: "Quantity is required",
                      })}
                    />
                    <small className="text-red-500">
                      {errors.druges && errors.druges[index]?.quantity?.message}
                    </small>
                  </div>
                  <div className="flex gap-x-2 items-center mt-2">
                    <input
                      id={`druges-${index}-name`}
                      type="checkbox"
                      {...register(`druges.${index}.essential`, {})}
                    />
                    <label htmlFor={`druges-${index}-value`}>Essential *</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-5 py-1 border-2 border-primary w-max rounded-lg text-sm mt-3 text-primary flex items-center justify-center gap-2"
                  >
                    <span>DELETE</span>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => append("")}
                className="px-5 py-2 text-white bg-primary w- rounded-lg flex justify-center items-center gap-2 mt-2"
              >
                <span>Add</span>
              </button>
            </div>

            <div className="">
              <button
                className="bg-primary text-white px-6 py-3 mt-4 w-full  flex justify-center items-center justify-self-center rounded-full hover:-translate-y-px"
                onClick={handleSubmit(handlePreview)}
              >
                <span className="ml-1 font-medium">preview</span>
              </button>
              <button
                className="bg-primary text-white px-6 py-3 mt-4 w-full  flex justify-center items-center justify-self-center rounded-full hover:-translate-y-px"
                onClick={handleSubmit}
              >
                <span className="ml-1 font-medium">Submit</span>
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Page;
