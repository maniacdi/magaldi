import Head from 'next/head';
import Header from '../components/header/Header';

const Home: React.FC = () => {
  return (
    <div className=''>
      <Head>
        <title>Magaldi</title>
        <meta name='description' content='My own portfolio' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>

      <Header />

      <main className=''>
        <h1 className=''>Bienvenido a mi portafolio</h1>
      </main>

      <footer className=''></footer>
    </div>
  );
};

export default Home;
