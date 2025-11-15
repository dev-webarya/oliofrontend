import React from "react";
import aboutImage from '../assets/images/about.jpg';

const About = () => (

		<section id="home" className="ftco-section ftco-no-pt ftco-no-pb">
			<div className="container">
				<div className="row no-gutters">
					<div
  className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
  style={{
    backgroundImage: `url(${aboutImage})`,
    backgroundSize: "contain",
  }}
>
</div>
					<div className="col-md-6 wrap-about py-md-5 ftco-animate">
	          <div className="heading-section mb-5 pl-md-5">
	          	<span className="subheading">About us</span>
	            <h2 className="mb-4">Choose A Perfect Car</h2>

	           <p>Olio Cabs was founded in 2023 by Mr. Dhirendra Pratap, a seasoned professional with over ten years of driving experience in Bangalore and additional experience across several Indian cities. With a deep understanding of customer expectations, safety standards, and city traffic challenges, Mr. Dhirendra created Olio Cabs to deliver a premium, dependable transportation experience.
			</p>
			<p>Known for its safe driving, punctuality, clean vehicles, and courteous, well-dressed drivers, Olio Cabs sets a new standard in personal mobility. Every driver is personally trained by Mr. Dhirendra to ensure consistent service quality and adherence to best practices in hospitality and road safety.</p>

<h4>Mission</h4>
<p> Our mission is to provide safe, reliable, and professional transportation solutions that prioritize customer comfort, punctuality, and trust.</p>
<h4>Vision</h4>
<p> Our vision is to become the most trusted and customer-centric cab service in Bangalore and beyond, setting industry benchmarks for service excellence, operational efficiency, and safety standards.
</p>
	          </div>
					</div>
				</div>
			</div>
		</section>

);

export default About;
