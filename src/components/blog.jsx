import React from "react";
import { Link } from "react-router-dom";

import image_11 from "../assets/images/image_11.png";
import image_22 from "../assets/images/image_22.png";
import image_33 from "../assets/images/image_33.png";

const getImageUrl = (image) => `url(${image})`;

const blogData = [
	{
		id: 1,
		date: "July. 24, 2019",
		title: "Customer Safety: The Heart of Every Ride",
		description:
			"Olio Cabs is a professional private cab service founded in 2023 by Mr. Dhirendra Pratap. We focus on safe, clean, punctual, and reliable rides for local, intercity, and tourist travel needs.",
		imageUrl: getImageUrl(image_11),
	},
	{
		id: 2,
		date: "July. 24, 2019",
		title: "Why Riding a Cab is the Smart Choice",
		description:
			"Discover why cabs are the best option for local, intercity, and tourist travel. Comfort, safety, and convenience in every ride.",
		imageUrl: getImageUrl(image_22),
	},
	{
		id: 3,
		date: "July. 24, 2019",
		title: "Why Personalized Cabs Are Better Than Ola and Uber",
		description:
			"Learn how personalized cab services offer more reliability, safety, and comfort compared to big aggregators.",
		imageUrl: getImageUrl(image_33),
	},
];

const Blog = () => {
	return (
		<section id="blog" className="ftco-section blog-section">
			<div className="container">
				<div className="row justify-content-center mb-5">
					<div className="col-md-7 heading-section text-center ftco-animate">
						<span className="subheading">Blog</span>
						<h2>Recent Blog</h2>
					</div>
				</div>
				<div className="row d-flex">
					{blogData.map((blog) => (
						<div key={blog.id} className="col-md-4 d-flex ftco-animate">
							<div className="blog-entry justify-content-end">
								<a
									href="#"
									className="block-20"
									style={{ backgroundImage: blog.imageUrl }}
								></a>
								<div className="text pt-4">
									<div className="meta mb-3">
										<div>
											<a href="#">{blog.date}</a>
										</div>
									</div>
									<h3 className="heading mt-2">
										<Link to={`/blog/${blog.id}`}>{blog.title}</Link>
									</h3>
									<p>{blog.description}</p>
									<Link
										className="btn btn-primary"
										to={`/blog/${blog.id}`}
									>
										Read more
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
