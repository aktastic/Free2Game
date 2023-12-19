import { useEffect, useState } from "react";
import "./Footer.scss";
const Footer = () => {
  const [backToTopVisiable, setBackToTopVisiable] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setBackToTopVisiable(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <footer>
        <div>
          <p>
            <span>&#169; </span>
            2023 by
          </p>
          <div className="githubLinks">
            <a href="https://github.com/MoniqueHeusinger">Monique</a>
            <a href="https://github.com/aktastic">Arif</a>
            <a href="https://github.com/trisi99">Tristan</a>
            <a href="https://github.com/huangrunhong">Runhong</a>
          </div>
        </div>
        <a href="#top" className={backToTopVisiable ? "backToTop" : "hidden"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="93.9119"
            height="93.9119"
            viewBox="0 0 93.9119 93.9119"
          >
            <path d="M2,46.956c0,-24.8285 20.1275,-44.956 44.956,-44.956c24.8285,0 44.956,20.1275 44.956,44.956c0,24.8285 -20.1275,44.956 -44.956,44.956c-24.8285,0 -44.956,-20.1275 -44.956,-44.956z" />
            <path
              d="M27.3186,39.5934l19.6374,-19.6374l19.6374,19.6374"
              data-paper-data='{"rotation":44.99999999999999}'
            />
            <path d="M46.956,19.956l0,53" />
          </svg>
        </a>
      </footer>
    </>
  );
};

export default Footer;
