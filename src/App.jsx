import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { useState,useEffect } from "react";
function App() {
  const [errors, setErrors] = useState({});
const [activeSection, setActiveSection] = useState("home");
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {

  const handleScroll = () => {

    const sections = document.querySelectorAll("section");

    let current = "home";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 200;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }

    });

    setActiveSection(current);

  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);
const validateForm = (formData) => {
  const newErrors = {};

  // NAME VALIDATION
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  // EMAIL VALIDATION
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Enter a valid email";
  }

  // PHONE VALIDATION
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Enter a valid 10-digit phone number";
  }

  // BUSINESS NAME
  if (!formData.business.trim()) {
    newErrors.business = "Business name is required";
  }

  // MESSAGE
  if (!formData.message.trim()) {
    newErrors.message = "Please describe your project";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message should be at least 10 characters";
  }

  return newErrors;
};
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

  // VALIDATION
  const validationErrors = validateForm(formData);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzqZQFYzk1Ui3l8xyI0KilZB7jp9e0wjg_da6gA13OJ2u0xLI8-oNxzjvVOJfcYQuTH/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      }
    );

    setShowPopup(true);

    e.target.reset();

  } catch (error) {
    console.error(error);
  }
};
  return (
    
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1120] border-b border-white/10 shadow-lg">

  <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <div className="flex items-center gap-3 cursor-pointer">

      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
        S
      </div>

      <h1 className="text-2xl font-bold text-white tracking-wide">
        Srinithi
      </h1>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-10">

      {/* LINKS */}
      <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl"
>
  ☰
</button>

        <a
  href="#home"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "home"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  Home
</a>

        <a
  href="#about"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "about"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  About
</a>

        <a
  href="#service"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "service"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  Service
</a>
        <a
  href="#work"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "work"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  Project
</a>
        <a
  href="#pricing"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "pricing"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  Pricing
</a>
<a
  href="#testimonial"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "testimonial"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  Testimonials
</a>

        <a
  href="#contact"
  className={`
    relative
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-blue-400
    after:transition-all
    after:duration-300

    ${
      activeSection === "contact"
        ? "text-blue-400 after:w-full"
        : "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
    }
  `}
>
  Contact
