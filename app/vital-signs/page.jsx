"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  const onSubmit = async (data) => {
    setError("");
    setLoading(true);
  };
  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto   ">
        <div className="max-w-4xl mx-auto py-7 shadow-lg mt-5 px-10">
          <h1 className="text-3xl font-medium text-center text-gray-700 mb-5">
            Capture Vital Signs
          </h1>
          <form
            className="grid grid-cols-1 md:grid-cols-2 mb-10  w-full gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid">
              <label htmlFor="email">Blood Pressure *</label>
              <input
                type="text"
                placeholder="Blood Pressure"
                {...register("bp", {
                  required: "Blood Pressure is required ",
                })}
              />
              <small className="text-red-500">{errors.bp?.message}</small>
            </div>
            <div className="grid">
              <label htmlFor="email">Respiratory Rate *</label>
              <input
                type="text"
                placeholder="Respiratory Rate"
                {...register("respiratory_rate", {
                  required: "Respiratory Rate is required",
                })}
              />
              <small className="text-red-500">
                {errors.respiratory_rate?.message}
              </small>
            </div>
            <div className="grid">
              <label htmlFor="email">Pulse Rate *</label>
              <input
                type="text"
                placeholder="Pulse Rate"
                {...register("pulse_rate", {
                  required: "Pulse Rate is required",
                })}
              />
              <small className="text-red-500">
                {errors.pulse_rate?.message}
              </small>
            </div>
            <div className="grid">
              <label htmlFor="email">Weight *</label>
              <input
                type="text"
                placeholder="Weight"
                {...register("weight", {
                  required: "Weight is required",
                })}
              />
              <small className="text-red-500">{errors.weight?.message}</small>
            </div>
            <div className="grid">
              <label htmlFor="email">Height *</label>
              <input
                type="text"
                placeholder="Height"
                {...register("height", {
                  required: "Height is required",
                })}
              />
              <small className="text-red-500">{errors.height?.message}</small>
            </div>

            <div className="grid">
              <label htmlFor="email">BMI *</label>
              <input
                type="text"
                placeholder="BMI"
                {...register("bmi", {
                  required: "BMI is required",
                })}
              />
              <small className="text-red-500">{errors.bmi?.message}</small>
            </div>
            <div className="grid">
              <label htmlFor="email">O2 Saturation*</label>
              <input
                type="text"
                placeholder="O2 Saturation"
                {...register("o2_saturation", {
                  required: "O2 Saturation is required",
                })}
              />
              <small className="text-red-500">
                {errors.o2_saturation?.message}
              </small>
            </div>
            <div className="invisible"></div>
            <div className="">
              <button className="bg-primary text-white px-6 py-3 mt-4 w-full  flex justify-center items-center justify-self-center rounded-full hover:-translate-y-px">
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
