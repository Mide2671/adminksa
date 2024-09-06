import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DeleteSeries() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    axios
      .delete(`https://ksa-api-ln1y.onrender.com/admin/series/${id}`)
      .then((res) => {
        toast(`series id ${id} deleted succesfully`);
        navigate("/");
      })
      .catch((err) => {
        toast.error("error", err);                              
      });
  };
  return (
    <div className="p-4">
      <h1 className="mt-4 text-3xl ">Delete Series</h1>
      <div className="w-[600px] mx-auto my-10 border rounded-xl border-sky-500 flex flex-col justify-center p-8">
        <h1 className="text-3xl text-red-500 text-center ">
          Are you sure you want to delete this series???
        </h1>
        <button
          className="bg-sky-600 text-white rounded-xl mt-4 p-2"
          onClick={handleDelete}
        >
          Yes, I am sure
        </button>
      </div>
    </div>
  );
}

export default DeleteSeries;
