const Page = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-stretch bg-gray-1 md:ml-16 xl:ml-60">
      {children}
    </div>
  );
};

export default Page;
