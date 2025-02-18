import { navItems, user } from "@/constants/constant";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id={navItems.about.path}
      className="h-screen flex text-center justify-center items-center flex-col md:flex-row md:text-start"
    >
      <div className="mt-10 md:mt-0 md:ml-20 md:w-1/2">
        <h1 className="text-5xl md:text-7xl uppercase">About</h1>
        <h1 className="text-3xl md:text-4xl mt-5"> Get to know me!</h1>
        <p
          className="mt-4 mb-4 [&>p]:mt-3"
          dangerouslySetInnerHTML={{ __html: user.about }}
        />
      </div>
      <div className="md:w-1/2 md:ml-4 flex justify-center flex-col items-center text-center">
        <Image
          src={user.avatar}
          alt="dp"
          height={200}
          width={200}
          className="rounded-full shadow-2xl mt-10"
        />
        <div className="break-words w-3/4 mt-3">
          {user.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200 m-1 p-2 rounded-md inline-block text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
