import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../api/shopServer";
import { AuthContext } from "../../hooks/UserContext";

export const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { saveAuthenticationData } = useContext(AuthContext);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const authData = await login(data.username, data.password);
      saveAuthenticationData(authData.token);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-xl w-100">
        <h1 className="text-3xl font-bold">Welcome to My E-Shop</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 "
          style={{ width: "40vw" }}>
          {error && (
            <div className="mb-4 py-4 px-8 border bg-red-50 border-red-600 text-red-600 rounded-xl ">
              <p>{error.message}</p>
            </div>
          )}
          <div className="mb-4">
            <label className="bold">User Name</label>
            <input
              {...register("username")}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.username && (
              <p className=" text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label className="bold mb-2">Password</label>
            <input
              {...register("password")}
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.password && (
              <p className="mt-2 text-red-600">{errors.password.message}</p>
            )}
            <button
              disabled={loading}
              type="submit"
              className="w-full mt-5 bg-mainColor text-white py-2 rounded-lg hover:bg-secondaryColor flex gap-4 items-center justify-center font-semibold text-lg">
              Login
              {loading && (
                <span
                  className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
