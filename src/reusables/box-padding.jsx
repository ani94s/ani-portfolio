import React from "react";
import styles from "../style";

const BoxPadding = (children) => (
  <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
    <div className={`${styles.boxWidth}`}>{children}</div>
  </div>
);

export default BoxPadding;
