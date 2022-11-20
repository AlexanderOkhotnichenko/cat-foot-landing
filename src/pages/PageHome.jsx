import React from 'react';

import { Home } from '../Components/Home';
import { Products } from '../Components/Products';
import { Stages } from '../Components/Stages';
import { Example } from '../Components/Example';
import { PageMap } from "../Components/PageMap";
import { ScrollToTop } from "../Components/ScrollToTop";

export function PageHome() {
  return (
    <>
      <Home />
      <Products />
      <Stages />
      <Example />
      <PageMap />
      <ScrollToTop />
    </>
  )
}
