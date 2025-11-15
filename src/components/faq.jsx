// import React from "react";

// const FAQ = () => {
//   return (
//     <>
//       <section id="faq" className="ftco-section">
//         <div className="container">
//           <h2 style={{ textAlign: "center" }} className="mb-5">
//             FAQ
//           </h2>
//           <div id="accordion">
//             <div className="card">
//               <div className="card-header" id="headingOne">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link"
//                     data-toggle="collapse"
//                     data-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     What is Olio Cabs?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseOne"
//                 className="collapse show"
//                 aria-labelledby="headingOne"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Olio Cabs is a professional private cab service founded in 2023 by Mr. Dhirendra
//                   Pratap. We focus on safe, clean, punctual, and reliable rides for local, intercity,
//                   and tourist travel needs.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingTwo">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     Where does Olio Cabs operate?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseTwo"
//                 className="collapse"
//                 aria-labelledby="headingTwo"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   We are currently based in Bangalore and provide services within the city as well
//                   as to nearby cities and tourist destinations.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingThree">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseThree"
//                     aria-expanded="false"
//                     aria-controls="collapseThree"
//                   >
//                     Do you offer outstation trips?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseThree"
//                 className="collapse"
//                 aria-labelledby="headingThree"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Yes! We specialize in intercity travel to destinations like Mysore, Nandi Hills,
//                   Coorg, Chikmagalur, and other nearby cities. You can choose one-way or round-trip
//                   options.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingFour">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseFour"
//                     aria-expanded="false"
//                     aria-controls="collapseFour"
//                   >
//                     What type of cars do you provide?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseFour"
//                 className="collapse"
//                 aria-labelledby="headingFour"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   We provide well-maintained, clean, and comfortable vehicles ranging from hatchbacks
//                   and sedans to SUVs, depending on your travel requirements and budget.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingFive">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseFive"
//                     aria-expanded="false"
//                     aria-controls="collapseFive"
//                   >
//                     Are your drivers trained?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseFive"
//                 className="collapse"
//                 aria-labelledby="headingFive"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Yes. Every driver at Olio Cabs is personally trained by our founder, ensuring they
//                   follow strict standards of safety, punctuality, and customer service.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingSix">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseSix"
//                     aria-expanded="false"
//                     aria-controls="collapseSix"
//                   >
//                     How do you ensure passenger safety?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseSix"
//                 className="collapse"
//                 aria-labelledby="headingSix"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Our safety measures include:
//                   <ul>
//                     <li>Verified drivers with background checks</li>
//                     <li>Regular vehicle inspections and sanitization</li>
//                     <li>Emergency support in case of any issues</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingSeven">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseSeven"
//                     aria-expanded="false"
//                     aria-controls="collapseSeven"
//                   >
//                     How is Olio Cabs different from Ola or Uber?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseSeven"
//                 className="collapse"
//                 aria-labelledby="headingSeven"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Unlike aggregators, we offer consistent quality, fixed pricing, and personalized
//                   service. No surge pricing, no last-minute cancellations — just reliable,
//                   professional rides every time.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingEight">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseEight"
//                     aria-expanded="false"
//                     aria-controls="collapseEight"
//                   >
//                     Do you have surge pricing?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseEight"
//                 className="collapse"
//                 aria-labelledby="headingEight"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   No. Our pricing is transparent and pre-agreed, so you never face unpleasant
//                   surprises during peak hours.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingNine">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseNine"
//                     aria-expanded="false"
//                     aria-controls="collapseNine"
//                   >
//                     Can I book a cab in advance?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseNine"
//                 className="collapse"
//                 aria-labelledby="headingNine"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Absolutely! We recommend advance bookings to ensure availability, especially for
//                   airport transfers, outstation trips, and early morning rides.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingTen">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseTen"
//                     aria-expanded="false"
//                     aria-controls="collapseTen"
//                   >
//                     Do you provide airport pickup and drop?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseTen"
//                 className="collapse"
//                 aria-labelledby="headingTen"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Yes, we offer 24x7 airport transfers with punctual pickups and live flight
//                   tracking (TnC apply) to ensure you never miss a flight.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingEleven">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseEleven"
//                     aria-expanded="false"
//                     aria-controls="collapseEleven"
//                   >
//                     What payment options are available?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseEleven"
//                 className="collapse"
//                 aria-labelledby="headingEleven"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   You can pay via cash, UPI, bank transfer, or google pay. Receipts are provided for
//                   all payments.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingTwelve">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseTwelve"
//                     aria-expanded="false"
//                     aria-controls="collapseTwelve"
//                   >
//                     Are your fares per km or fixed?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseTwelve"
//                 className="collapse"
//                 aria-labelledby="headingTwelve"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   We offer both options – fixed-price packages for airport and outstation rides, and
//                   per-km pricing for local trips.
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingThirteen">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseThirteen"
//                     aria-expanded="false"
//                     aria-controls="collapseThirteen"
//                   >
//                     Can I request a specific driver or car?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseThirteen"
//                 className="collapse"
//                 aria-labelledby="headingThirteen"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Yes, if you are a repeat customer, we try our best to assign your preferred driver
//                   or car, subject to availability
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingFourteen">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseFourteen"
//                     aria-expanded="false"
//                     aria-controls="collapseFourteen"
//                   >
//                     Are your cabs available 24/7?
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseFourteen"
//                 className="collapse"
//                 aria-labelledby="headingFourteen"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   Yes, Olio Cabs operates round the clock, so whether it’s an early morning airport
//                   drop or a late-night pickup, we are available.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default FAQ;
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState("0");

  const toggleKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqs = [
    {
      q: "What is Olio Cabs?",
      a: "Olio Cabs is a professional private cab service founded in 2023 by Mr. Dhirendra Pratap. We focus on safe, clean, punctual, and reliable rides for local, intercity, and tourist travel needs."
    },
    {
      q: "Where does Olio Cabs operate?",
      a: "We are currently based in Bangalore and provide services within the city as well as to nearby cities and tourist destinations."
    },
    {
      q: "Do you offer outstation trips?",
      a: "Yes! We specialize in intercity travel to destinations like Mysore, Nandi Hills, Coorg, Chikmagalur, and other nearby cities. You can choose one-way or round-trip options."
    },
    {
      q: "What type of cars do you provide?",
      a: "We provide well-maintained, clean, and comfortable vehicles ranging from hatchbacks and sedans to SUVs, depending on your travel requirements and budget."
    },
    {
      q: "Are your drivers trained?",
      a: "Yes. Every driver at Olio Cabs is personally trained by our founder, ensuring they follow strict standards of safety, punctuality, and customer service."
    },
    {
      q: "How do you ensure passenger safety?",
      a: (
        <ul>
          <li>Verified drivers with background checks</li>
          <li>Regular vehicle inspections and sanitization</li>
          <li>Emergency support in case of any issues</li>
        </ul>
      )
    },
    {
      q: "How is Olio Cabs different from Ola or Uber?",
      a: "Unlike aggregators, we offer consistent quality, fixed pricing, and personalized service. No surge pricing, no last-minute cancellations — just reliable, professional rides every time."
    },
    {
      q: "Do you have surge pricing?",
      a: "No. Our pricing is transparent and pre-agreed, so you never face unpleasant surprises during peak hours."
    },
    {
      q: "Can I book a cab in advance?",
      a: "Absolutely! We recommend advance bookings to ensure availability, especially for airport transfers, outstation trips, and early morning rides."
    },
    {
      q: "Do you provide airport pickup and drop?",
      a: "Yes, we offer 24x7 airport transfers with punctual pickups and live flight tracking (TnC apply) to ensure you never miss a flight."
    },
    {
      q: "What payment options are available?",
      a: "You can pay via cash, UPI, bank transfer, or Google Pay. Receipts are provided for all payments."
    },
    {
      q: "Are your fares per km or fixed?",
      a: "We offer both options – fixed-price packages for airport and outstation rides, and per-km pricing for local trips."
    },
    {
      q: "Can I request a specific driver or car?",
      a: "Yes, if you are a repeat customer, we try our best to assign your preferred driver or car, subject to availability."
    },
    {
      q: "Are your cabs available 24/7?",
      a: "Yes, Olio Cabs operates round the clock, so whether it’s an early morning airport drop or a late-night pickup, we are available."
    }
  ];

  return (
    <>
      {/* ✅ CSS inside the same file */}
      <style>{`
        .faq-icon {
          font-weight: bold;
          margin-right: 10px;
          font-size: 18px;
          line-height: 1;
          width: 20px;
          display: inline-block;
          text-align: center;
        }
        .accordion-button::after {
          display: none !important; /* Hide default arrow */
        }
      `}</style>

      <section id="faq" className="ftco-section">
        <div className="container">
          <h2 style={{ textAlign: "center" }} className="mb-5">
            FAQ
          </h2>
          <Accordion activeKey={activeKey}>
            {faqs.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header onClick={() => toggleKey(index.toString())}>
                  <span className="faq-icon">
                    {activeKey === index.toString() ? "−" : "+"}
                  </span>
                  {item.q}
                </Accordion.Header>
                <Accordion.Body>{item.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;
