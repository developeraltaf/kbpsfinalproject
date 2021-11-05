import React from 'react'
import '../css/App.css'
const SchoolTime = () => {
            
    const currTime=new Date().toLocaleTimeString();
    let curDate=new Date();
    let day = curDate.toLocaleString('en-us', {weekday: 'long'});

    curDate=curDate.getHours();
    let Schooltime='';
    if(curDate >= 7 && curDate < 12){
       Schooltime='School Time';
    }else if(curDate >=12 && curDate < 13){
        Schooltime='Lunch Time'
     }else if(day === 'Sunday' ){
      Schooltime='Lunch Time'
       console.log('Holiday');

   }else{
        Schooltime="School Close"
     }
    return (
<>
<section style={{overflow: "hidden"}} className="countdown-section">
  <div className="container">
    <div className="common-section lookcool">
      <div className="counter-shape">
        <img src="assets/images/round-shape-2.png" alt="shape" className="round-shape-2" />
        <img src="assets/images/plus-sign.png" alt="shape" className="plus-sign item-rotate" />
        <img src="assets/images/round-shape-3.png" alt="shape" className="round-shape-3" />
      </div>
      <div className="row">
        <div className="col-6 col-lg-6">
          <div className="countdown-left">
            <h2 className="home-2"><span className="countersmall">{Schooltime}</span></h2>
          </div>
        </div>
       
        <div className="col-6 col-lg-6">
          <div className="countdown-right">
            
          <h2 className="home-2"><span className="hours numbersmall">{currTime}</span></h2>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default SchoolTime