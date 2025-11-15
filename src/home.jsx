import React from "react";
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import About from './components/about';
import Booking from './components/booking';
import Packages from './components/plan-package';
import Blog from './components/blog';
import FAQ from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';
import BookingTable from './components/BookingTable';
import AdminPage from './components/AdminPage';
import { getToken } from "./utils/auth";


function Home() {

  const data = getToken()

  console.log(data, 'data')
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Booking />
      <Packages />
      <Blog />
      <FAQ />
      <Contact />
      {data?.role == "USER" ? null : <AdminPage />}

      <div style={{ background: "#fff", padding: "30px 15px", marginTop: "80px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }} id="myBooking">
        <h2 style={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center" }}>My Booking</h2>
        <BookingTable />
      </div>
      <Footer />
    </div>
  );
}

export default Home;