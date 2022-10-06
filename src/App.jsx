import { useState } from "react";
import "./App.css";
const data = [
  {
    src: "/images/image-tanya.jpg",
    quote:
      "“ I’ve been interested in coding for a while but never taken thejump, until now. I couldn’t recommend this course enough. I’m now inthe job of my dreams and so excited about the future. ”",
    user: "Tanya Sinclair",
    position: "UX Engineer",
  },
  {
    src: "/images/image-john.jpg",
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    user: "John Tarkpor",
    position: "Junior Front-end Developer",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index >= data.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index <= 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <main className="min-h-screen p-8 md:px-10 lg:px-24  bg-[url('/images/pattern-curve.svg')] bg-no-repeat bg-left-bottom   bg-white dark:bg-gray-600 dark:text-white">
      <div className="flex pb-28  flex-col md:flex-row-reverse gap-8 md:gap-0 justify-start md:justify-center md:items-center items-center ">
        <article className="relative md:-ml-24  w-full md:w-1/2  h-96 md:h-[500px] flex  justify-center bg-[url('/images/pattern-bg.svg')]  bg-top md:bg-center bg-no-repeat bg-contain  ">
          <div className="relative my-auto md:p-12   ">
            <img
              className="h-80 md:h-auto w-auto 
            object-cover
             rounded-md shadow-2xl"
              src={data[index].src}
              alt=""
            />
            <div className="absolute bottom-0 md:bottom-12 translate-y-1/2 left-1/2 md:left-1/3 -translate-x-1/2">
              <NavBtns prev={prev} setIndex={setIndex} next={next} />
            </div>
          </div>
        </article>
        <article className="  md:relative max-w-sm md:max-w-full md:z-10 py-12 md:w-2/3  space-y-4 text-DarkBlue text-center  bg-[url('/images/pattern-quotes.svg')] bg-top md:bg-[left_4rem_top_-2rem]  bg-no-repeat">
          <blockquote className="font-light tracking-wide md:text-start leading-8  text-[26px] lg:text-[32px] md:leading-10  ">
            {data[index].quote}
          </blockquote>
          <div className="text-center md:text-start md:flex gap-3">
            <h3 className="font-bold text-[18px] lg:text-xl ">
              {" "}
              {data[index].user}
            </h3>
            <h4 className="text-GrayishBlue text-[18px] lg:text-xl ">
              {data[index].position}
            </h4>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;

const NavBtns = ({ prev, next }) => {
  return (
    <div className="inline-flex gap-10 p-4 shadow-lg bg-white rounded-full">
      <button onClick={prev} className="group transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
          <path
            className="group-hover:stroke-black"
            fill="none"
            stroke="#8585AC"
            strokeWidth="3"
            d="M11 1L3 9l8 8"
          />
        </svg>
      </button>
      <button onClick={next} className="group transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
          <path
            className="group-hover:stroke-black"
            fill="none"
            stroke="#8585AC"
            strokeWidth="3"
            d="M2 1l8 8-8 8"
          />
        </svg>
      </button>
    </div>
  );
};
