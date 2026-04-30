import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="animal logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight dark:text-white bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent">
                QurbaniHut
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
               বাংলাদেশের সেরা কোরবানির পশুর অনলাইন মার্কেটপ্লেস। 
//             সহজে, নিরাপদে এবং বিশ্বাসের সাথে আপনার পছন্দের পশু কিনুন।
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/generate"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Generate
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start creating
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Generate your first AI image today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} QurbaniHt. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-16">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white">QurbaniHut</h2>
//           <p className="mt-4 text-sm">
//             বাংলাদেশের সেরা কোরবানির পশুর অনলাইন মার্কেটপ্লেস। 
//             সহজে, নিরাপদে এবং বিশ্বাসের সাথে আপনার পছন্দের পশু কিনুন।
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="/" className="hover:text-white">Home</Link></li>
//             <li><Link href="/animals" className="hover:text-white">All Animals</Link></li>
//             <li><Link href="/about" className="hover:text-white">About Us</Link></li>
//             <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="/category/cow" className="hover:text-white">Cow</Link></li>
//             <li><Link href="/category/goat" className="hover:text-white">Goat</Link></li>
//             <li><Link href="/category/sheep" className="hover:text-white">Sheep</Link></li>
//             <li><Link href="/category/camel" className="hover:text-white">Camel</Link></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
//           <p className="text-sm">📍 Dhaka, Bangladesh</p>
//           <p className="text-sm mt-2">📞 +880 1777-906923</p>
//           <p className="text-sm mt-2">✉️ mdferdouahmed31122003@gmail.com</p>

//           {/* Social Icons */}
//           <div className="flex space-x-4 mt-4">
//             <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition">
//               <FaFacebookF />
//             </Link>
//             <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition">
//               <FaTwitter />
//             </Link>
//             <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition">
//               <FaInstagram />
//             </Link>
//             <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition">
//               <FaYoutube />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-700 text-center py-4 text-sm">
//         © {new Date().getFullYear()} QurbaniHut. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;