const Footer = () => {


  const footerSections = [
    {
      title: "Shop and Learn",
      links: ["Properties", "Agents", "Blog", "Pricing", "Contact"],
    },
    {
      title: "Services",
      links: ["Buy a Home", "Sell a Home", "Mortgage"],
    },
    {
      title: "About Us",
      links: ["Our Story", "Careers", "Press", "Investors"],
    },
    {
      title: "Support",
      links: ["Help Center", "Terms of Service", "Privacy Policy", "Legal"],
    },
    {
      title: "Quick Links",
      links: ["Instagram", "Twitter", "Pinterest"],
    },
  ];

  return (
    <footer className="bg-[#f5f5f7]  text-[#6e6e73] py-[30px]">
      <div className="w-full border-t border-[#d2d2d7] my-4"></div>
      <div className="max-w-[1000px] mx-auto px-[20px]">
        <div className="footer-links flex flex-wrap justify-between mb-[15px]">
          {footerSections.map((section, index) => (
            <section key={index} className="flex-1 min-w-[150px] my-[8px]">
              <h3 className="text-[12px] font-semibold text-[#1d1d1f] mb-[8px]">
                {section.title}
              </h3>
              <ul className="list-none">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-[6px]">
                    <a
                      href="#"
                      className="text-[#6e6e73] no-underline hover:text-[#1d1d1f] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="footer-bottom border-t border-[#d2d2d7] pt-[8px] flex justify-between items-center flex-wrap">
          <p className="my-[3px]">&copy; <span id="year"></span> Vas United. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
