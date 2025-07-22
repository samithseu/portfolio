export default function About() {
  const name: string = "LILAY";
  const greeting: string = `The name is `;
  const blob0: string = ` ! I'm a Computer Science student with a passion for Linux and homelabbing. Currently based in Kampong Speu, Cambodia, I enjoy creating and learning new things. With a solid foundation in programming languages such as `;
  const blob1: string = `, I'm also interested in containerization using `;
  const blob2: string = `servers. I'm always looking to expand my skillset.`;
  return (
    <>
      <div className="mx-auto max-w-[1400px] flex flex-col gap-4 h-full">
        <div className="flex flex-col justify-start w-full pt-8 mb:w-2/6 sm:pl-10">
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
            <span className="text-[#ffffff]"> NextJS </span>
            {blob1}
            <span className="text-[#0b9dc8]">Docker</span> and
            <span className="text-[#ff9c08]"> cloud </span>
            {blob2}
          </p>
          <h1 className="text-[#d3869b] text-[24px] md:text-[34px] sm:text-[28px] font-patua_one pt-4">
            Technologies
          </h1>
        </div>

        <div className="flex flex-col h-full md:flex-row"></div>
      </div>
    </>
  );
}
