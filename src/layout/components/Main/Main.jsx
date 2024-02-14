import React from "react";
import style from "./Main.module.scss";

export const Main = ({ cards }) => {
  return (
    <main className={style.main}>
      <div className={style.container}>{cards}</div>
    </main>
  );
};