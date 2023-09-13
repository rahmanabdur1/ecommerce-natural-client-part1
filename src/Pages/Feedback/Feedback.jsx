import React from 'react';
import './Feedback.css'
const Feedback = () => {
    const clients = [
        {
            "title": "Ami Apnader customer, ami apnader akhan theme kinte onk happy, karon prottke kinte pere onk happy, karon prottek ta ponner result valo",
            "name": "Siddikur",
            "pro": "businessman"
        },
        {
            "title": "Thank you for giving me original product",
            "name": "Siddikur",
            "pro": "marketer"
        },
        {
            "title": "Ami Apnader customer, ami apnader akhan theme kinte onk happy, karon prottke kinte pere onk happy, karon prottek ta ponner result valo",
            "name": "Siddikur",
            "pro": "businessman"
        },
        {
            "title": "Ami Apnader customer, ami apnader akhan theme kinte onk happy, karon prottke kinte pere onk happy, karon prottek ta ponner result valo",
            "name": "Siddikur",
            "pro": "Enginner"
        },
        {
            "title": "Ami Apnader customer, ami apnader akhan theme kinte onk happy, karon prottke kinte pere onk happy, karon prottek ta ponner result valo",
            "name": "Siddikur",
            "pro": "businessman"
        },
        {
            "title": "Ami Apnader customer, ami apnader akhan theme kinte onk happy, karon prottke kinte pere onk happy, karon prottek ta ponner result valo",
            "name": "Siddikur",
            "pro": "businessman"
        }
    ]
    return (
        <div className='container'>
            <h2>What Our <span>Happy Clients Say</span> </h2>
          <div className='feedback'>
                {clients.map((feedback, index) => (
                     <div key={index} className={`feedback-entry ${index === 1 ? 'second-entry' : ''}`}>
                        <h3>{feedback.title}</h3>
                        <div className="author">
                        <span className="bar"></span> {/* Red bar element */}
                        <h4 className="name">{feedback.name}</h4>
                    </div>
                      
                        <p>{feedback.pro}</p>
                    </div>
                ))}
               
            </div>
            <div className='vbtn'></div>
        </div>
    );
};

export default Feedback;