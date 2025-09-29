export default function About() {
  const name: string = "LILAY";
  const greeting: string = `The name is `;
  const blob0: string = ` ! I'm a Computer Science student who's totally hooked on Linux and homelabbing. Hailing from Kampong Speu, Cambodia, I live for the rush of creating and uncovering new adventures. From open-source projects to tinkering with hardware in my home setup. My go-to languages include `;
  const blob1: string = ` and I utilize containerization with `;
  const blob2: string = `servers.`;
  const blob3: string = `Beyond the code, I'm constantly chasing what interests me (not just tech) and sharing knowledge with friends and the community. I'm pumped to join forces on projects that shake things up and make a real difference!`;
  return (
    <>
      <div className="mx-auto max-w-[1400px] flex flex-col gap-4 h-full">
        <div className="flex flex-col justify-start w-full pt-8 sm:pt-32 mb:w-2/6 sm:pl-10">
          <h1 className="text-[#fabd2f] text-[24px] md:text-[34px] sm:text-[28px] font-patua_one">
            About Me
          </h1>
          <p className="text-[#fbf1c7] text-[18px] md:text-[24px] sm:text-[24px] font-patua_one pt-4">
            {greeting}
            <span className="text-[#8ec87e]">{name}</span>
            {blob0}
            <span className="text-[#ffe464]">Python </span>,
            <span className="text-[#f7df1e]"> JS </span> /
            <span className="text-[#377cc8]"> TS </span>, and frameworks like
            <span className="text-[#81e0ff]"> React </span> /
            <span className="text-[#ffffff]"> NextJS </span>,{blob1}
            <span className="text-[#0b9dc8]">Docker</span> and
            <span className="text-[#ff9c08]"> cloud </span>
            {blob2}
          </p>
          <p className="text-[#fbf1c7] text-[18px] md:text-[24px] sm:text-[24px] font-patua_one pt-4">
            {blob3}
          </p>
        </div>
      </div>
    </>
  );
}
