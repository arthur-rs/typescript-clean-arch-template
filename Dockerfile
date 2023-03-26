FROM node:lts-alpine

# Criar usuário com permissões limitadas
RUN addgroup -S appgroup && adduser -S app -G appgroup

# Definir diretório de trabalho e copiar arquivos para a imagem
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Gerar arquivos do Prisma
RUN npx prisma generate

# Buildar a aplicação
RUN npm run build:swc

# Mudar a propriedade dos arquivos para o usuário criado
RUN chown -R app:appgroup /usr/src/app
USER app

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD [ "npm", "start" ]