import "./App.css";
import { useState, useEffect } from "react";
import {
 Header,
 Wrapper,
 SectionHero,
 SectionSkills,
 SectionAboutMe,
 SectionContact,
 SectionProjects,
 SectionFooter,
 Loading,
} from "./components";

function App() {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  // Simula o carregamento de dados com um timeout
  const timer = setTimeout(() => {
   setIsLoading(false);
  }, 14440); // 3 segundos

  return () => clearTimeout(timer); // Limpa o timeout quando o componente desmontar
 }, []);

 return (
  <>
   {isLoading ? (
    <div className="load">
     <Loading />
    </div>
   ) : (
    <Wrapper>
     <Header />
     <SectionHero />
     <SectionProjects />
     <SectionSkills />
     <SectionAboutMe />
     <SectionContact />
     <SectionFooter />
    </Wrapper>
   )}
  </>
 );
}

export default App;
