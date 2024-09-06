import SeriesTable from "../components/SeriesTable";
import img from "../assets/IMG-20240831-WA0000.jpg";
const Dashboard = () => {
  return (
    <div className="p-6">
      <img
        src={img}
        alt="logo"
        className="h-[200px] w-[300px]  mx-auto "
      />
      <p>Welcome to the admin dashboard. Use the sidebar to navigate.</p>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">All Series</h1>
        <SeriesTable />
      </div>
    </div>
  );
};

export default Dashboard;
