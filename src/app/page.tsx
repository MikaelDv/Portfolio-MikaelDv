import Header from "./components/Header";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <div>
        <div>
          <h3 className="font-light text-xl font-['Sora']">Olá, eu sou o</h3>
          <div className="border-2 w-20 flex-shrink-0 bg-gradient-to-r from-[#7B00FF] to-[#5246FF]"></div>
        </div>
      </div>
    </div>
  );
}
