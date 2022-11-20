import React from "react";
import { Routes, Route } from "react-router-dom";

import { PageHome } from "../../pages/PageHome";
import { PageCatallog } from "../../pages/PageCatallog";
import { PageForm } from "../../pages/PageForm";

import styles from "./styles.module.scss";

export function Main() {
  return (
    <main className={styles.main}>
      <div className="scroll-fix"></div>
      <Routes>
        <Route exact path="/" element={<PageHome />}></Route>
        <Route path="/catallog" element={<PageCatallog />}></Route>
        <Route path="/form" element={<PageForm />}></Route>
      </Routes>
      {/* <Route path='*' element={<PageError />}></Route> */}
    </main>
  );
}
