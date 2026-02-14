import React from "react";
import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-fuchsia-300 flex flex-col justify-center items-center text-center">
      <div>
        <div className="leading-loose">
          <h1 className="text-5xl font-semibold">Hi Ruth</h1>
          <h1 className="text-5xl font-bold hover:text-red-500 transition-all duration-200 hover:cursor-pointer">
            Will you be my valentines?
          </h1>
          <p>- Mazeen</p>
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-x-5">
          <NoButton />
          <YesButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