</a>

      </div>

      {/* BUTTON */}
      <a
        href="#contact"
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5 py-2.5
          rounded-xl
          font-semibold
          shadow-lg
          hover:scale-105
          transition-all duration-300
        "
      >
        Get Started
      </a>

    </div>

  </nav>
  {menuOpen && (

  <div
    className="
      md:hidden
      bg-[#0B1120]
      border-t border-white/10
      px-6 py-6
      space-y-5
      text-gray-300
      font-medium
    "
  >

    <a href="#home" className="block">Home</a>
    <a href="#about" className="block">About</a>
    <a href="#service" className="block">Services</a>
    <a href="#work" className="block">Projects</a>
    <a href="#pricing" className="block">Pricing</a>
    <a href="#testimonial" className="block">Testimonials</a>
    <a href="#contact" className="block">Contact</a>

  </div>

)}
</header>

      {/* HERO */}
      {/* HERO */}
<section
  id="home"
  className="
    relative
    min-h-screen
    flex items-center
    scroll-mt-24
    
    pt-28
    overflow-hidden
    animate-[fadeIn_1s_ease]
  "
>

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    {/* IMAGE */}
    <img
      src="/images/hook.png"
      alt="background"
      className="w-full h-full object-cover"
    />

    {/* LEFT SIDE OVERLAY */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-r
        from-black/90
        via-black/55
        to-transparent
      "
    ></div>

  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

    {/* LEFT SIDE */}
    <div className="animate-fadeInUp">

      {/* BADGE */}
      <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
        🚀 Freelance Web Designer & Developer
      </div>

      {/* HEADING */}
      <h1 className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  font-black
  leading-tight
  text-white
  mb-6
">
        Modern Websites
        <span className="text-blue-400"> That Help Businesses Grow</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="
  text-base
  sm:text-lg
  md:text-xl
  text-gray-300
  leading-7
  md:leading-8
  mb-8
  max-w-lg
">
        I create premium, fast, and conversion-focused websites for cafes,
        restaurants, real estate brands, and local businesses that want
        to stand out online and attract more customers.
      </p>

      {/* BUTTONS */}
      <div className="
  flex
  gap-6
  md:gap-10
  mt-12
  flex-wrap
">

        <a
          href="#work"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Explore Projects
        </a>

        <a
          href="#contact"
          className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
        >
          Start a Project
        </a>

      </div>

      {/* STATS */}
      <div className="flex gap-10 mt-12 flex-wrap">

        <div>
          <h2 className="text-3xl font-bold text-white">2+</h2>
          <p className="text-gray-400">Projects Built</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">100%</h2>
          <p className="text-gray-400">Mobile Responsive</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">Fast</h2>
          <p className="text-gray-400">Performance</p>
        </div>

      </div>

    </div>

  </div>
</section>

{/* ABOUT SECTION */}
{/* ABOUT SECTION */}
<section
  id="about"
  className="relative scroll-mt-24 py-28 bg-[#050816] overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE IMAGE */}
    <div
      className="
        relative
        group
        animate-[fadeInLeft_1s_ease]
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute inset-0
          bg-blue-500/20
          blur-3xl
          rounded-3xl
          scale-110
          opacity-70
          group-hover:opacity-100
          transition-all duration-500
        "
      ></div>

      {/* IMAGE CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border border-white/10
          shadow-2xl
          hover:-translate-y-2
          hover:scale-[1.02]
          transition-all duration-500
        "
      >

        {/* IMAGE */}
        <img
          src="/images/about.png"
          alt="about"
          className="
            w-full
            h-[500px]
            object-cover
            hover:scale-110
            transition-transform duration-700
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
          "
        ></div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="animate-[fadeInRight_1s_ease]">

      {/* SMALL TITLE */}
      <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-4">
        About Me
      </p>

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
        I Build Websites That
        <span className="text-blue-400"> Help Businesses Grow Online</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-lg leading-8 mb-6">
        I’m Srinithi, a freelance web designer and developer focused on
        creating modern, fast, and conversion-focused websites for
        businesses.
      </p>

      <p className="text-gray-400 text-lg leading-8 mb-10">
        My goal is not just to make websites look good — but to help
        businesses attract more customers, build trust, and stand out
        online with premium user experiences.
      </p>

      {/* FEATURE CARDS */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">

        {/* CARD */}
        <div
          className="
            bg-white/5
            border border-white/10
            rounded-2xl
            p-5
            hover:border-blue-500/40
            hover:bg-white/10
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            ⚡ Fast Performance
          </h3>

          <p className="text-gray-400 text-sm leading-6">
            Optimized websites that load quickly and improve user experience.
          </p>
        </div>

        {/* CARD */}
        <div
          className="
            bg-white/5
            border border-white/10
            rounded-2xl
            p-5
            hover:border-blue-500/40
            hover:bg-white/10
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            📱 Responsive Design
          </h3>

          <p className="text-gray-400 text-sm leading-6">
            Beautiful layouts that work perfectly across all devices.
          </p>
        </div>

      </div>

      {/* BUTTON */}
      <a
        href="#contact"
        className="
          inline-flex items-center gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8 py-4
          rounded-2xl
          font-semibold
          shadow-xl
          hover:shadow-blue-500/20
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        Let’s Work Together →
      </a>

    </div>

  </div>

</section>


      {/* SERVICES */}
      {/* SERVICES */}
<section
  id="service"
  className="relative scroll-mt-24 py-28 bg-[#050816] overflow-hidden text-center"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-4">
      Services
    </p>

    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
      What I Offer
    </h1>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-8">
      Tailored web solutions designed to grow your business presence,
      increase conversions, and create premium digital experiences.
    </p>

    {/* SERVICE CARDS */}
    <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-8
">

      {/* CARD 1 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          p-8
          backdrop-blur-md
          hover:border-blue-500/40
          hover:-translate-y-3
          hover:bg-white/10
          transition-all duration-500
          animate-[fadeInUp_0.8s_ease]
        "
      >

        {/* ICON */}
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-blue-600/20
            text-blue-400
            flex items-center justify-center
            text-3xl
            mx-auto mb-6
            group-hover:scale-110
            transition-all duration-300
          "
        >
          💻
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          Landing Pages
        </h2>

        <p className="text-gray-400 leading-7">
          High-converting landing pages optimized for lead generation,
          product launches, and customer engagement.
        </p>

      </div>

      {/* CARD 2 */}
      <div
        className="
          group
          bg-gradient-to-b
          from-blue-600
          to-blue-700
          rounded-3xl
          p-8
          shadow-2xl
          scale-105
          hover:scale-110
          transition-all duration-500
          animate-[fadeInUp_1s_ease]
        "
      >

        {/* BADGE */}
        <div className="inline-block bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-5">
          MOST POPULAR
        </div>

        {/* ICON */}
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-white/20
            text-white
            flex items-center justify-center
            text-3xl
            mx-auto mb-6
            group-hover:rotate-6
            transition-all duration-300
          "
        >
          🏪
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          Business Websites
        </h2>

        <p className="text-blue-100 leading-7">
          Professional websites for restaurants, cafes, and local brands
          designed to build trust and attract customers.
        </p>

      </div>

      {/* CARD 3 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          p-8
          backdrop-blur-md
          hover:border-blue-500/40
          hover:-translate-y-3
          hover:bg-white/10
          transition-all duration-500
          animate-[fadeInUp_1.2s_ease]
        "
      >

        {/* ICON */}
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-blue-600/20
            text-blue-400
            flex items-center justify-center
            text-3xl
            mx-auto mb-6
            group-hover:scale-110
            transition-all duration-300
          "
        >
          🚀
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          Custom Solutions
        </h2>

        <p className="text-gray-400 leading-7">
          Advanced scalable websites with custom UI, SEO optimization,
          animations, and modern responsive architecture.
        </p>

      </div>

      {/* GOOGLE BUSINESS PROFILE */}
<div
  className="
    group
    bg-white/5
    border border-white/10
    rounded-3xl
    p-8
    backdrop-blur-md
    hover:border-blue-500/40
    hover:-translate-y-3
    hover:bg-white/10
    transition-all duration-500
    animate-[fadeInUp_1.4s_ease]
  "
>

  {/* ICON */}
  <div
    className="
      w-16 h-16
      rounded-2xl
      bg-blue-600/20
      text-blue-400
      flex items-center justify-center
      text-3xl
      mx-auto mb-6
      group-hover:scale-110
      transition-all duration-300
    "
  >
    📍
  </div>

  <h2 className="text-2xl font-bold text-white mb-4">
    Google Business Profile
  </h2>

  <p className="text-gray-400 leading-7">
    Setup and optimize your Google Business Profile to improve local visibility,
    attract nearby customers, and build trust through reviews and search presence.
  </p>

</div>

    </div>

  </div>

</section>



     {/* PROJECTS */}
<section
  id="work"
  className="relative scroll-mt-24 py-28 bg-[#070B1A] overflow-hidden text-center"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* SECTION TITLE */}
    <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-4">
      Portfolio
    </p>

    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
      Selected Projects
    </h1>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-8">
      A collection of modern, conversion-focused websites crafted
      to help businesses stand out and grow online.
    </p>

    {/* PROJECT GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* PROJECT CARD 1 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          overflow-hidden
          backdrop-blur-md
          hover:border-blue-500/40
          hover:-translate-y-3
          transition-all duration-500
          animate-[fadeInUp_0.8s_ease]
        "
      >

        {/* IMAGE */}
        <div className="overflow-hidden">

  <img
    src="/images/arabiya.png"
    alt="Street Arabiya"
    className="
      w-full
      rounded-t-3xl
      object-cover
      object-top
      group-hover:scale-105
      transition-transform duration-700
    "
  />

</div>

        {/* CONTENT */}
        <div className="p-8 text-left">

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-5">

            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              UI Design
            </span>

            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Responsive
            </span>

            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Fast
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Street Arabiya Website
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 leading-7 mb-6">
            A conversion-focused landing page designed for a food
            delivery brand with modern UI, responsive layouts,
            and customer-focused experience.
          </p>

          {/* BUTTON */}
          <a
            href="https://bullet-chicken-duu6.vercel.app/"
            target="_blank"
            className="
              inline-flex items-center gap-2
              text-blue-400
              font-semibold
              hover:gap-4
              transition-all duration-300
            "
          >
            View Live Website →
          </a>

        </div>

      </div>

      {/* PROJECT CARD 2 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          overflow-hidden
          backdrop-blur-md
          hover:border-blue-500/40
          hover:-translate-y-3
          transition-all duration-500
          animate-[fadeInUp_1s_ease]
        "
      >

        {/* IMAGE */}
        <div className="overflow-hidden">

  <img
    src="/images/lambuz.png"
    alt="Lambuz juice cafe"
    className="
      w-full
      rounded-t-3xl
      object-cover
      object-top
      group-hover:scale-105
      transition-transform duration-700
    "
  />

</div>

        {/* CONTENT */}
        <div className="p-8 text-left">

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-5">

            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Cafe Branding
            </span>

            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Responsive
            </span>

            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
              Modern UI
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Lambuz Juice Cafe
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 leading-7 mb-6">
            A modern cafe website featuring vibrant visuals,
            smooth layouts, menu showcases, and engaging user
            experience tailored for local customers.
          </p>

          {/* BUTTON */}
          <a
            href="https://lambuzjuicecafe.vercel.app/"
            target="_blank"
            className="
              inline-flex items-center gap-2
              text-blue-400
              font-semibold
              hover:gap-4
              transition-all duration-300
            "
          >
            View Live Website →
          </a>

        </div>

      </div>

    </div>

  </div>

</section>



{/* PRICING */}
<section
  id="pricing"
  className="relative scroll-mt-24 py-28 bg-[#070B1A] overflow-hidden text-center"
>

  {/* GLOW */}
  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-4">
      Pricing
    </p>

    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
      Simple & Transparent Pricing
    </h1>

    <p className="text-gray-400 mb-16 text-lg">
      No hidden fees. Choose a plan that fits your business needs.
    </p>

    {/* PRICING CARDS */}
    <div className="
  grid
  grid-cols-1
  md:grid-cols-3
  gap-8
  items-center
">

      {/* BASIC */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          p-10
          hover:border-blue-500/40
          hover:-translate-y-3
          hover:bg-white/10
          transition-all duration-500
          animate-[fadeInUp_0.8s_ease]
        "
      >

        <h2 className="text-2xl font-bold text-white mb-3">
          Basic
        </h2>

        <h3 className="text-5xl font-black text-blue-400 mb-8">
          ₹4,999
        </h3>

        <ul className="text-gray-400 space-y-4 mb-10 text-left">

          <li>✔ 1 Page Design</li>
          <li>✔ Mobile Responsive</li>
          <li>✔ WhatsApp Integration</li>
          <li>✔ Contact form</li>
          <li>✔ 3 days Delivery</li>

        </ul>

        <a
          href="#contact"
          className="
            block
            bg-white/10
            border border-white/10
            text-white
            py-4
            rounded-2xl
            font-semibold
            hover:bg-blue-600
            hover:border-blue-600
            transition-all duration-300
          "
        >
          Get Started
        </a>

      </div>

      {/* STANDARD */}
      <div
        className="
          relative
          bg-gradient-to-b
          from-blue-600
          to-blue-700
          rounded-3xl
          p-12
          shadow-2xl
          scale-105
          hover:scale-110
          transition-all duration-500
          animate-[fadeInUp_1s_ease]
        "
      >

        {/* BADGE */}
        <div
          className="
            absolute
            top-[-14px]
            left-1/2
            -translate-x-1/2
            bg-white
            text-blue-600
            text-xs
            font-bold
            px-4 py-2
            rounded-full
            shadow-lg
          "
        >
          MOST POPULAR
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Standard
        </h2>

        <h3 className="text-5xl font-black text-white mb-8">
          ₹9,999
        </h3>

        <ul className="space-y-4 mb-10 text-left text-blue-100">

          <li>✔ 5 Page Website</li>
          <li>✔ Premium Design</li>
          <li>✔ Contact Form</li>
          <li>✔ SEO Friendly</li>
          <li>✔ WhatsApp & Call Integration</li>
          <li>✔ Google Maps Integration</li>

        </ul>

        <a
          href="#contact"
          className="
            block
            bg-white
            text-blue-600
            py-4
            rounded-2xl
            font-semibold
            hover:bg-gray-100
            transition-all duration-300
          "
        >
          Get Started
        </a>

      </div>

      {/* PREMIUM */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          p-10
          hover:border-blue-500/40
          hover:-translate-y-3
          hover:bg-white/10
          transition-all duration-500
          animate-[fadeInUp_1.2s_ease]
        "
      >

        <h2 className="text-2xl font-bold text-white mb-3">
          Premium
        </h2>

        <h3 className="text-5xl font-black text-blue-400 mb-8">
          ₹14,999+
        </h3>

        <ul className="text-gray-400 space-y-4 mb-10 text-left">

          <li>✔ Multiple Pages</li>
          <li>✔ Custom Design</li>
          <li>✔ Priority Support</li>
          <li>✔ SEO Optimization</li>
          <li>✔ Unlimited Sections</li>
          <li>✔ Google Business Optimization</li>

        </ul>

        <a
          href="#contact"
          className="
            block
            bg-white/10
            border border-white/10
            text-white
            py-4
            rounded-2xl
            font-semibold
            hover:bg-blue-600
            hover:border-blue-600
            transition-all duration-300
          "
        >
          Get Started
        </a>

      </div>

    </div>

  </div>

</section>

{/* TESTIMONIALS */}
<section  id="testimonial"
  className="relative scroll-mt-24 py-28 bg-[#050816] overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

    {/* TITLE */}
    <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-4">
      Testimonials
    </p>

    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
      What Clients Say
    </h1>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-8">
      Helping businesses build strong online presence through modern,
      responsive, and conversion-focused websites.
    </p>

    {/* TESTIMONIAL GRID */}
    <div className="
  grid
  grid-cols-1
  md:grid-cols-2
  gap-8
">

      {/* TESTIMONIAL 1 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          p-8
          backdrop-blur-md
          hover:border-blue-500/40
          hover:-translate-y-3
          hover:bg-white/10
          transition-all duration-500
          text-left
          animate-[fadeInUp_0.8s_ease]
        "
      >

        {/* STARS */}
        <div className="flex gap-1 text-yellow-400 text-xl mb-5">
          ★ ★ ★ ★ ★
        </div>

        {/* REVIEW */}
        <p className="text-gray-300 leading-8 text-lg mb-8">
          “The website looks modern and professional. Customers can now
          easily view our menu and contact us online. The overall experience
          was smooth and well designed.”
        </p>

        {/* PROFILE */}
        <div className="flex items-center gap-4">

          {/* IMAGE */}
          <img
            src="/images/man.avif"
            alt="Founder"
            className="w-14 h-14 rounded-full object-cover border border-white/10"
          />

          {/* INFO */}
          <div>

            <h3 className="text-white font-semibold text-lg">
              Akash
            </h3>

            <p className="text-blue-400 text-sm">
              Founder • Street Arabiya
            </p>

          </div>

        </div>

      </div>

      {/* TESTIMONIAL 2 */}
      <div
        className="
          group
          bg-white/5
          border border-white/10
          rounded-3xl
          p-8
          backdrop-blur-md
          hover:border-blue-500/40
          hover:-translate-y-3
          hover:bg-white/10
          transition-all duration-500
          text-left
          animate-[fadeInUp_1s_ease]
        "
      >

        {/* STARS */}
        <div className="flex gap-1 text-yellow-400 text-xl mb-5">
          ★ ★ ★ ★ ★
        </div>

        {/* REVIEW */}
        <p className="text-gray-300 leading-8 text-lg mb-8">
          “Loved the clean design and modern look of the website. It perfectly
          matches our cafe brand and gives customers a better first impression
          online.”
        </p>

        {/* PROFILE */}
        <div className="flex items-center gap-4">

          {/* IMAGE */}
          <img
            src="/images/lamb.jpg"
            alt="Founder"
            className="w-14 h-14 rounded-full object-cover border border-white/10"
          />

          {/* INFO */}
          <div>

            <h3 className="text-white font-semibold text-lg">
              Rahul
            </h3>

            <p className="text-blue-400 text-sm">
              Founder • Lambuz Juice Cafe
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      

      {/* CONTACT SECTION */}
<section
  id="contact"
  className="relative scroll-mt-24 py-28 bg-[#050816] overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="
  relative z-10
  max-w-7xl
  mx-auto
  px-6
  grid
  grid-cols-1
  md:grid-cols-2
  gap-16
  items-center
">

    {/* LEFT SIDE */}
    <div className="animate-[fadeInLeft_1s_ease]">

      {/* SMALL TITLE */}
      <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-4">
        Contact
      </p>

      {/* MAIN TITLE */}
      <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
        Let’s Build Something
        <span className="text-blue-400"> Amazing Together</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-lg leading-8 mb-10">
        Looking for a modern website for your business?
        I help brands create premium online experiences
        that attract customers and grow revenue.
      </p>

      {/* CONTACT INFO */}
      <div className="space-y-6">

        {/* EMAIL */}
        <div
          className="
            flex items-center gap-4
            bg-white/5
            border border-white/10
            rounded-2xl
            p-5
            hover:border-blue-500/40
            hover:bg-white/10
            transition-all duration-300
          "
        >

          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-blue-600/20
              text-blue-400
              flex items-center justify-center
              text-2xl
            "
          >
            ✉️
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Email
            </h3>

            <p className="text-gray-400">
              srinithinithiyanantham@gmail.com
            </p>
          </div>

        </div>

        {/* PHONE */}
        <div
          className="
            flex items-center gap-4
            bg-white/5
            border border-white/10
            rounded-2xl
            p-5
            hover:border-blue-500/40
            hover:bg-white/10
            transition-all duration-300
          "
        >

          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-blue-600/20
              text-blue-400
              flex items-center justify-center
              text-2xl
            "
          >
            📞
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 9715013933
            </p>
          </div>

        </div>

        {/* LOCATION */}
        <div
          className="
            flex items-center gap-4
            bg-white/5
            border border-white/10
            rounded-2xl
            p-5
            hover:border-blue-500/40
            hover:bg-white/10
            transition-all duration-300
          "
        >

          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-blue-600/20
              text-blue-400
              flex items-center justify-center
              text-2xl
            "
          >
            📍
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Location
            </h3>

            <p className="text-gray-400">
              Tamil Nadu, India
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE FORM */}
    <div className="animate-[fadeInRight_1s_ease]">

      <form
        onSubmit={handleSubmit}
        className="
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          p-8
          rounded-3xl
          shadow-2xl
          space-y-5
        "
      >

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Start Your Project
        </h1>

        <p className="text-gray-400 mb-6">
          Fill out the form and I’ll get back to you shortly.
        </p>

        {/* INPUTS */}
        <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            name="name"
            placeholder="Your Name"
            required
            className="
              bg-white/5
              border border-white/10
              text-white
              focus:ring-2 
              focus:ring-blue-500/30
              p-4
              rounded-2xl
              outline-none
              focus:border-blue-500
              transition-all duration-300
            "
          />
          {errors.name && (
      <p className="text-red-400 text-sm mt-2 ml-1">
        {errors.name}
      </p>
    )}
        </div>


        <div><input
            name="email"
            placeholder="Email Address"
            required
            className="
              bg-white/5
              border border-white/10
              text-white
              p-4
              rounded-2xl
              focus:ring-2 
              focus:ring-blue-500/30
              outline-none
              focus:border-blue-500
              transition-all duration-300
            "
            
          />
          {errors.email && (
  <p className="text-red-400 text-sm mt-1">
    {errors.email}
  </p>
)}</div>
          

        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <input
            name="phone"
            placeholder="Phone Number"
            required
            className="
              bg-white/5
              border border-white/10
              text-white
              p-4
              focus:ring-2 
              focus:ring-blue-500/30
              rounded-2xl
              outline-none
              focus:border-blue-500
              transition-all duration-300
            "
          />
          {errors.phone && (
  <p className="text-red-400 text-sm mt-1">
    {errors.phone}
  </p>
)}  
          </div>

          <div>
            <input
            name="business"
            placeholder="Business Name"
            required
            className="
              bg-white/5
              border border-white/10
              text-white
              p-4
              focus:ring-2 
              focus:ring-blue-500/30
              rounded-2xl
              outline-none
              focus:border-blue-500
              transition-all duration-300
            "
          />
          {errors.business && (
  <p className="text-red-400 text-sm mt-1">
    {errors.business}
  </p>
)}
          </div>
          

        </div>

        <div>
          {/* SELECT */}
        <select
          name="service"
          className="
            w-full
            bg-white/5
            border border-white/10
            text-white
            p-4
            rounded-2xl
            outline-none
            focus:border-blue-500
            transition-all duration-300
          "
        >
          <option className="bg-[#050816]">Landing Page</option>
          <option className="bg-[#050816]">Business Website</option>
          <option className="bg-[#050816]">Custom Website</option>
          <option className="bg-[#050816]">Google Business Profile</option>
        </select>
        </div>

        <div>
{/* TEXTAREA */}
        <textarea
          name="message"
          rows="5"
          placeholder="Tell me about your project..."
          className="
            w-full
            bg-white/5
            border border-white/10
            text-white
            p-4
            focus:ring-2 
            focus:ring-blue-500/30
            rounded-2xl
            outline-none
            focus:border-blue-500
            transition-all duration-300
          "
        ></textarea>
        {errors.message && (
  <p className="text-red-400 text-sm mt-1">
    {errors.message}
  </p>
)}
        </div>

        

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            hover:shadow-blue-500/30
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          Send Inquiry →
        </button>

      </form>

    </div>

  </div>

</section>


{/* FOOTER */}
<footer
  className="
    bg-[#040611]
    border-t border-white/10
    py-10
    text-center
  "
>

  <div className="max-w-7xl mx-auto px-6">

    {/* LOGO */}
    <div className="flex justify-center items-center gap-3 mb-4">

      <div
        className="
          w-12 h-12
          rounded-2xl
          bg-blue-600
          flex items-center justify-center
          text-white font-bold text-xl
        "
      >
        S
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-white">
        Srinithi
      </h1>

    </div>

    {/* TEXT */}
    <p className="text-gray-400 max-w-xl mx-auto leading-7 mb-6">
      Freelance web designer & developer helping businesses
      build modern websites that stand out and grow online.
    </p>

    {/* COPYRIGHT */}
    <p className="text-gray-500 text-sm">
      © 2026 Srinithi. All rights reserved.
    </p>

  </div>

</footer>


{/* SUCCESS POPUP */}
{showPopup && (
  <div
    className="
      fixed inset-0
      bg-black/60
      backdrop-blur-sm
      flex items-center justify-center
      z-50
    "
  >

    <div
      className="
        bg-[#0B1120]
        border border-white/10
        p-10
        rounded-3xl
        shadow-2xl
        text-center
        max-w-md w-full
        animate-[fadeInUp_0.5s_ease]
      "
    >

      {/* ICON */}
      <div
        className="
          w-20 h-20
          rounded-full
          bg-blue-600/20
          text-blue-400
          flex items-center justify-center
          text-4xl
          mx-auto mb-6
        "
      >
        ✓
      </div>

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-white mb-4">
        Inquiry Sent!
      </h2>

      {/* TEXT */}
      <p className="text-gray-400 leading-7 mb-8">
        Thanks for reaching out. I’ll get back to you shortly
        regarding your project.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => setShowPopup(false)}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8 py-3
          rounded-2xl
          font-semibold
          transition-all duration-300
        "
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