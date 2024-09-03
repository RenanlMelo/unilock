"use client";
import { useEffect, useState } from "react";
import styles from "./toTop.module.scss";
import { usePathname } from "next/navigation";

export const ToTop = () => {
  const currentPath = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {visible && (
          <span
            onClick={(e) => scrollToTop()}
            className={`${styles.goTop} ${
              currentPath === "/" || currentPath === "/contato" ? "hidden" : ""
            }`}
          >
            <svg
              width="126"
              height="162"
              viewBox="0 0 126 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.5 153C54.5 157.694 58.3056 161.5 63 161.5C67.6944 161.5 71.5 157.694 71.5 153H54.5ZM69.0104 2.98959C65.691 -0.329864 60.309 -0.329864 56.9896 2.98959L2.89592 57.0833C-0.423533 60.4027 -0.423533 65.7846 2.89592 69.1041C6.21538 72.4235 11.5973 72.4235 14.9167 69.1041L63 21.0208L111.083 69.1041C114.403 72.4235 119.785 72.4235 123.104 69.1041C126.424 65.7846 126.424 60.4027 123.104 57.0833L69.0104 2.98959ZM71.5 153L71.5 9H54.5L54.5 153H71.5Z"
                fill="white"
              />
            </svg>
          </span>
        )}
      </div>
    </>
  );
};
