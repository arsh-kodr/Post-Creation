import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

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

      const res = await axios.post("https://post-creation-ivck.onrender.com/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              onChange={(e) =>
                setPreview(URL.createObjectURL(e.target.files[0]))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 rounded-lg shadow-md max-h-48 object-cover w-full"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
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
              placeholder="Write your caption..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg shadow-md transition disabled:opacity-60"
          >
            {isSubmitting ? "Uploading..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
