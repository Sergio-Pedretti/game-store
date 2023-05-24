import React from 'react'
import Image from 'next/image'

export const Main = () => (
  <main
    data-testid="container"
    className="container h-screen flex flex-col justify-center items-center"
  >
    <figure className="flex flex-row">
      <Image
        className="pr-5"
        src="react-logo.svg"
        alt="imagem de átomo azul, logo do react"
        width={206}
        height={206}
      />
      <Image src="plus.svg" alt="sinal de adição" width={48} height={48} />
      <Image
        className="pl-5"
        src="next.svg"
        alt="imagem de escrita Next.js, logo do next"
        width={206}
        height={206}
      />
    </figure>
    <h1 className="text-lg font-bold text-gray-900 pt-5">React Avançado</h1>
    <h1 className="text-lg font-bold text-gray-900 pt-5">
      NextJS, ReactJS, Typescript, Tailwind e TDD
    </h1>
    <Image
      className="pt-5"
      src="hero-illustration.svg"
      alt="desenvolvedor de frente para suas telas com código"
      width={206}
      height={206}
    />
  </main>
)
