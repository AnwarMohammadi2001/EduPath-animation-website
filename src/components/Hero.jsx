import HoverSplitGallery from "./HoverSplitGallery";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex relative flex-col items-center gap-6 py-5 px-4 sm:px-12 lg:px-28 xl:px-14 text-center overflow-hidden w-full text-gray-700 dark:text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 h-[550px] pt-6 w-full">
        <div className="md:col-span-1 flex flex-col items-start mt-16 gap-y-1">
          <p className="text-8xl text-gray-700">Watch.</p>
          <p className="text-7xl text-gray-700">Learn.</p>
          <p className="text-6xl text-gray-700">Grow.</p>
        </div>
        <div className="md:col-span-3">
          <HoverSplitGallery />
        </div>
      </div>
      <div className="absolute  h-[80px] bg-white  w-[350px] bottom-24 left-28 flex items-center">
        <input
          type="text"
          name=""
          id=""
          className=" focus:outline-none w-full h-full px-5"
          placeholder="Enter your Position"
        />
        <button className="text-black font-3xl font-bold flex items-center h-full w-20 bg-[#6c8555] justify-center">
          Go
        </button>
      </div>
    </div>
  );
};

export default Hero;
