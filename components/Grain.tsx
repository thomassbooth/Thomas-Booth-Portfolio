'use client'

import { useGlobalContext } from "@/app/Providers/GlobalProvider"

const Grain = () => {

  const { loading } = useGlobalContext()

  return !loading && (
    <div className = 'noiseOverlay w-screen'/>
  )
}

export default Grain