import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { useState } from "react";
function App() {
  const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL";
  const [showPopup, setShowPopup] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    business: e.target.business.value,
    service: e.target.service.value,
    message: e.target.message.value,
  };
  
  
  e.target.reset();
  try {
    await fetch("https://script.google.com/macros/s/AKfycbzqZQFYzk1Ui3l8xyI0KilZB7jp9e0wjg_da6gA13OJ2u0xLI8-oNxzjvVOJfcYQuTH/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
    });
    setShowPopup(true);
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
};
  return (
    
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <header className="backdrop-blur-md bg-white/80 sticky top-0 z-50 shadow-sm">
  <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LEFT - LOGO */}
    <h1 className="text-xl font-bold text-blue-600">Srinithi</h1>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-6">
      
      {/* LINKS */}
      <div className="hidden md:flex gap-6">
        <a href="#work" className="hover:text-blue-600">Work</a>
        <a href="#service" className="hover:text-blue-600">Service</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>

      {/* BUTTON */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
        <a href="#contact">Get Started</a>
      </button>

    </div>

  </nav>
</header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Websites that turn visitors into customers
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              I design and build clean, fast, and conversion-focused websites for businesses.
            </p>

            <div className="flex gap-4">
  <a
    href="#work"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
  >
    View My Work
  </a>

  <a
    href="#contact"
    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
  >
    Get a Website
  </a>
</div>
          </div>

          <div>
            <img
              src="/images/laptop.png"
              alt="preview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section id="work" className="py-20 bg-gray-50 text-center">

  {/* TITLE */}
  <h1 className="text-3xl font-bold mb-2">My Work</h1>
  <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded"></div>

  {/* CARD */}
  <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

    {/* IMAGE */}
    <img
      src="/images/arabiya.png" // replace with your real screenshot
      alt="Bullet Chicken"
      className="rounded-xl mb-4"
    />

    {/* TAGS */}
    <div className="flex justify-center gap-2 mb-3 text-sm">
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        UI Design
      </span>
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        Responsive
      </span>
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        Fast
      </span>
    </div>

    {/* TITLE */}
    <h2 className="text-xl font-semibold mb-2">
      Street Arabiya Website
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-500 text-sm mb-4">
      A conversion-focused landing page for a food delivery brand.
    </p>

    {/* LIVE LINK */}
    <a
      href="https://bullet-chicken-duu6.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-medium hover:underline"
    >
      View Live Website →
    </a>

  </div>
</section>

      {/* SERVICES */}
      <section id="service" className="py-20 bg-gray-50 text-center">
  
  {/* TITLE */}
  <h1 className="text-3xl font-bold mb-2">What I Offer</h1>

  {/* SUBTEXT */}
  <p className="text-gray-500 max-w-2xl mx-auto mb-12">
    Tailored web solutions designed to grow your business presence and increase conversions.
  </p>

  {/* CARDS */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

    {/* LANDING PAGE */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition">
      <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto">
        💻
      </div>

      <h2 className="text-xl font-semibold mb-2">Landing Page</h2>

      <p className="text-gray-500 text-sm">
        High-converting single page designs specifically optimized for sales and lead generation.
      </p>
    </div>

    {/* STANDARD WEBSITE */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition">
      <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto">
        🏪
      </div>

      <h2 className="text-xl font-semibold mb-2">Standard Website</h2>

      <p className="text-gray-500 text-sm">
        Professional 3-page websites including contact forms, ideal for local and small businesses.
      </p>
    </div>

    {/* CUSTOM WEBSITE */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition">
      <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto">
        🚀
      </div>

      <h2 className="text-xl font-semibold mb-2">Custom Website</h2>

      <p className="text-gray-500 text-sm">
        Advanced multi-page websites with SEO optimization and scalable architecture for growing businesses.
      </p>
    </div>

  </div>
</section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50 text-center">
  <h1 className="text-3xl font-bold mb-2">
    Simple & Transparent Pricing
  </h1>
  <p className="text-gray-500 mb-10">
    No hidden fees. Choose a plan that matches your business needs.
  </p>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 items-center">

    {/* BASIC */}
    <div className="group bg-white p-8 rounded-2xl border shadow-sm 
hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50
transition-all duration-300 cursor-pointer">

  <h2 className="text-xl font-semibold mb-2">Basic</h2>

  <h3 className="text-3xl font-bold text-blue-600 mb-6">₹1,999</h3>

  <ul className="text-gray-600 space-y-2 mb-6">
    <li>✔ 1 Page Design</li>
    <li>✔ Mobile Responsive</li>
    <li>✔ Fast Delivery</li>
  </ul>

  <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg 
  transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
    <a href="#contact">Get Started</a>
  </button>
</div>

    {/* STANDARD (HIGHLIGHT) */}
    <div className="relative bg-blue-600 text-white p-8 rounded-2xl shadow-xl 
scale-105 hover:scale-110 transition-all duration-300 cursor-pointer">

  <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-semibold shadow">
    MOST POPULAR
  </span>

  <h2 className="text-xl font-semibold mb-2">Standard</h2>
  <h3 className="text-3xl font-bold mb-6">₹4,999</h3>

  <ul className="space-y-2 mb-6">
    <li>✔ 3 Pages Website</li>
    <li>✔ Contact Form</li>
    <li>✔ SEO-Friendly</li>
    <li>✔ Speed Optimized</li>
  </ul>

  <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold 
  transition duration-300 hover:bg-gray-100 cursor-pointer">
    <a href="#contact">Get Started</a>
  </button>
</div>

    {/* PREMIUM */}
    <div className="group bg-white p-8 rounded-2xl border shadow-sm 
hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50
transition-all duration-300 cursor-pointer">

  <h2 className="text-xl font-semibold mb-2">Premium</h2>

  <h3 className="text-3xl font-bold text-blue-600 mb-6">₹8,999</h3>

  <ul className="text-gray-600 space-y-2 mb-6">
    <li>✔ Multiple Pages</li>
    <li>✔ Custom Design</li>
    <li>✔ Priority Support</li>
    <li>✔ Domain Integration</li>
  </ul>

  <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg 
  transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
   <a href="#contact">Get Started</a>
  </button>
</div>

  </div>
</section>

      

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

    {/* LEFT SIDE */}
    <div className="space-y-10">

      {/* TESTIMONIAL */}
      <div>
        <h1 className="text-3xl font-bold mb-4">What Clients Say</h1>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600 italic mb-4">
            "Working with Srinithi was smooth and professional. The website looks clean and helps customers easily find us."
          </p>

          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full font-bold">
              <img src="/images/man.avif" alt="man"/>
            </div>
            <div>
              <h3 className="font-semibold">Akash</h3>
              <p className="text-sm text-gray-500">Street Arabiya Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>

        <p className="text-gray-600 leading-7">
          I’m a dedicated web developer focused on helping businesses grow through high-performance, aesthetically pleasing websites.
          I believe a website should be more than just a digital presence — it should drive real business results.
          By combining clean design with conversion-focused strategy, I build websites that load fast, rank well, and turn visitors into customers.
        </p>
      </div>

    </div>

    {/* RIGHT SIDE (FORM) */}
    <div>
      <form 
  onSubmit={handleSubmit} 
  className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
>
  <h1 className="text-2xl font-bold text-center mb-4">
    Let’s Build Your Website
  </h1>

  <div className="grid grid-cols-2 gap-4">
    <input 
      name="name"
      className="border p-2 rounded" 
      placeholder="Name" 
      required
    />
    <input 
      name="email"
      className="border p-2 rounded" 
      placeholder="Email" 
      required
    />
  </div>

  <div className="grid grid-cols-2 gap-4">
    <input 
      name="phone"
      className="border p-2 rounded" 
      placeholder="Phone" 
      required
    />
    <input 
      name="business"
      className="border p-2 rounded" 
      placeholder="Business Name" 
      required
    />
  </div>

  <select 
    name="service"
    className="w-full border p-2 rounded"
  >
    <option>Landing Page</option>
    <option>Standard Website</option>
  </select>

  <textarea
    name="message"
    className="w-full border p-2 rounded"
    rows="4"
    placeholder="Tell me about your project..."
  ></textarea>

  <button 
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
  >
    Get Started
  </button>
</form>
    </div>
    

  </div>
</section>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t">
        <h1 className="font-bold">Srinithi</h1>
        <p className="text-sm text-gray-500">© 2026 All rights reserved</p>
      </footer>

    {showPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
      
      <h2 className="text-2xl font-bold mb-3">✅ Submitted!</h2>
      
      <p className="text-gray-600 mb-6">
        Thanks! I’ll get back to you shortly.
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
    
  );
}

export default App;