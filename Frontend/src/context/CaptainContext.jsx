import { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({children})=> {

  const [captain, setCaptain] = useState(null);

  return (
    <CaptainDataContext value={{captain, setCaptain}}>
      {children}
    </CaptainDataContext>
  )
};

export default CaptainContext;