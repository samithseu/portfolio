import HomeScene from "../3D/HomeScene";
import Typewriter from "./TypeWriter";
import DragIndicator from "./DragIndicator";

export default function Home() {
  const greeting: string = `Hi, my
name is `;
  const name: string = "Lilay";

  return (
    <>
      <div className="mx-auto max-w-[1400px] flex flex-col gap-4 h-full md:flex-row">
        <div className="flex flex-col justify-center w-full pt-10 pl-4 pb-10 md:pl-24 md:pb-28 mb:w-2/6 sm:pl-10">
          <pre className="text-[#fbf1c7] text-[36px] md:text-[64px] sm:text-[44px] font-patua_one">
            {greeting} <span className="text-[#98971a]">{name}.</span>
          </pre>
          <div className="font-bold text-[#fbf1c7] text-[20px] md:text-[32px] sm:text-[24px]">
            <p>
              I am somewhat of a{" "}
              <span className="text-[#d7992a]">
                <Typewriter
                  words={["Developer", "DevOps"]}
                  speed={0.1}
                  wait={6000}
                />
              </span>
              !
            </p>
          </div>
        </div>
        <div className="w-full h-[50vh] overflow-hidden mb:w-4/6 md:h-auto">
          <HomeScene />
          <DragIndicator />
        </div>
      </div>
    </>
  );
}
