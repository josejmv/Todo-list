// bootstrap components
import { Button as BsButton, Spinner } from 'react-bootstrap'

// styles
import classes from 'styles/ui/buttons/styles.module.scss'

// types
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export const Button: FC<ButtonProps> = ({ loading, children, ...props }) => (
  <BsButton {...props} className={classes.button}>
    {loading ? <Spinner size='sm' animation='border' /> : children}
  </BsButton>
)
