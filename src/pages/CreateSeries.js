// src/pages/CreateSeries.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CreateSeries = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseDate: "",
    description: "",
    image: null,
    url: "",
    director: "",
    writer: "",
    loc: "",
    season: 0,
    episode: 0,
    averageRating: 0,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // If it's a file input, use files[0], otherwise use value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("genre", formData.genre);
    data.append("releaseDate", formData.releaseDate);
    data.append("description", formData.description);
    data.append("image", formData.image); // Add the image file
    data.append("url", formData.url);

    data.append("averageRating", formData.averageRating);
    data.append("season", formData.season);
    data.append("episode", formData.episode);
    data.append("director", formData.director);
    data.append("writer", formData.writer);
    data.append("loc", formData.loc);

    try {
      const response = await axios.post(
        "https://ksa-api-ln1y.onrender.com/admin/series",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast("created succesfully");
      navigate("/");
    } catch (error) {
      toast.error("error");
      console.log(error);
      navigate("/");
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Create Series</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter series title"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Genre</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Genre</option>
            <option value="Romance">ROMANCE</option>
            <option value="Fantasy">FANTASY</option>
            <option value="Horror">HORROR</option>
            <option value="Comedy">COMEDY</option>
            <option value="Web drama">WEB DRAMA</option>
            <option value="Mystery">MYSTERY</option>
            <option value="Costume">COSTUME</option>
            <option value="Action"> ACTION</option>
            <option value="Science fiction">SCIENCE FICTION</option>
            <option value="Thriller">THRILLER</option>
            <option value="Music">MUSIC</option>
            <option value="Crime">CRIME</option>
            <option value="History">HISTORY</option>
            <option value="Family">FAMILY</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">
            Description / Plot Sysnopsis
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter series description"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Series URL</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter series URL"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Loc</label>
          <input
            type="text"
            name="loc"
            value={formData.loc}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter series Loc"
            required
          />
        </div>
     
        <div>
          <label className="block text-gray-700">Director</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter Director Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Writer</label>
          <input
            type="text"
            name="writer"
            value={formData.writer}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter Writer Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Season number</label>
          <input
            type="number"
            name="season"
            value={formData.season}
            onChange={handleChange}
            min="0"
            step="1"
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter current season number"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">
            Episodes/current episode
          </label>
          <input
            type="number"
            name="episode"
            value={formData.episode}
            onChange={handleChange}
            min="0"
            step="1"
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter current season number"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Average Rating</label>
          <input
            type="number"
            name="averageRating"
            value={formData.averageRating}
            onChange={handleChange}
            min="0"
            max="5"
            step="1"
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter average rating"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSeries;
