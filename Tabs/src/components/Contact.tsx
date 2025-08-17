import type { ReactNode } from "react";

type Link = {
  href: string;
  label: string;
  icon: ReactNode;
};

const Contact = () => {
  const links: Link[] = [];
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
      <div className="flex items-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
