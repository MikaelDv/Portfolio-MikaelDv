import Footer from "./_sections/Footer";
import Header from "./_components/Header";
import Main from "./_sections/Main";
import AboutMe from "./_sections/AboutMe";
import Projects from "./_sections/Projects";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Projects/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}
