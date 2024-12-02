import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { addSubscribe } from "../../redux/subscribe/subscribeSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeForm() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { loading, error, isSuccess } = useSelector((state) => state.subscribe);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSubscribe(email));
    setEmail("");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully subscribed!", {
        position: "top-center",
      });
    } else if (error) {
      toast.error(error, {
        position: "top-center",
      });
    } else {
      return;
    }
  }, [isSuccess, error]);

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))}
          required
          placeholder="Enter your email"
          className="p-2 rounded-md border border-gray-300 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className={`w-full md:w-24 flex justify-center items-center bg-purple-500 hover:bg-purple-cstm-200 text-white px-4 py-2 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      <p className="text-sm text-gray-cstm font-normal">
        We care about your data in our{" "}
        <a href="#" className="underline hover:text-blue-500">
          privacy policy
        </a>
      </p>
    </div>
  );
}

export default SubscribeForm;
