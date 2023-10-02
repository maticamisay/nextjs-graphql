function TipComponent({ tip }) {
  const timeDifference = Date.now() - new Date(tip.createdAt).getTime();
  const isOlderThan24Hours = timeDifference > 24 * 60 * 60 * 1000;

  return (
    <li className="relative border-b last:border-b-0 p-4 flex justify-between items-center hover:bg-gray-50 transition duration-300">
      <div>
        <p className="font-semibold mb-1">{tip.title}</p>
        <p className="text-sm text-gray-600 mb-2">{tip.description}</p>
        <small className="text-gray-500">
          {new Date(tip.createdAt).toLocaleString()}
        </small>
      </div>
      <div className="flex items-center gap-3">
        {isOlderThan24Hours ? (
          <span className="px-3 py-1 rounded-full text-sm bg-yellow-200 text-yellow-800">
            Tip Antiguo
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-sm bg-blue-200 text-blue-800">
            Tip del Día
          </span>
        )}
      </div>
    </li>
  );
}

export default TipComponent;
