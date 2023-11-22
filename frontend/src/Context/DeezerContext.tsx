import { createContext, useContext, useState, useEffect } from 'react'
import { DeezerServices } from '../Services/Deezer/DeezerServices'
import { Root } from '../Services/Deezer/DeezerTypes'

interface IDeezerProviderProps {
  children: React.ReactNode
}

interface IDeezerContextProps {
  data?: Root
}

export const DeezerContext = createContext({} as IDeezerContextProps)

export const DeezerProvider = ({ children }: IDeezerProviderProps) => {

  const [data, setData] = useState<Root>()

  const get = async () => {
    const response = await DeezerServices.get()
    setData(response)
  }

  useEffect(() => {
    get()
  },[])

  return (
    <DeezerContext.Provider value={{
      data,
    }}>
      {children}
    </DeezerContext.Provider>
  )
}

export const useDeezer = () => useContext(DeezerContext)