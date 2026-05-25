import { useState } from "react";

function App() {
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

    try {
      await fetch("YOUR_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      setShowPopup(true);
      e.target.reset();

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <header className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          <h1 className="text-xl font-bold text-blue-600">Srinithi</h1>

          <div className="hidden md:flex gap-6">
            <a href="#work">Work</a>
            <a href="#service">Service</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 sm:px-6 items-center">
          
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
              Websites that turn visitors into customers
            </h1>

            <p className="text-gray-600 mb-6">
              I help businesses get more customers through clean, fast websites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center">
                View My Work
              </a>
              <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-center">
                Get a Website
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/laptop.png"
              alt="preview"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-16 sm:py-20 text-center">
        <h1 className="text-3xl font-bold mb-10">My Work</h1>

        <div className="max-w-md sm:max-w-lg mx-auto bg-white p-6 rounded-2xl shadow">
          <img src="/images/arabiya.png" className="rounded-xl mb-4" />

          <h2 className="font-semibold text-lg mb-2">
            Street Arabiya Website
          </h2>

          <p className="text-gray-500 text-sm mb-3">
            Restaurant landing page designed to attract more customers.
          </p>

          <a
            href="https://bullet-chicken-duu6.vercel.app/"
            target="_blank"
            className="text-blue-600"
          >
            View Live →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="service" className="py-16 sm:py-20 bg-gray-50 text-center">
        <h1 className="text-3xl font-bold mb-2">What I Offer</h1>

        <p className="text-gray-500 mb-10">
          Solutions designed to grow your business online.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold">Landing Page</h2>
            <p className="text-gray-500 text-sm">
              Single-page websites focused on conversions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold">Standard Website</h2>
            <p className="text-gray-500 text-sm">
              Multi-page websites for growing businesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold">Custom Website</h2>
            <p className="text-gray-500 text-sm">
              Advanced scalable websites with SEO optimization.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 sm:py-20 text-center">
        <h1 className="text-3xl font-bold mb-10">Pricing</h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2>Basic</h2>
            <h3 className="text-blue-600 text-2xl">₹1,999</h3>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow scale-105">
            <h2>Standard</h2>
            <h3 className="text-2xl">₹4,999</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2>Premium</h2>
            <h3 className="text-blue-600 text-2xl">₹8,999</h3>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6">

          <div>
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600">
              I help businesses grow by building fast and modern websites.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">

            <input name="name" placeholder="Name" className="w-full border p-2 rounded" required />
            <input name="email" placeholder="Email" className="w-full border p-2 rounded" required />
            <input name="phone" placeholder="Phone" className="w-full border p-2 rounded" required />
            <input name="business" placeholder="Business" className="w-full border p-2 rounded" required />

            <select name="service" className="w-full border p-2 rounded">
              <option>Landing Page</option>
              <option>Standard Website</option>
            </select>

            <textarea name="message" className="w-full border p-2 rounded" placeholder="Message" />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Get Started
            </button>

          </form>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className="font-bold">Submitted!</h2>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;