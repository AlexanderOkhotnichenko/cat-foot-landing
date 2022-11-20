import React from 'react';

import { Catallog } from '../Components/Catallog';
import { AdditionalProduct } from '../Components/AdditionalProduct';
import { PageMap } from "../Components/PageMap";
import { ScrollToTop } from "../Components/ScrollToTop";

export function PageCatallog() {
  return (
    <>
      <Catallog />
      <AdditionalProduct />
      <PageMap />
      <ScrollToTop />
    </>
  )
}
