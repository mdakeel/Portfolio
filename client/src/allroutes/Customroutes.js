
import All from "../container/Work/Portfolio/All";
import { Routes, Route } from "react-router-dom";
import {MernApp} from "../container/Work/Portfolio/MernApp";
import Frontend from "../container/Work/Portfolio/Frontend";
import UiUx from "../container/Work/Portfolio/UiUx";
import ReactApp from "../container/Work/Portfolio/ReactApp";
import Portfolio from "../container/Work/Portfolio/Frontend/Portfolio/Portfolio";
import Aadilrehman from "../container/Work/Portfolio/Frontend/AadilRehamn/AadilRehman";
import ApniDiary from "../container/Work/Portfolio/Frontend/ApniDiary/ApniDiary";
import AadilRehmanCode from "../container/Work/Portfolio/Frontend/AadilRehamn/AadilRehmanCode";
import ApniDiaryCode from "../container/Work/Portfolio/Frontend/ApniDiary/ApniDiaryCode";
import ApniDiaryContactCode from "../container/Work/Portfolio/Frontend/ApniDiary/ApniDiaryContactCode";
import ApniDiaryServicesCode from "../container/Work/Portfolio/Frontend/ApniDiary/ApnidiaryServicesCode";
import PortfolioCode from "../container/Work/Portfolio/Frontend/Portfolio/PortfolioCode";
import Homlary from "../container/Work/Portfolio/UiUx/Homlary/Homlary";
import HomelaryCode from "../container/Work/Portfolio/UiUx/Homlary/HomlaryCode";
import HomlaryHomeCode from "../container/Work/Portfolio/UiUx/Homlary/HomlaryHomeCode";

export const Customroutes = () =>{
    return(
        <Routes>
            {/* <Route path="/" element={<><Work /><All /></>} /> */}
            <Route path="/all" element={<All />} />
            <Route path="/mernapp" element={<MernApp />} />
            <Route path="/reactjs" element={<ReactApp />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/uiux" element={<UiUx />} />
            
            {/* Frontend */}
            <Route path="/aadilrehman" element={<Aadilrehman />} />
            <Route path="/aadilrehmancode" element={<AadilRehmanCode/>} />

            <Route path="/apnidiary" element={<ApniDiary/>} />
            <Route path="/apnidiarycode" element={<ApniDiaryCode />} />
            <Route path="/apnidiarycontactcode" element={<ApniDiaryContactCode />} />
            <Route path="/apnidiaryservicescode" element={<ApniDiaryServicesCode />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfoliocode" element={<PortfolioCode />} />

            <Route path="/homlary" element={<Homlary />} />
            <Route path="/homlarycode" element={<HomelaryCode />} />
            <Route path="/homlaryhomecode" element={<HomlaryHomeCode />} />

            
        </Routes>
    )
}