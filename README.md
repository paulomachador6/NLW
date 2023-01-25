

#### COMANDOS ####

# NLW SETUP

SERVIDOR👩‍💻

## COMANDOS

### SETUP SERVER

1 PASSO => npm init -y vai criar o package.json

2 PASSO => instalar dependencies npm install fastify

3 PASSO => instalar dependencies typescript -> npm install typescript -D

4 PASSO => npx tsc --init *vai criar a config do typescript

5 PASSO => instalar dependencies -> npm i tsx -D *vai permitir rodar arquivos node com typescript

6 PASSO => No arquivo package.json na linha do script acrescentar:
"scripts": {
    "dev": "tsx watch src/server.ts"
  },

7 PASSO => INSTALAR ORM PRISMA -> npm i -D prisma
           INSTALAR            -> npm i @prisma/client
          Config SQLite        -> npx prisma init --datasource-provider SQLite


8 PASSO => CRIAR versionamento do BD ->  npx prisma migrate dev
                 Visualizar o BD     -> npx prisma studio

9 PASSO => CONFIGURAR O CORS -> npm i @fastify/cors

10 PASSO => CONFIGURAR PRISMA ERD -> npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
  incluir no arquivo schema.prisma

  generator erd {
  provider = "prisma-erd-generator"
}
   Comando para gerar o ERD.svg -> npx prisma generate

11 PASSO => TRABALHAR COM SEED PARA POPULAR DADOS NO BANCO => ACRESCENTAR NO package.json ao final do arquivo

  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }

  rodar o arquivo        -> npx prisma db seed

12 PASSO => INSTALAR ZOD -> npm i zod

13 PASSO => INSTALAR BIBLIOTECA -> npm i dayjs

1 Aula parada no 43:58 website
2 Aula parada no 01:01:01 website
3 Aula parada no 00:35:19 website

WEBSITE👩‍💻

## COMANDOS

### SETUP WEBSITE

1 PASSO => VITE TEMPLATE APLICAÇÃO FRONT-END -> npm create vite@latest

2 PASSO => ACESSAR A PASTA DO PROJETO -> npm install

3 PASSO => RODAR PROJETO -> npm run dev

4 PASSO => INSTALAÇÃO TAILWIND -> npm i tailwindcss postcss autoprefixer 
                                  npx tailwindcss init -p

        4.1 Criar src/styles/global.css

        4.2 Adicionar essas linhas dentro do global.css
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

        4.3 Em tailwind.config.cjs 
            adicionar "./src/**/*.tsx" dentro de content

        4.4 Adicionar import "./styles/global.css"; em App.tsx


  5 PASSO => TRABALHANDO COM ÍCONES BIBLIOTECA -> npm i phosphor-react

  6 PASSO => TRABALHAR COM DATAS USANDO A BIBLIOTECA -> npm i dayjs

  7 PASSO => TRABALHAR COM RADIX E SEUS COMPONENTES -> npm install @radix-ui/react-dialog MODAL
                                                       npm install @radix-ui/react-popover

  8 PASSO => TRABALHAR COM BIBLIOTECA CLSX -> npm i clsx

  9 PASSO => TRABALHAR COM RADIX E SEUS COMPONENTES -> npm install @radix-ui/react-checkbox

  10 PASSO => TRABALHAR COM A BIBLIOTECA AXIOS PARA COMUNICAÇÃO ENTRE O BACK E FRONT -> npm i axios


1 Aula parada no 00:58:03 website
2 Aula parada no 01:34:16 website
3 Aula parada no 01:25:32 website
4 Aula parada no 00:58:39 website