import Hotincampus from "@/components/Hotincampus";
import Noneplayer from "@/components/navigation/Noneplayer";





import Footer from "@/components/Footer";
import TopNav from "@/components/navigation/TopNav";
import Servercomp1 from "@/components/Servercomp1";
import Themes from "@/components/Themes";

export default function Home() {
 
  return (
    <main className=" " id="home">
    <Themes>
       <TopNav/>
       <Noneplayer/>
       <Servercomp1>
           <Hotincampus />
        </Servercomp1>
        <Footer/>
      </Themes>
 
    </main>
  );
}
