import React from 'react'
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import bannerimage from '../images/banner-image.png';
function App() {
    return (
      <div className="banner-container">
        <div className="container">
           <Row>
              <Col xs="6">
                  <h1 className="banner-title">The Learning<br/> Ecosystem</h1>
                  <p className="banner-text">An intergrated learning ecosystem with adaptive learning and interconnected stakeholders. We prioritize the individual needs of each student
                  to make learning more efficient and rewarding.</p>

                <p className="banner-text">To promote access to learners around the world, we allow students and parents to subscribe 
                to the OctiLearn platform independently or as part of a school subscription.
                </p>
                 <Button color="primary" className="signin-button"> Contact us</Button>
              </Col>
              <Col xs="6">
                  <img src={bannerimage} className="img-fluid" alt="bannerimage" />
              </Col>              
           </Row>
        </div>
      </div>  
    );
}
  
export default App;