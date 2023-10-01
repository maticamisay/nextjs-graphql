import TipOfDay from "./TipOfDay";

const TipsOfDayList = ({ tips }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-3">Lista de tips del día</h2>
    <ul className="bg-white shadow rounded p-4 overflow-none">
      {tips.map((tip) => (
        <TipOfDay key={tip.id} tip={tip} />
      ))}
    </ul>
  </div>
);

export default TipsOfDayList;
