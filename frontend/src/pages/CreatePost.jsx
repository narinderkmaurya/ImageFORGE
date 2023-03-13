import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://imageforge-nbmn.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Kindly provide a proper prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://imageforge-nbmn.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
        alert("Success");
        navigate("/");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }
  };

  return (
    <section className="max-w-8xl     sm:bg-gradient-to-t from-zinc-900 to-black  sm:p-4  rounded-3xl mx-auto">
      <div>
        <h1 className=" text-transparent text-center bg-clip-text bg-gradient-to-br lg:text-9xl md:text-8xl from-pink-400  to-red-400  font-bold text-5xl">
          Create Prompt
        </h1>
      </div>
      <p className="mt-2 md:text-2xl md:text-center text-white font-manrope lg:text-2xl">
        "Produce a one-of-a-kind graphic utilizing the innovative features of
        DALL-E AI and showcase it to the community."
      </p>
      <form
        className="lg:mt-12 mt-4 max-w-3xl  lg:max-w-full "
        onSubmit={handleSubmit}
      >
        <div className="flex  flex-col  lg:justify-center lg:items-center gap-5">
          <div className="lg:w-[50%]">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Ex., Narinder Maurya"
              value={form.name}
              handleChange={handleChange}
            />
          </div>

          <div className="lg:w-[50%]">
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A platypus playing guitar with Eminem in Rio"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>

          <div className="relative bg-transparent/10 mx-auto hover:scale-110 transition-all border border-white text-gray-900 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 lg:w-96 h-64 w-72 p-3 lg:h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 items-center justify-center flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white items bg-pink-700 font-manrope rounded-md text-sm lg:text-lg  sm:w-auto px-5 py-2.5 lg:px-4 lg:py-2 text-center lg:bg-transparent/10 lg:hover:bg-transparent/40 transition-all hover:scale-110 "
          >
            {generatingImg ? "Generating your post , you can also regenerate again" : "Generate"}
          </button>
        </div>

        <div className="mt-10 items-center justify-center flex-col flex gap-5 ">
          <p className="mt-2 text-center font-semibold text-pink-700  lg:font-manrope md:text-white text-md md:text-xl">
            "Share your final image with others in the community once you've
            finished perfecting it to your liking."
          </p>
          <button
            type="submit"
            className=" lg:text-white text-white items bg-pink-700 font-manrope rounded-md text-2xl w-full sm:w-auto px-6   py-2.5 lg:bg-transparent/10 lg:hover:bg-transparent/40 transition-all hover:scale-110  lg:px-4 lg:text-2xl text-center "
          >
            {loading ? "Sharing Your Post" : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
