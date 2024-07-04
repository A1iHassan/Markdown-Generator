import "../style/landing.scss";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function Landing() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.8,
    delay: 500,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.8,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.7,
  });
  console.log(inView1, inView2, inView3);
  return (
    <div className="all">
      <header>
        <nav className="landing-nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <section className="first-lable">
          <h1>Markdown Generator</h1>
          <span>Markdown made simple</span>
          <Link to="/sheet">
            <span>Try it</span>
          </Link>
        </section>
      </header>
      <section
        className={`features ${inView1 ? "visible" : "none"}`}
        id="features"
        ref={ref1}
      >
        <h2>Features</h2>
        <div className="part">
          <svg
            fill="#000000"
            width={innerWidth < 800 ? "20px" : "12rem"}
            height={innerWidth < 800 ? "20px" : "12rem"}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z" />
          </svg>
          <div className="context">
            <h3>Convert Plain Textr To Markdown Easily</h3>
            <span>discription</span>
          </div>
        </div>

        <div className="part">
          <svg
            width={innerWidth < 800 ? "20px" : "12rem"}
            height={innerWidth < 800 ? "20px" : "12rem"}
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>edit_text_bar [#1372]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-379.000000, -800.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M327.2,654 L325.1,654 L325.1,646 L327.2,646 L327.2,644 L323,644 L323,656 L327.2,656 L327.2,654 Z M333.5,644 L333.5,646 L341.9,646 L341.9,654 L333.5,654 L333.5,656 L344,656 L344,644 L333.5,644 Z M331.4,658 L333.5,658 L333.5,660 L327.2,660 L327.2,658 L329.3,658 L329.3,642 L327.2,642 L327.2,640 L333.5,640 L333.5,642 L331.4,642 L331.4,658 Z"
                    id="edit_text_bar-[#1372]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="context">
            <h3>Rphrase Your Text</h3>
            <span>discription</span>
          </div>
        </div>

        <div className="part">
          <svg
            height={innerWidth < 800 ? "20px" : "12rem"}
            width={innerWidth < 800 ? "20px" : "12rem"}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 26 26"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M20.25,19.547V23c0,0.552-0.449,1-1,1h-14c-0.551,0-1-0.448-1-1V3c0-0.552,0.449-1,1-1h14
		c0.551,0,1,0.448,1,1v3.453l2,1.733V3c0-1.656-1.344-3-3-3h-14c-1.656,0-3,1.344-3,3v20c0,1.656,1.344,3,3,3h14
		c1.656,0,3-1.344,3-3v-5.187L20.25,19.547z"
              />
              <g>
                <path
                  d="M16.25,19.5c0,0-1,0.281-1-1c0-0.29,0-1.257,0-2.5h-6c-0.552,0-1-0.449-1-1v-4c0-0.551,0.448-1,1-1
			h6c0-1.196,0-2.155,0-2.531c0-1.344,1-0.969,1-0.969l7.5,6.5L16.25,19.5z"
                />
              </g>
            </g>
          </svg>
          <div className="context">
            <h3>Personal Reach Integration</h3>
            <span>discription</span>
          </div>
        </div>
      </section>
      <section
        className={`about ${inView2 ? "visible" : "none"}`}
        id="about"
        ref={ref2}
      >
        <h2>About The Project</h2>
        <span>
          - Empowering writers to create clean, web-ready content with markdown
        </span>
        <p>
          For years, I, along with a team of passionate learners at Holberton
          School, have been on a mission to conquer the chaos of information
          overload. We all shared the struggle of managing countless text files
          and the frustration of finding specific details. A few months ago, we
          discovered markdown, and it felt like a lightbulb moment. The clean
          syntax and ability to seamlessly transform it into web-ready content
          was exactly what we needed. However, the initial learning curve proved
          to be hurdle. Despite a wealth of resources, none offered a truely
          user-friendly way to create markdown documents. Fueled by this shared
          frustration, a collective spark lightened- we wanted to build a tool
          that would bridge the gap and make markdown accessible to everyone.
          This markdown generator is the culmination of those early strugles and
          our desire to empower others to experience the joy of clean,
          organized, content. This project serves as the testament to the
          collaborative skills we've honed at Holberton School, and we're
          thrilled to see how it can benefit writers everywhere.
        </p>
      </section>
      <footer
        className={`contact ${inView3 ? "visible" : "none"}`}
        id="contact"
        ref={ref3}
      >
        <h2>team members</h2>
        <div>
          <span className="name">Ali Gamereldin</span>
          <span className="role">
            Backend developer{" "}
            <a className="github" href="https://github.com/saiAl">
              <svg
                width={innerWidth < 800 ? "1rem" : "1.5rem"}
                height={innerWidth < 800 ? "1rem" : "1.5rem"}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>github</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="icons_Q2" data-name="icons Q2">
                    <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
                  </g>
                </g>
              </svg>
            </a>
          </span>
        </div>
        <div>
          <span className="name">Ali Hassan</span>
          <span className="role">
            Full stack developer{" "}
            <a className="github" href="https://github.com/A1iHassan">
              <svg
                width={innerWidth < 800 ? "1rem" : "1.5rem"}
                height={innerWidth < 800 ? "1rem" : "1.5rem"}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>github</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="icons_Q2" data-name="icons Q2">
                    <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
                  </g>
                </g>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ali-haj-ali-165110212/">
              <svg
                fill="#000000"
                width={innerWidth < 800 ? "1rem" : "1.5rem"}
                height={innerWidth < 800 ? "1rem" : "1.5rem"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
              </svg>
            </a>
            <a href="https://x.com/a1i_0000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                width={innerWidth < 800 ? "1rem" : "1.5rem"}
                height={innerWidth < 800 ? "1rem" : "1.5rem"}
                viewBox="0 0 24 24"
                xmlSpace="preserve"
              >
                <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
// https://github.com/saiAl
// https://github.com/A1iHassan
// https://www.linkedin.com/in/ali-haj-ali-165110212/
