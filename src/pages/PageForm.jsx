import React from 'react';

import { Form } from '../Components/Form';
import { PageMap } from "../Components/PageMap";
import { ScrollToTop } from '../Components/ScrollToTop';

export function PageForm() {
  return (
    <>
      <Form />
      <PageMap />
      <ScrollToTop />
    </>
  )
}
