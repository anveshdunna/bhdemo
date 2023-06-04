const Card = (props) => {
  return (
    <div className="w-full">
      <div className="flex justify-between py-2">
        <div className="flex gap-2">
          <div className="h-8 w-8 overflow-clip rounded-full bg-red-9">
            <img
              alt=""
              src="https://source.unsplash.com/featured/80×80/?sig=1&person"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-xs">
            <div className="font-medium">Username</div>
            <div className="text-gray-11">14h</div>
          </div>
        </div>
        <button className="text-xs">Edit</button>
      </div>
      <div className="">
        <img
          alt=""
          src="https://source.unsplash.com/featured/?sig=1&iceland"
          className="h-60 w-full rounded-lg object-cover"
        />
      </div>
      <div>Footer</div>
    </div>
  );
};

export default Card;
