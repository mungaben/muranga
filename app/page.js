import Hotincampus from "@/components/Hotincampus";
import Noneplayer from "@/components/navigation/Noneplayer";

import Transit from "../components/Transit";




import Themes from "@/components/Themes";
import TopNav from "@/components/navigation/TopNav";
import Servercomp1 from "@/components/Servercomp1";

export default function Home() {
  console.log("HELLOOOOO");
  return (
    <main className=" " id="home">
    <Themes>
       <TopNav/>
       <Noneplayer/>
       <Servercomp1>
           <Hotincampus />
        </Servercomp1>
      </Themes>
 
    </main>
  );
}
