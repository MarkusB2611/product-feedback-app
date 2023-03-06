import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import arrowLeft from "~/assets/shared/icon-arrow-left.svg";
import plus from "~/assets/shared/icon-new-feedback.svg";
import Select from "~/components/ui/select";
import { api } from "~/utils/api";
import { FILTER_OPTIONS } from "..";

const AddFeedback = () => {
  const router = useRouter();
  const options = FILTER_OPTIONS.filter((option) => option.value !== "");
  const addFeedbackMutation = api.feedback.addFeedback.useMutation();

  const [feedback, setFeedback] = useState({
    title: "",
    category: "feature",
    detail: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFeedbackMutation.mutate(feedback);
  };

  const handleCategoryChange = (category: string) => {
    setFeedback((prev) => ({ ...prev, category: category }));
  };

  return (
    <>
      <Head>
        <title>Product Feedback App - Add feedback</title>
        <meta name="description" content="Product feedback app" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => router.back()}
          className="mt-[92px] flex w-[540px] items-center gap-4 hover:underline"
        >
          <Image
            src={arrowLeft}
            alt=""
            width={8}
            height={4}
            className="h-2 w-2"
          />
          <span className="text-h4 text-[#647196]">Go Back</span>
        </button>
        <div className="relative mt-[68px] w-[540px] rounded-[10px] bg-white px-[42px] pt-[52px] pb-[40px]">
          <div className="absolute left-[42px] top-[-28px] flex h-14 w-14 items-center justify-center rounded-[100%] bg-gradient-desktop">
            <Image src={plus} alt="" />
          </div>
          <h1 className="mb-10 text-h1 text-[#3A4374]">Create Feedback</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-h4 text-[#3A4374]" htmlFor="title">
                Feedback Title
              </label>
              <div className="mb-4 text-h4 font-normal text-[#647196]">
                Add a short, descriptive headline
              </div>
              <input
                type="text"
                id="title"
                value={feedback.title}
                onChange={(e) =>
                  setFeedback((prev) => ({ ...prev, title: e.target.value }))
                }
                className=" w-full rounded-[5px] bg-[#F7F8FD] px-6 py-[13px] text-[#3A4374] hover:outline hover:outline-1 hover:outline-[#4661E6] focus:outline-[#4661E6]"
              />
            </div>
            <div>
              <label className="text-h4 text-[#3A4374]" htmlFor="category">
                Category
              </label>
              <div className="mb-4 text-h4 font-normal text-[#647196]">
                Choose a category for your feedback
              </div>
              <Select
                type="form"
                value={feedback.category}
                options={options}
                updateValue={handleCategoryChange}
              />
            </div>
            <div>
              <label className="text-h4 text-[#3A4374]" htmlFor="detail">
                Feedback Detail
              </label>
              <div className="mb-4 text-h4 font-normal text-[#647196]">
                Include any specific comments on what should be improved, added,
                etc.
              </div>
              <textarea
                id="detail"
                value={feedback.detail}
                onChange={(e) =>
                  setFeedback((prev) => ({ ...prev, detail: e.target.value }))
                }
                rows={3}
                className=" w-full resize-none rounded-[5px] bg-[#F7F8FD] px-6 py-[13px] text-[#3A4374] hover:outline hover:outline-1 hover:outline-[#4661E6] focus:outline-[#4661E6]"
              />
            </div>
            <div className="mt-2 flex justify-end gap-4">
              <button
                type="button"
                className="rounded-[10px] bg-[#3A4374] px-6 py-3 text-h4 text-[#F2F4FE] hover:bg-[#656EA3]"
                onClick={() => {
                  router.back();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-[10px] bg-[#AD1FEA] px-6 py-3 text-h4 text-[#F2F4FE] hover:bg-[#C75AF6]"
              >
                Add Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFeedback;
