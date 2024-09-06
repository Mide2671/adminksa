import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineInfo, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const SeriesTable = () => {
  const [seriesData, setSeriesData] = useState([]);
  function chan(data) {
    const formattedReleaseDate = new Date(data).toISOString().split("T")[0];
    return formattedReleaseDate;
  }
  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        const response = await axios.get("https://ksa-api-ln1y.onrender.com/admin/series");

        setSeriesData(response.data);
      } catch (err) {
        console.error("Error fetching series data:", err);
      }
    };

    fetchSeriesData();
  }, []);

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Title</th>
          <th className="py-2 px-4 border-b max-md:hidden">Release Date</th>
          <th className="py-2 px-4 border-b max-md:hidden">Image</th>
          <th className="py-2 px-4 border-b ">Action</th>
        </tr>
      </thead>
      <tbody>
        {seriesData.map((series, index) => (
          <tr key={series._id}>
            <td className="py-2 px-4 border-b text-center">{index + 1}</td>
            <td className="py-2 px-4 border-b text-center">{series.title}</td>
            <td className="py-2 px-4 border-b text-center max-md:hidden">
              {chan(series.releaseDate)}
            </td>
            <td className="py-2 px-4 border-b max-md:hidden ">
              {/* Display image if available */}
              <div className="flex  justify-center">
                {series.image ? (
                  <img
                    src={`https://ksa-api-ln1y.onrender.com/${series.image}`}
                    alt={series.title}
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "No Image"
                )}
              </div>
            </td>
            <td className="py-2 px-4 border-b  ">
              <div className="flex space-x-3  justify-center">
                <Link to={`/edit-series/${series._id}`}>
                  {" "}
                  <AiOutlineInfo className="text-red-600 text-2xl h-30 w-30 border border-red-400 rounded-xl " />{" "}
                </Link>
                <Link to={`/delete/${series._id}`}>
                  <AiOutlineDelete className="text-red-600 text-2xl h-30 w-30 border border-red-400 rounded-xl " />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SeriesTable;
