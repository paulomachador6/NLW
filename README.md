

#### COMANDOS ####

# NLW SETUP

SERVIDOR👩‍💻

## COMANDOS

### SETUP SERVER

1 PASSO => npm init -y vai criar o package.json

2 PASSO => instalar dependencies npm install fastify

3 PASSO => instalar dependencies typescript npm install typescript -D

4 PASSO => npx tsc --init vai criar a config do typescript

5 PASSO => instalar dependencies npm i tsx -D vai permitir rodar arquivos node com typescript

6 PASSO => No arquivo package.json na linha do script acrescentar:
"scripts": {
    "dev": "tsx watch src/server.ts"
  },

7 PASSO => INSTALAR ORM PRISMA npm i -D prisma
           INSTALAR npm i @prisma/client
  Config SQLite npx prisma init --datasource-provider SQLite


8 PASSO => CRIAR versionamento do BD  npx prisma migrate dev
  Visualizar o BD npx prisma studio

9 PASSO => CONFIGURAR O CORS npm i @fastify/cors