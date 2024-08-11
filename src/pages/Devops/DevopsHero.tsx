import { useLayoutEffect } from "react";

const DevopsHero = () => {
  useLayoutEffect(() => {
    document.title += " | Devops";
  }, []);
  return (
    <>
      <div className="flex flex-col items-center h-[70vh] justify-center">
        <p className="rounded-3xl text-sm bg-slate-100 w-fit px-4 py-2  drop-shadow-md text-slate-800">
          Oddlly Technology
        </p>
        <h1 className="text-7xl text-gray-700 pt-4">DevOps</h1>
        <p className="text-xl text-gray-900 pt-3">
          Enhance your development and operations with our comprehensive DevOps
          services
        </p>
      </div>
    </>
  );
};

export default DevopsHero;
