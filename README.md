# e-Teaching API

## Requisitos

NodeJS >= 10.x instalado e npm >= 6.x

```bash
node -v
# v12.18.0

npm -v
# 6.14.4
```

Ter a CLI do AdonisJS instalada

```bash
npm i -g @adonisjs/cli
```

Ter o PM2 instalado

```bash
npm install pm2 -g
```

Antes de iniciar o servidor, é necessário ter as variáveis de ambiente configuradas. Para isso, utilize um arquivo `.env` dentro do projeto. Você pode criar um fazendo uma cópia do arquivo de exemplo existente:

```bash
# copia o arquivo de exemplo para um novo arquivo chamado .env
cp .env.example .env
```

Após isso, ajuste os dados conforme necessário

## Execução


### Modo de Desenvolvimento

```bash
# iniciar o servidor em dev
npm run dev
```

### Modo de Produção

```bash
# iniciar o processo
npm run start
# encerrar o processo
npm run stop
```

## Rotas da API

Para ter acesso a todas as rotas, utilize o arquivo `Insomnia_API.json` existente no projeto, abrindo-o no Insomnia.

| Link para baixar o Insomnia: https://insomnia.rest/download/

Após a instalação, faça a importação do arquivo dentro da aplicação.

TODO: citar variáveis de ambiente
