// main tools
import Head from 'next/head'

// bootstrap components
import { Container, Row, Col } from 'react-bootstrap'

// components
import { Footer } from '@atoms/footer'

// styles
import classes from 'styles/login/page.module.scss'

// types
import { NextPage } from 'next'
import { LoginForm } from '@organisms/login'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Todo list</title>
    </Head>

    <Container className={classes.container}>
      <Row className={classes.content}>
        <Col xs={11} md={5}>
          <LoginForm />
        </Col>
      </Row>
    </Container>

    <Footer />
  </>
)

export default Home
