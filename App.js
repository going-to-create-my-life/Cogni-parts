import './App.css';
import image1 from './location.svg';
import image2 from './date and time.svg';
import image3 from './Frame 19.svg';
function App() {
  return (
    <>
      <div className="top">
      <div id="name">Robotics</div>
      <div id="overview">Lorem Ipsum Innovwave</div>
    </div>
    <div id="main">
      <div id="onlyimg">
      <div id="write_here">
      <div><span id="overview">Lorem Ipsum Innovwave</span><br></br>
      <span id="name">Robotics</span></div>
      <button className="register" style={{right: '2vw'}}>Register</button>
      </div>
      </div>
    <div>
    <div id="block">
    <div id="pieces">
      <div className="piece">
    <img src={image1} alt="asdf" />
    <div className="text_top">IIT Roorkee</div>
    </div>
    <div className="piece">
    <img src={image2} alt="asdf" />
    <div className="text_top">5-18 January</div>
    </div>
    <div className="piece">
    <img src={image3} alt="asdf" />
    <div className="text_top">Prizes Worth: 5 Lakh+</div>
    </div>
    </div>
    </div>
    <div id="buttons">
    <button className="problem">Problem Statement</button>
    <button className="register2">Register</button>
    </div>
    </div>
    </div>
    <div id="comp">
      <div id="desc"> 
        <div className="heading">
          Description
        </div>
        <div id="desctext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. <br/><br/></div>
      </div>
      <div id="stages">
      <div className="heading">
      STAGES AND TIMELINES
        </div>
        <div class="rounds">
        <span id="round1">Round 1</span>
        <span id="line"></span>
        </div>
        <div className="round_content">
          <div className="con">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
        </div>
    <div className="sum">
    <div className="info">
    <div className="tab" style={{width: '25.278vw', height: '6.94vw'}}>
      <span className="upper">Starts at:<br/></span>
      <span className="lower">5 Jan, 8 AM IST</span>
      </div>
    
    <div className="tab" style={{width: '33.89vw'}}><span className="upper">Submission Deadline:<br/></span>
    <span className="lower">12 Jan, 6 PM IST</span>
    </div>
    </div>
    <div className="rbuttons">
      <button className="problem" >Guidelines</button>
      <button className="register" >Submission</button>
    </div>
    </div>
        </div>
        <div style={{marginTop: '4vh'}} class="rounds">
        <span id="round1">Round 2</span>
        <span id="line"></span>
        </div>
        <div className="round_content">
          <div className="con">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
        </div>
    <div className="sum">
    <div className="info">
    <div className="tab" style={{width: '25.278vw', height: '6.94vw'}}>
      <span className="upper">Starts at:<br/></span>
      <span className="lower">5 Jan, 8 AM IST</span>
      </div>
    
    <div className="tab" style={{width: '33.89vw'}}><span className="upper">Submission Deadline:<br/></span>
    <span className="lower">12 Jan, 6 PM IST</span>
    </div>
    </div>
    <div className="rbuttons">
      <button className="problem" >Guidelines</button>
      <button className="register" >Submission</button>
    </div>
    </div>
        </div>
        <div style={{marginTop: '4vh'}} class="rounds">
        <span id="round1">Round 3</span>
        <span id="line"></span>
        </div>
        <div className="round_content">
          <div className="con">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
        </div>
    <div className="sum">
    <div className="info">
    <div className="tab" style={{width: '25.278vw', height: '6.94vw'}}>
      <span className="upper">Starts at:<br/></span>
      <span className="lower">5 Jan, 8 AM IST</span>
      </div>
    
    <div className="tab" style={{width: '33.89vw'}}><span className="upper">Submission Deadline:<br/></span>
    <span className="lower">12 Jan, 6 PM IST</span>
    </div>
    </div>
    <div className="rbuttons">
      <button className="problem" >Guidelines</button>
      <button className="register" >Submission</button>
    </div>
    </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;