import { navItems, user } from "@/constants/constant";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <section
      id={navItems.home.path}
      className="h-screen flex text-center justify-center items-center flex-col md:flex-row md:text-start"
    >
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={user.avatar}
          alt="dp"
          height={200}
          width={200}
          className="rounded-full shadow-2xl mt-10"
        />
      </div>
      <div className="mt-10 md:mt-0 md:ml-20 md:width-1/2">
        <h1 className="text-5xl md:text-7xl uppercase">{user.title}</h1>
        <h1 className="text-3xl md:text-4xl mt-5">
          Hi, I'm <span className="text-red-600 md:text-5xl">{user.name}</span>
        </h1>
      </div>
    </section>
  );
};

export default Intro;
