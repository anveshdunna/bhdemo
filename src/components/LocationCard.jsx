import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <Link className="w-80 flex-none rounded-lg text-gray-12" to="/placedetails">
      <img
        alt=""
        src="https://source.unsplash.com/featured/?sig=1&iceland"
        className="mb-2 h-48 w-full rounded-lg object-cover"
      />
      <div className="text-base">Location lengthy name</div>
      <div className="text-sm text-gray-11">History museum</div>
      <div className="text-sm text-gray-11">
        Architectural styles . Monuments . Nizam
      </div>
    </Link>
  );
};

export default LocationCard;
