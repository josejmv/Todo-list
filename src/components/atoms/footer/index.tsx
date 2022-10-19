// main tools
import Image from 'next/image'

// prime components
import { Divider } from 'primereact/divider'

// styles
import classes from 'styles/atoms/footer.module.scss'

// types
import { FC } from 'react'

export const Footer: FC = () => (
  <footer className={classes.footer}>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://josejmv.vercel.app'
    >
      <span>Made by JoseJMV</span>
    </a>
    <Divider className={classes.divider} layout='vertical' />
    <a
      target='_blank'
      rel='noopener noreferrer'
      href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    >
      Powered by
      <span className={classes.logo}>
        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      </span>
    </a>
  </footer>
)
