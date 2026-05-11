import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import messageAnimation from "../components/message.json";
import Github from "../assets/github";
import Gmail from "../assets/gmail";
import Markdown from "../assets/markdown";
import PDF from "../assets/pdf";

function Landing() {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const [eighth, setEighth] = useState(false);
  const [ninth, setNinth] = useState(false);
  const [tenth, setTenth] = useState(false);
  const [eleventh, setEleventh] = useState(false);
  const [twelvth, setTwelvth] = useState(false);

  useEffect(() => {
    setTimeout(() => setSecond(true), 15000);
    setTimeout(() => setThird(true), 30000);
    setTimeout(() => setForth(true), 45000);
    setTimeout(() => setFifth(true), 3000);
    setTimeout(() => setSixth(true), 15000);
    setTimeout(() => setSeventh(true), 27000);
    setTimeout(() => setEighth(true), 39000);
    setTimeout(() => setNinth(true), 5000);
    setTimeout(() => setTenth(true), 21000);
    setTimeout(() => setEleventh(true), 36000);
    setTimeout(() => setTwelvth(true), 51000);
  });

  return (
    <>
      <header className="relative flex justify-center items-center font-bold h-[90vh] mb-12 md:mb-24 border-b-slate-400 overflow-hidden w-full">
        <div className="bg-linear-to-r from-transparent via-slate-50 via-opacity-10 via-50% h-full w-full flex flex-col justify-center items-center z-10">
          <h1 className="text-7xl pt-3 mb-8 text-center">Markdown Generator</h1>
          <span className="mb-10 text-xl text-slate-600">
            Mark your work down more efficiently
          </span>
          <Link
            to="/convert"
            className="px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
        <div className="absolute go-up-1 animate-pulse">
          <Markdown />
        </div>
        {second && (
          <div className="absolute go-up-1 animate-pulse">
            <Github />
          </div>
        )}
        {third && (
          <div className="absolute go-up-1 animate-pulse">
            <Gmail />
          </div>
        )}
        {forth && (
          <div className="absolute go-up-1 animate-pulse">
            <PDF />
          </div>
        )}
        {fifth && (
          <div className="absolute go-up-2 animate-pulse">
            <PDF />
          </div>
        )}
        {sixth && (
          <div className="absolute go-up-2 animate-pulse">
            <Github />
          </div>
        )}
        {seventh && (
          <div className="absolute go-up-2 animate-pulse">
            <Markdown />
          </div>
        )}
        {eighth && (
          <div className="absolute go-up-2 animate-pulse">
            <Gmail />
          </div>
        )}
        {ninth && (
          <div className="absolute go-up-3 animate-pulse">
            <Gmail />
          </div>
        )}
        {tenth && (
          <div className="absolute go-up-3 animate-pulse">
            <PDF />
          </div>
        )}
        {eleventh && (
          <div className="absolute go-up-3 animate-pulse">
            <Github />
          </div>
        )}
        {twelvth && (
          <div className="absolute go-up-3 animate-pulse">
            <Markdown />
          </div>
        )}
      </header>

      <main className="flex flex-col gap-24 md:gap-64 py-16 md:py-32 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden w-full">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600">
              Formated Markdown On The Go
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Seamlessly transform your raw raw markdown into beautifully
              formatted text. Our intelligent editor provides real-time preview,
              ensuring your documentation, notes, and articles look exactly as
              you intend before you even finish typing.
            </p>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <aside className="w-full max-w-lg flex flex-row items-center justify-center gap-2 sm:gap-6 p-4 sm:p-12 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="animate-md-shrink w-36 h-52 sm:w-44 sm:h-60 border-2 border-slate-200 bg-white rounded-xl flex justify-center items-center shadow-sm z-10 relative shrink-0">
                <span className="text-2xl sm:text-4xl font-bold text-slate-400">
                  .md
                </span>
              </div>
              <div className="animate-arrow-move z-0 relative shrink-0 w-6 sm:w-8">
                <svg
                  className="w-full h-full text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <div className="animate-abc-grow w-36 h-52 sm:w-44 sm:h-60 border-2 border-slate-800 bg-slate-900 rounded-xl flex justify-center items-center shadow-lg z-10 relative shrink-0">
                <span className="text-2xl sm:text-4xl font-bold text-white font-serif">
                  Ab<i>c</i>
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-red-600 to-red-400">
              Share via Email
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Collaboration made easy. Once your Markdown is ready, send it
              directly to your colleagues or clients via email right from the
              editor. No need to switch between apps or download files just to
              share your work.
            </p>
          </div>
          <div className="flex-1 flex justify-center w-full px-4">
            <div className="w-full max-w-sm h-64 sm:h-76 flex items-center justify-center relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <Lottie
                animationData={messageAnimation}
                className="w-64 sm:w-76 h-64 sm:h-76 drop-shadow-md"
                loop={true}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-400">
              Export and Download
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Keep your files where you need them. Whether you want the raw
              Markdown or a beautifully formatted PDF document, our export
              options ensure you have the right format for every occasion.
            </p>
          </div>
          <div
            className="w-full md:flex-1 flex justify-center h-80 relative items-center shrink-0"
            style={{ perspective: "1000px" }}
          >
            <div
              className="w-full h-full absolute inset-0 flex justify-center items-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="w-44 h-64 bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 flex flex-col justify-center items-center gap-6 animate-card-swap absolute"
                style={{ animationDelay: "-3s" }}
              >
                <div className="scale-150 transform mb-2 text-slate-300 invert">
                  <Markdown />
                </div>
                <span className="text-3xl font-bold text-slate-300 font-sans">
                  .md
                </span>
              </div>

              <div
                className="w-44 h-64 bg-white rounded-3xl shadow-xl border border-slate-200 flex flex-col justify-center items-center gap-6 animate-card-swap absolute"
                style={{ animationDelay: "0s" }}
              >
                <div className="scale-150 transform mb-2 text-red-500">
                  <PDF />
                </div>
                <span className="text-3xl font-bold text-red-500 font-sans">
                  .pdf
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16 pb-8 md:pb-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-800 to-gray-600">
              Support for Markdown Flavors
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Write exactly how you're used to. We fully support standard
              Markdown as well as GitHub Flavored Markdown (GFM), including
              tables, task lists, and code blocks with syntax highlighting.
            </p>
          </div>
          <div className="flex-1 flex justify-center w-full px-4">
            <div className="p-12 sm:p-20 bg-gray-100 rounded-[3rem] shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm flex items-center justify-center">
              <div className="scale-125 sm:scale-150 transform flex items-center justify-center">
                <Github />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-950 text-slate-400 py-16 mt-16 md:mt-32 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-slate-200">
              Markdown Generator
            </h3>
            <p className="text-center md:text-left max-w-md text-lg">
              Start marking your work down more efficiently today. Stop worrying
              about formatting and keep your focus on exactly what you write.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-col items-center md:items-end gap-2">
              <span className="text-slate-300 font-semibold text-lg">
                Love this project?
              </span>
              <p className="text-sm text-slate-500 text-center md:text-right max-w-xs">
                We're open source! Help us make Markdown Generator even better
                by contributing to our repository.
              </p>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 -ml-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Contribute on GitHub</span>
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Markdown Generator. All rights
            reserved.
          </p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}

export default Landing;
