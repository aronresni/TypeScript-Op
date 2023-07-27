import React from 'react'
import 'animate.css';

const SobreMi = () => {
  return (
    <div>
      <div className='h-[70vh] bg-dark'>
        <div className=' p-5 flex flex-col items-center justify-center'>
          <h1 className='tittle text-4xl md:text-5xl sm:text-4xl font-bold animation  '>Aron Resnicoff, React Developer</h1>
          <div className='mt-5'>
            <h3 class="text-2xl sm:text-3xl text-muted animate__animated animate__backInLeft max-w-xl">I’m a frontend developer from Argentina. I enjoy building apps, solving problems and learning about web development.</h3>
          </div>
          <div className='mt-20'>
            <img className='animate__animated animate__backInLeft' src='https://creator-cdn.icons8.com/bvdzaj7EgptVNQko_f_xmSLxDVqykJoZCg4U0z27x-M/rs:fit:176:200/czM6Ly9pY29uczgt/b3VjaC1wcm9kLWFz/c2V0cy9wbmcvNjA4/LzMxZjhiZGNmLTYz/YTAtNGRhMS1hODcx/LWEwYzE1OGE3MjVj/Mi5wbmc.png' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default SobreMi
