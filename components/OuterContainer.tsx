'use client'


import { useGlobalContext } from '../app/Providers/GlobalProvider'

const OuterContainer = ({ children }: { children: React.ReactNode}) => {

    const { loading } = useGlobalContext()

  return (
    <>
    { !loading 
    ? (<div className = 'py-20 transition-colors text-pastel-brown-dark sm:px-6 md:px-20 2xl:px-32'>
        {children}
        </div>)
    : (<>
        {children}
    </>)
    }
    </>
    
  )
}

export default OuterContainer