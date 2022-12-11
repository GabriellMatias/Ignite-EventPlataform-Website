import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react'

export function Player() {
  return (
    <div className="flex-1">
      <div className="bg-black flex jutify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <main className="p-8 max-w-[1100px] mx-auto ">
        <section className=" flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/GabriellMatias.png"
                alt="Avatar Image"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Gabriel Matias
                </strong>
                <span className="text-gray-200 text-sm block">
                  Trainne at AGU
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Discord Comunity
            </a>
            <a
              href="/"
              className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Challenger Access
            </a>
          </div>
        </section>

        <section className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex
             items-strech gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Complementar Material</strong>
              <p className="text-sm text-gray-200 mt-2">
                Access supplemental material to accelerate your development
              </p>
            </div>
            <div className="h-full p-6 items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex
             items-strech gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} alt="Logo Img" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Excllive Wallpapers</strong>
              <p className="text-sm text-gray-200 mt-2">
                Download exclusive Ignite Lab wallpapers and customize your
                machine
              </p>
            </div>
            <div className="h-full p-6 items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </section>
      </main>
    </div>
  )
}
