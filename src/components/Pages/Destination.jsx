import destinations from "../../data/destinationData";
import breakAfterPunctuation from "../../utils/utils";

export default function Destination() {
  const firstDestination = destinations();
  return (
    <div className="flex flex-wrap items-center gap-4 my-5 p-5">
      <img
        src={firstDestination[7].image}
        className="w-90 p-3 border-4 border-b-gray-500"
        alt=""
      />
      <div>
        <h3 className="text-3xl py-3">{firstDestination[0].locationName}</h3>
        <h4 className="text-2xl pb-3 text-blue-700">
          {firstDestination[0].travelDate}
        </h4>
        <p className="text-lg pb-5">
          {breakAfterPunctuation(firstDestination[0].description)}
        </p>
        <button className="btn btn-soft btn-primary me-3">Edit</button>
        <button className="btn btn-soft btn-error">Delete</button>
      </div>
    </div>
  );
}
