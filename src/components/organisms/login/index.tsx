// main tools
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

// bootstrap components
import { Button } from '@atoms/button'

// hooks
import { useApp } from 'hooks/app'

// prime components
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

// styles
import classes from 'styles/login/form.module.scss'

// types
import { ChangeType, SubmitType } from 'types'
import { FC } from 'react'

export const LoginForm: FC = () => {
  const { toast } = useApp()
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  /**
   * handle email changes
   */
  const handleEmailChanges = (ev: ChangeType) => setEmail(ev.target.value)

  /**
   * handle password changes
   */
  const handlePasswordChanges = (ev: ChangeType) => setPassword(ev.target.value)

  /**
   * handle submit signin
   */
  const handleSubmit = async (ev: SubmitType) => {
    ev.preventDefault()
    setLoading(true)
    const res = await signIn<any>('credentials', {
      email,
      password,
      redirect: false,
    })

    setLoading(false)
    if (res?.error)
      toast()?.show({
        summary: 'Error',
        severity: 'error',
        detail: res.error,
      })
    else push('/dashboard')
  }

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Inicio de sesión</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className='my-4'>
          <label className={classes.label}>Correo electrónico</label>
          <InputText
            required
            type='email'
            value={email}
            className={classes.input}
            onChange={handleEmailChanges}
            placeholder='correo@gmail.com'
          />
        </div>
        <div className='my-4'>
          <label className={classes.label}>Contraseña</label>
          <Password
            required
            toggleMask
            value={password}
            feedback={false}
            placeholder='**********'
            className={classes.password}
            inputClassName={classes.input}
            onChange={handlePasswordChanges}
          />
        </div>

        <Button loading={loading} className={classes.button} type='submit'>
          Iniciar sesión
        </Button>
      </form>
    </section>
  )
}
