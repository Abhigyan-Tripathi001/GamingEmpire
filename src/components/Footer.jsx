import logo from "../assets/logo.png";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full mt-20
                       bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-400">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-8">
        
        {/* Logo + Text */}
        <div className="md:max-w-96">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              className="h-12 transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_20px_#f87171]"
              src={logo}
              alt="logo"
            />
            <span className="text-2xl font-bold text-white hover:text-red-500 transition duration-300">
              GamingEmpire
            </span>
          </div>
          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Step into the world of{" "}
            <span className="font-semibold text-indigo-400">next-gen gaming</span>. <br />
            Play, compete, and level up with{" "}
            <span className="text-pink-400">stunning graphics</span>,{" "}
            <span className="text-purple-400">smooth performance</span>, and{" "}
            <span className="text-blue-400">non-stop action</span> — built for true gamers.
          </p>
        </div>

        {/* Links + Newsletter */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li><button onClick={() => handleScroll("home")} className="hover:text-red-500 transition">Home</button></li>
              <li><button onClick={() => handleScroll("about")} className="hover:text-red-500 transition">About us</button></li>
              <li><button onClick={() => handleScroll("contact")} className="hover:text-red-500 transition">Contact us</button></li>
              <li><button onClick={() => handleScroll("home")} className="hover:text-red-500 transition">Privacy policy</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
            <div className="text-sm space-y-2 text-gray-400">
              <p>Get the latest gaming news, updates, and resources delivered weekly.</p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 ring-red-600 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-red-600 hover:bg-red-700 w-24 h-9 text-white rounded cursor-pointer shadow-md shadow-red-500/30 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-500 pb-5">
        Copyright 2025 © abhigyantripathi42@gmail.com. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
