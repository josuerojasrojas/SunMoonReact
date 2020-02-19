import React, { useState } from "react";
import styles from "./App.module.css";
import classNames from "classnames";

const App = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  return (
    <div className={styles.App}>
      <div
        className={classNames(styles.boxContainer, {
          [styles.darkMode]: isDarkMode
        })}
        onClick={() => setisDarkMode(!isDarkMode)}
      >
        <div className={styles.circle}></div>
        <div className={styles.rec}></div>
      </div>
      <a
        className={styles.link}
        href="https://www.instagram.com/p/B5sfAARhp4t/?igshid=3bqv23pidux5"
      >
        credits
      </a>
    </div>
  );
};

export default App;
