import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <div className="flex justify-between">
        <section className="left-content">
          <div>
            <h3 className="font-light text-xl font-['Sora']">Olá, eu sou o</h3>
            <div className="border-2 w-20 flex-shrink-0 bg-gradient-to-r from-[#7B00FF] to-[#5246FF]"></div>
          </div>
          <div>
            <h1 className="text-8xl font-black">Mikael Sanches</h1>
            <div className="loader font-semibold text-2xl">
              <p>Desenvolvedor</p>
              <div className="words">
                <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Back-End</span>
                <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Front-End</span>
                <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">Full-Stack</span>
                <span className="word bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent">UX/UI</span>
              </div>
            </div>
            {/* <h2 className="font-semibold text-4xl ">Desenvolvedor <a href="" className="bg-gradient-to-r from-[#7B00FF] to-[#5246FF] bg-clip-text text-transparent cursor-default">Full-Stack</a></h2> */}
          </div>
          <div className="font-[Sora] text-xl font-normal">
            <button className="flex items-center">
              <Image src={"/save.svg"} alt="save icon" height={25} width={25}/>
              Currículo
            </button>
            <button className="flex items-center">
              <Image src={"/github.svg"} alt="github icon" height={25} width={25}/>
              GitHub
            </button>
          </div>
        </section>
        <section className="right-content">
          <Image src={"/Vector 1 (1).svg"} alt={"Forma roxa arredendada"} width={500} height={0}/>
        </section>
      </div>
    </div>
  );
}
