import React from 'react';
import { useGlobalContext } from './AppProvider';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  const { processing } = useGlobalContext();
  return processing ? <ClipLoader color={"#36D7B7"} size={50} /> : null;
};

export default Spinner;
