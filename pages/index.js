import React, { useState } from 'react'
import Head from 'next/head'
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';
import MovieList from '../components/MovieList';

const Home = () => {
  const [ count, setCount ] = useState(0)

  const incNumber = () => {
    setCount(count + 1)
  }

  const decNumber = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <Head>

        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      </Head>

      <Navbar />

      <div className="home-page">
        <div className="container">

          <button onClick={incNumber} className="btn btn-primary mr-2">[+] Inc number</button>
          <button onClick={decNumber} className="btn btn-danger">[-] Dec number</button>

          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                appName={"Bootstrap example"}
                testClick={() => { console.log('clicked') }}
                count={count}
              />
            </div>
            <div className="col-lg-9">
              <Carousel />
              <div className="row">
                <MovieList count={count} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
      .home-page {
        padding-top: 80px;
      }
      `}</style>
    </div>
  )
}

export default Home
