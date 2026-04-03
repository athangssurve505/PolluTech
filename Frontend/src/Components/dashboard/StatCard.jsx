const StatCard = ({ title, value, status }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <span className="inline-block mt-2 text-sm text-green-700 font-medium">
        {status}
      </span>
    </div>
  );
};

export default StatCard;
