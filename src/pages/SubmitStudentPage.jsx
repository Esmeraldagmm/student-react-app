import { useState } from "react";
import { useForm } from "react-hook-form";

export const SubmitStudentPage = () => {
  const { 
    register, 
    handleSubmit, 
    formState:{errors}.
  } = useForm();

  const onSubmit = async (data) => {
    await fetch("http://localhost:3000/students", {
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        major: major,
        school: school,
      }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName")}
      />
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
      />
      <input
        type="text"
        placeholder="Major"
        {...register("major")}
      />
      <input
        type="text"
        placeholder="School"
        {...register("school")}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default SubmitStudentPage;
