const TipOfDay = ({ tip }) => (
  <li className="relative border-b last:border-b-0 p-2 flex justify-between items-center">
    <div>
      <p className="font-medium">{tip.title}</p>
      <p className="text-sm text-gray-500">{tip.description}</p>
      <small className="text-gray-500">
        {new Date(tip.createdAt).toLocaleString()}
      </small>
    </div>
    <div className="flex items-center gap-3">
      <span className="px-3 py-1 rounded-full text-sm bg-blue-200 text-blue-800">
        Tip del Día
      </span>
    </div>
  </li>
);

export default TipOfDay;
