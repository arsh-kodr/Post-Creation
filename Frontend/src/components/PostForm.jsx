import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImagePlus, Loader2 } from "lucide-react";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("caption", data.caption);

      const res = await axios.post(
        "https://post-creation-ivck.onrender.com/posts",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Post created successfully!");
      reset();
      navigate("/post");
      setPreview(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md bg-gray-800 text-gray-100 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Upload Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-gray-700 border-gray-600 hover:border-indigo-500 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ImagePlus className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-400">
                    Click to upload or drag & drop
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                  onChange={(e) =>
                    setPreview(URL.createObjectURL(e.target.files[0]))
                  }
                  className="hidden"
                />
              </label>
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 rounded-xl shadow-lg max-h-52 object-cover w-full"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Caption
            </label>
            <textarea
              {...register("caption", {
                required: "Caption is required",
                minLength: {
                  value: 5,
                  message: "Caption must be at least 5 characters",
                },
              })}
              rows="3"
              placeholder="Write something meaningful..."
              className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            {errors.caption && (
              <p className="text-red-500 text-sm mt-1">
                {errors.caption.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg shadow-md transition disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Uploading...
              </>
            ) : (
              "Create Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
