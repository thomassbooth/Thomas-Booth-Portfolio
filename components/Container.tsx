'use client'

import { useGlobalContext } from "../app/Providers/GlobalProvider";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  const { loading } = useGlobalContext()

  return (
    <>
    { !loading 
      ? (<div className = 'max-w-[2520px] mt-10 leading-7 mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
          {children}
        </div>)
      : <>
          {children}
        </>
    }
    </>
  )
  
}

export default Container