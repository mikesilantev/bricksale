import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- ElkaBrick.ru' : 'ElkaBrick.ru'}</title>
        <description>LOL</description>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav>
            <Link
              href='/'
              className='text-lg font-bold'
            >
              ElkaBrick
            </Link>
            <Link
              href='/cart'
              className='text-lg font-bold'
            >
              Cart
            </Link>
            <Link
              href='/login'
              className='text-lg font-bold'
            >
              Login
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
