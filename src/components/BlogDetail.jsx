// filepath: c:\Users\hp\Desktop\olio_project\src\components\BlogDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Customer Safety: The Heart of Every Ride",
    date: "July 24, 2019",
    content: (
      <>
        <h2>Customer Safety: The Heart of Every Ride – How Cab Companies Can Lead the Way</h2>
        <p>
          In today’s fast-paced world, where people rely on cabs to commute safely and conveniently,
          customer safety has become a top priority. This article covers actionable steps companies
          can take to make rides safer and how Olio Cabs is implementing them.
        </p>

        <h3>Why Safety Matters More Than Ever</h3>
        <p>
          Safety is not just a feature; it is the foundation of customer confidence. From driver
          screening to vehicle maintenance, every detail counts.
        </p>

        <h3>Key Areas of Customer Safety</h3>
        <ul>
          <li><strong>Driver Training & Behavior:</strong> Professional driving, respectful communication, and following traffic rules.</li>
          <li><strong>Vehicle Maintenance & Cleanliness:</strong> Regular servicing and deep-clean schedules.</li>
          <li><strong>Technology & Tracking:</strong> Real-time GPS, SOS features and share-ride tracking.</li>
          <li><strong>Emergency Preparedness:</strong> Drivers trained for first-aid and emergency handling.</li>
        </ul>

        <h3>How Cab Companies Can Overcome Safety Challenges</h3>
        <ul>
          <li>Strict hiring and verification of drivers.</li>
          <li>Regular training on road safety and emergencies.</li>
          <li>Using tech like live tracking and feedback loops.</li>
          <li>Promptly acting on complaints and incidents.</li>
        </ul>

        <h3>Olio Cabs’ Commitment to Safety</h3>
        <p>
          At Olio Cabs, every driver undergoes training and vehicles are checked regularly — safety
          is our promise to every rider.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "Why Riding a Cab is the Smart Choice",
    date: "July 24, 2019",
    content: (
      <>
        <h2>Why Riding a Cab is the Smart Choice for Local, Intercity, and Tourist Travel</h2>
        <p>
          Whether you’re heading to a nearby café, traveling to a city, or exploring tourist spots,
          cabs offer convenience, safety and local expertise.
        </p>
        <ol>
          <li><strong>Stress-Free Travel:</strong> No parking or navigation hassles.</li>
          <li><strong>Intercity & Airport Travel:</strong> Reliable and punctual service.</li>
          <li><strong>Safe & Reliable:</strong> Trained drivers and GPS tracking.</li>
          <li><strong>Cost-Effective for Groups:</strong> Cheaper than multiple vehicles.</li>
          <li><strong>Local Expertise:</strong> Drivers guide you to hidden gems.</li>
        </ol>
      </>
    )
  },
  {
    id: 3,
    title: "Why Personalized Cabs Are Better Than Ola and Uber",
    date: "July 24, 2019",
    content: (
      <>
        <h2>Why Personalized Cabs Are Better Than Ola and Uber</h2>
        <p>
          Personalized cab services focus on consistency, relationships and predictable pricing.
        </p>
        <ol>
          <li><strong>Consistency:</strong> Same high standards every ride.</li>
          <li><strong>Personally Trained Drivers:</strong> Courteous and reliable service.</li>
          <li><strong>No Surge Pricing:</strong> Transparent fares.</li>
          <li><strong>Direct Support:</strong> Fast human resolution.</li>
        </ol>
      </>
    )
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="blog-container">
        <style>{styles}</style>
        <div className="blog-card">
          <h2 className="not-found">Blog not found</h2>
          <Link to="/" className="back-btn">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <style>{styles}</style>
      <article className="blog-card">
        <header className="blog-header">
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-date">{blog.date}</p>
        </header>

        <section className="blog-body">
          {blog.content}
        </section>

        <footer className="blog-footer">
          <Link to="/" className="back-btn">← Back to Home</Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetail;

/* styles */
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@600;700&display=swap');

:root{
  --bg:#f6f7fb;
  --card:#ffffff;
  --accent:#0f172a; /* deep indigo */
  --muted:#6b7280;
  --accent-2:#f59e0b; /* warm amber */
}

.blog-container{
  background: linear-gradient(180deg, var(--bg) 0%, #eef2ff 100%);
  min-height: calc(100vh - 80px);
  padding: 48px 16px;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}

.blog-card{
  width:100%;
  max-width:900px;
  background: var(--card);
  border-radius:12px;
  box-shadow:0 8px 30px rgba(2,6,23,0.08);
  overflow:hidden;
  padding:28px;
  border: 1px solid rgba(15,23,42,0.06);
}

.blog-header{
  text-align:left;
  margin-bottom:18px;
}

.blog-title{
  font-family: 'Playfair Display', serif;
  color: var(--accent);
  font-size: clamp(20px, 3vw, 32px);
  line-height:1.05;
  margin:0 0 6px 0;
}

.blog-date{
  color:var(--muted);
  font-size:14px;
  margin:0;
}

.blog-body{
  color:#111827;
  font-size:16px;
  line-height:1.75;
  margin-top:18px;
}

.blog-body h2{
  font-family: 'Playfair Display', serif;
  color:var(--accent);
  margin-top:18px;
  margin-bottom:8px;
  font-size:20px;
}

.blog-body h3{
  color:var(--accent);
  margin-top:14px;
  margin-bottom:6px;
  font-size:18px;
}

.blog-body p{
  margin:10px 0;
  color:#111827;
}

.blog-body ul, .blog-body ol{
  margin:10px 0 12px 20px;
  color:#111827;
}

.blog-footer{
  margin-top:26px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  flex-wrap:wrap;
}

.back-btn{
  display:inline-block;
  background:linear-gradient(90deg,var(--accent) 0%, #0b5bd7 100%);
  color:#fff;
  padding:10px 14px;
  border-radius:8px;
  text-decoration:none;
  font-weight:600;
  transition:transform .15s ease, box-shadow .15s ease;
  box-shadow:0 6px 18px rgba(11,91,215,0.12);
}

.back-btn:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(11,91,215,0.14);
}

.not-found{
  color:var(--accent);
  text-align:center;
  margin-bottom:18px;
}

@media (max-width:640px){
  .blog-card{ padding:20px; border-radius:10px; }
  .blog-body{ font-size:15px; }
  .back-btn{ width:100%; text-align:center; }
}
`;
