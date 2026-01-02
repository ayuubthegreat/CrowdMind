import { ArrowBigDown, ArrowRightIcon, ArrowUp01Icon, Check, CheckCircle, ClockArrowUp, Donut, GitGraph, Home, LightbulbIcon, ShieldBanIcon, SplineIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";
import Midsection from "../components/midsection";
import Header from "../components/header";
import Footer from "../components/footer";
import LinksCustom from "../components/links";
import { useWindowWidth } from "../components/width";


const SignedOutPage = () => {
    const normalSize = 35;
    const width = useWindowWidth();
    const Icon2Use = function({index}) {
        if (index == 0) {
            return <LightbulbIcon></LightbulbIcon>
        } else if (index == 1) {
            return <SplineIcon></SplineIcon>
        } else if (index == 2) {
            return <CheckCircle></CheckCircle>
        } else {
            return <ShieldBanIcon></ShieldBanIcon>
        }
    }
    const midsection1Details = new Map([
        ["10K+", "Ideas Collected"],
        ["2.5K", "Active Users"],
        ["850", "Ideas Implemented"],
        ["95%", "User Satisfaction"]
    ])
    const midsection2Details = new Map([
        ["Crowdsource Ideas", "Collect brilliant ideas from your entire community with rich descriptions and smart tagging."],
        ["Community Votes", "Let your community vote on the best ideas with upvotes, downvotes, and detailed discussions."],
        ["Track Progress", "Follow ideas through their journey from review to planning to completion."],
        ["Smart Moderation", "Built-in moderation tools and duplicate detection keep your platform clean and organized."]
    ])
    const midsection3Details = new Map([
        ["Collect Ideas", "Team members submit ideas with detailed descriptions and relevant tags. Our smart system helps organize and categorize submissions automatically."],
        ["Vote and Discuss", "Community Members vote on ideas and engage in meaningful discussions. The best ideas naturally rise to the top through democratic participation."],
        ["Take Action", "Track Ideas through implementation stages from planning to completion. Keep everyone informed with status updates and progress tracking."]
    ])
    return (
        <>
        <div className="container img1">
          <div className="section backImg1">
            <Header title={"Turn Ideas Into Reality"} desc={`CrowdMind is the collaborative platform that helps teams and communities collect, 
prioritze, and implement the best ideas through democratic voting and smart 
workflows.`} headerSize={70} width={width}/>
                <LinksCustom linksMap={new Map([
                    ["/login", <> Get Started Free <ArrowRightIcon></ArrowRightIcon></>],
                    ["/demo", "Watch Demo"]
                ])} backgroundColor="rgba(242, 136, 136, 1), rgba(124, 48, 48, 1)"/>
            </div>
            <div className="sectionRow">
                {Array.from(midsection1Details).map(([title, desc]) => (
                    <Midsection key={title} title={title} desc={desc} headerSize={40} />
                ))}
            </div>
        </div>
        <div className="container">
            <div className="section">
                <Header title={`Everything You Need For Collaborative Innovation`} desc={`From idea collection to implementation, CrowdMind provides all the tools
your team needs to harness collective intelligence.`} headerSize={normalSize} width={width}/>
            </div>
            <div className="sectionRow">
                {Array.from(midsection2Details).map(([title, desc], index) => (
                    <Midsection key={title} index={<Icon2Use index={index} />} title={title} desc={desc} />
                ))}
            </div>

        </div>
        <div className="container">
            <Header title={`How ${WEBSITE_NAME} works`} desc={"Simple, powerful workflow that turns chaos into clarity."} headerSize={normalSize} width={width}/>
            <div className="sectionRow">
            {Array.from(midsection3Details).map(([title, desc], index) => (
                <Midsection key={title} index={index + 1} title={title} desc={desc} />
            ))}
            </div>
        </div>
        <div className="container">
            <Header title={"Ready to Unlock Your Team's Potential?"} desc={`Join thousands of teams already using ${WEBSITE_NAME} to turn great ideas into reality. Start your free account today and see the difference collaborative innovation makes.`} headerSize={normalSize} width={width}/>
            <div className="buttonContainer">
                  <Link className="button1">Get Started For Free</Link> 
                  <CheckCircle></CheckCircle>
                  <p>No Credit Card Required!</p>
                </div>
        </div>
        </>
    )
}
 export default SignedOutPage;