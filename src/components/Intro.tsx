"use client";
import { navItems, user } from "@/constants/constant";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Intro: React.FC = () => {
  return (
    <section
      id={navItems.home.path}
      className="h-screen flex text-center justify-center items-center flex-col md:flex-row md:text-start"
    >
      <div>
        <Image
          src={user.avatar}
          alt="dp"
          height={200}
          width={200}
          className="rounded-full shadow-2xl mt-10"
        />
      </div>
      <div className="mt-10 md:mt-0 md:ml-20 md:w-1/2">
        <h1 className="text-5xl md:text-7xl uppercase">{user.title}</h1>
        <h1 className="text-3xl md:text-4xl mt-5">
          Hi, I&#39;m{" "}
          <span className="text-red-600 md:text-5xl">{user.name}</span>
        </h1>
        <p
          className="mt-4 mb-4"
          dangerouslySetInnerHTML={{ __html: user.heading }}
        />
        <ScrollLink
          to={navItems.projects.path}
          className={
            "bg-teal-600 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0"
          }
          spy={true}
          smooth={true}
        >
          Projects <FaChevronDown className={"ml-2"} />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Intro;
