

const FeatureCard = ({ img, title, description }) => {
  return (
    <div
      className="
      bg-white 
      rounded-xl 
      shadow-md 
      p-6 
      flex 
      items-start 
      gap-4
      hover:shadow-lg 
      transition
      w-full
    "
    >
      <img
        src={img}
        alt={title}
        className="w-12 h-12 object-contain flex-shrink-0"
      />

      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
