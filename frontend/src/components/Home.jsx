import React from 'react'
import Hero from '../home/Hero';
import Trending from '../home/Trending';
import Devolutional from '../home/Devolutional';
import Creator from '../home/Creator';

function Home() {
  return (
    <div>
      <div><Hero /></div>
      <div><Trending /></div>
      <div><Devolutional /></div>
      <div><Creator /></div>
    </div>
  )
}

export default Home