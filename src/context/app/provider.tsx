// main tools
import { useRef } from 'react'

// prime components
import { Toast } from 'primereact/toast'

// context
import { AppContext } from './context'

// types
import { FC } from 'react'

type AppContextProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const toast = useRef<Toast>(null)
  const context = { toast: () => toast.current as Toast }

  return (
    <>
      <AppContext.Provider value={context}>
        <Toast ref={toast} position='top-right' />
        {children}
      </AppContext.Provider>
    </>
  )
}
