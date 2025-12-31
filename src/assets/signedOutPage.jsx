import { ArrowBigDown, ArrowUp01Icon, ClockArrowUp, GitGraph, Home, LightbulbIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";


const SignedOutPage = () => {
    return (
        <>
        <div className="container img1">
          <div className="section backImg1">
            <h1>Turn Ideas Into Reality</h1>
            <p>{`CrowdMind is the collaborative platform that helps teams and communities collect, 
prioritze, and implement the best ideas through democratic voting and smart 
workflows.`}</p> 
                <div className="buttonContainer">
                  <Link className="button1">Get Started For Free</Link> 
                  <Link className="button1">Watch Demo</Link> 
                </div>
            </div>
            <div className="sectionRow">
                <div className="midSection">
                    <h2>10K+</h2>
                    <p>Ideas Collected</p>
                </div>
                <div className="midSection">
                    <h2>2.5K</h2>
                    <p>Active Users</p>
                </div>
                <div className="midSection">
                    <h2>850</h2>
                    <p>Ideas Implemented</p>
                </div>
                <div className="midSection">
                    <h2>95%</h2>
                    <p>User Satisfaction</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="section">
                <h2>Everything You Need For Collaborative Innovation</h2>
                <p>{`From idea collection to implementation, CrowdMind provides all the tools
your team needs to harness collective intelligence.`}</p>
            </div>
            <div className="sectionRow">
                <div className="midSection midsectionBack1">
                   <LightbulbIcon className="icon1"></LightbulbIcon> 
                   <h3>
                        Crowdsource Ideas
                    </h3>
                    <p>
                        Collect brilliant ideas from your entire community with rich descriptions and smart tagging.
                    </p>
                </div>
                <div className="midSection midsectionBack1">
                    <ArrowUp01Icon className="icon1"></ArrowUp01Icon>
                    <h3>
                        Crowdsource Ideas
                    </h3>
                    <p>
                        Collect brilliant ideas from your entire community with rich descriptions and smart tagging.
                    </p>
                </div>
                <div className="midSection midsectionBack1">
                    <h3>
                        Crowdsource Ideas
                    </h3>
                    <p>
                        Collect brilliant ideas from your entire community with rich descriptions and smart tagging.
                    </p>
                </div>
                <div className="midSection midsectionBack1">
                    <h3>
                        Crowdsource Ideas
                    </h3>
                    <p>
                        Collect brilliant ideas from your entire community with rich descriptions and smart tagging.
                    </p>
                </div>
            </div>

        </div>
        <div className="container">
            <h2>How {WEBSITE_NAME} Works</h2>
            <p>Simple, powerful workflow that turns <strong>CHAOS</strong> into <i>clarity</i></p>
            <div className="midSection">
                <h2>1</h2>
            </div>
        </div>
        </>
    )
}
 export default SignedOutPage;