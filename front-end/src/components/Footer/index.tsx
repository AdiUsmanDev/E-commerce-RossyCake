export const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-10 lg:px-28 py-10 flex flex-col lg:grid grid-cols-4 gap-5">
        <div className="flex flex-col">
          <span className="text-gray-800 dark:text-gray-300">Mendalo</span>
          <p className="text-gray-800 dark:text-gray-300">
            RossiCake@gmail.com
          </p>
          <span className="text-gray-800 dark:text-gray-300">08123456789</span>
        </div>

        <div className="navigation">
          <ul className="font-bold text-gray-800 dark:text-gray-300 flex lg:flex-col gap-5">
            <li>
              <a
                href="#"
                className="hover:text-green-500 dark:hover:text-green-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-500 dark:hover:text-green-400"
              >
                Owners
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-500 dark:hover:text-green-400"
              >
                Products
              </a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <span className="text-gray-800 dark:text-gray-300">Contact Us</span>
          <ul className="flex gap-2">
            <li className="bg-green-200 dark:bg-green-600 p-1 rounded-full hover:bg-green-400 dark:hover:bg-green-500 transition">
              <img src="/svg/wa.svg" className="w-8 h-auto" alt="wa-icon" />
            </li>
            <li className="bg-green-200 dark:bg-green-600 p-1 rounded-full hover:bg-green-400 dark:hover:bg-green-500 transition">
              <img src="/svg/ig.svg" className="w-8 h-auto" alt="ig-icon" />
            </li>
            <li className="bg-green-200 dark:bg-green-600 p-1 rounded-full hover:bg-green-400 dark:hover:bg-green-500 transition">
              <img src="/svg/fb.svg" className="w-8 h-auto" alt="fb-icon" />
            </li>
            <li className="bg-green-200 dark:bg-green-600 p-1 rounded-full hover:bg-green-400 dark:hover:bg-green-500 transition">
              <img src="/svg/tt.svg" className="w-8 h-auto" alt="tt-icon" />
            </li>
          </ul>
        </div>

        <div className="logo flex flex-col">
          <span className="text-gray-800 dark:text-gray-300">
            © 2025 Rossi Cake. All Right Reserved. Design by Team PPSI Projects
          </span>
          <div className="logo w-20 h-5 bg-green-400 dark:bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};
