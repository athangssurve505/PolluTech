const DataCard = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="border-b pb-1">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataCard;
