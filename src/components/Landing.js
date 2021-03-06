import React from 'react';
import Home from './home';
// import Work from './Work';
import Contact from './Contact';

import data from './yourdata';

const Landing = ()=>{
    return(<div className="App">
      <Home name={data.landingPageName} paragraph = {data.landingPagePara} myImage={data.landingPageImage}></Home>
      {/* <Work projects={data.projects}></Work> */}
      <div className="about_contact">
      <Contact contactEmail = {data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social}></Contact>
      </div>
    </div>)
}

export default Landing