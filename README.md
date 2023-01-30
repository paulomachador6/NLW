

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
5 Aula parada no 00:48:38 website

MOBILE👩‍💻

## COMANDOS

### SETUP MOBILE

1 PASSO => UTILIZAR O EXPO PARA CRIAR O PROJETO -> npx create-expo-app mobile --template

2 PASSO => UTILIZAR AS SEGUINTES FONTES -> npx expo install expo-font @expo-google-fonts/inter

3 PASSO => INSTLAR NATIVEWIND npm i nativewind  
                              npm i tailwindcss --save-dev
                              npx tailwindcss init
            configurar o arquivo tailwind.config.js

              /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}

              após acrescentar no babel.config, 
                  plugins: ['nativewind/babel'],



4 PASSO => DENTRO DE SRC CRIAR UMA PASTA @TYPES E UM ARQUIVO app.d.ts
                    CONTEÚDO DO ARQUIVO
                              ///<reference types="nativewind/types" />
            INSTALAR EXTENSÃO TAILWIND CSS INTELLISENSE

5 PASSO => UTILIZAR A BIBLIOTECA PARA TRABALHAR COM SVG 
                      -> npx expo install react-native-svg
            BIBLIOTECA PARA TRABALHAR COM SVG COMO COMPONENTE
                      -> npm i react-native-svg-transformer --save-dev


6 PASSO => CRIAR UM ARQUIVO NA PASTA RAIZ CHAMADO metro.config.js
              CONTEÚDO DO ARQUIVO ->
              const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();

7 PASSO => TRABALHANDO COM SVG DENTRO DA PASTA @types criar o arquivo svg.d.ts
                      ACRESCENTAR O CONTEÚDO 

  declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

8 PASSO => INSTALAR DAYJS -> npm install dayjs
          CRIAR UMA PASTA LIB DENTRO DE SRC ARQUIVO dayjs.ts
          CONTEÚDO DO ARQUIVO: 

            import dayjs from 'dayjs';
            import 'days/locale/pt-br';

            dayjs.locale('pt-br');

9 PASSO => CRIAR DENTRO DE SRC UMA PASTA UTILS, e o arquivo  generate-range-between-dates.ts
            CONTEÚDO DO ARQUIVO: 

            import dayjs from 'dayjs'

            export function generateRangeDatesFromYearStart() {
              const startDate = dayjs().startOf('year')
              const endDate = new Date()

              let dateRange = []
              let compareDate = startDate

              while (compareDate.isBefore(endDate)) {
                dateRange.push(compareDate.toDate())
                compareDate = compareDate.add(1, 'day')
              }

              return dateRange
            }  

10 PASSO => TRABALHANDO COM NAVEGAÇÃO -> npm install @react-navigation/native
      -> npx expo install react-native-screens react-native-safe-area-context
      -> npm i @react-navigation/native-stack

11 PASSO => CRIAR UMA PASTA DENTRO DE SRC CHAMADA routes com um arquivo app.routes.tsx e um arquivo index.ts

12 PASSO => DECLARAR ROTAS ATRAVÉS DE DEFINIÇÃO, CRIAR DENTRO @TYPES UM ARQUIVO CHAMADO navigation.d.ts

13 PASSO => INSTALAR O AXIOS -> npm i axios
            DENTRO DE LIB CRIAR UM ARQUIVO CHAMADO axios.ts

14 PASSO => INSTALAR O CLSX PARA TRABALHAR COM CLASSE npm i --save clsx

15 PASSO =>

teste