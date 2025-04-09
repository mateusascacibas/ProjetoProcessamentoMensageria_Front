# 📦 Processamento de Pedidos - Frontend Angular

Este projeto é o **frontend** para o sistema de Processamento de Pedidos, desenvolvido em **Angular 17** com integração via **OAuth2**, **TailwindCSS** e preparado para comunicação com backend via token JWT.

---

## 🚀 Tecnologias Utilizadas

- [x] Angular 17
- [x] Standalone Components
- [x] TailwindCSS
- [x] RxJS
- [x] JWT Interceptor
- [x] HttpClientModule
- [x] FormsModule (ngModel)

---

## 📸 Telas

- Tela de Login (com clientId e clientSecret)
- Tela de Pedidos:
  - Visualização dos pedidos
  - Criação de novos pedidos com múltiplos itens
  - Logout

---

## 🔐 Autenticação

A autenticação utiliza o fluxo **Client Credentials (OAuth2)**. O token é armazenado temporariamente e injetado automaticamente nas requisições por um `TokenInterceptor`.

---

## 📦 Instalação

```bash
npm install
```

### TailwindCSS
Certifique-se de que o projeto tenha os arquivos:

- `tailwind.config.js`
- `postcss.config.js`

Caso não tenha:
```bash
npx tailwindcss init -p
```

E adicione ao `tailwind.config.js`:
```js
content: [
  "./src/**/*.{html,ts}"
]
```

---

## 🧪 Executar em Desenvolvimento

```bash
npm run start
# ou
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🐳 Docker

Você pode rodar este frontend em um container Docker com o seguinte `Dockerfile`:

```Dockerfile
# Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 🛠️ Build & Run
```bash
docker build -t pedidos-angular-front .
docker run -p 4200:80 pedidos-angular-front
```

---

## ✅ Funcionalidades

- [x] Autenticação com token JWT
- [x] Interceptor automático
- [x] Visualização e criação de pedidos
- [x] Atualização automática após criar
- [x] Logout funcional
- [x] Estilo com TailwindCSS

---

## 📂 Estrutura Principal

```bash
src/
├── app/
│   ├── auth/             # Login + AuthService
│   ├── pedidos/          # Tela e serviço de pedidos
│   ├── shared/           # Models e Interceptors
├── assets/
├── main.ts
```

---

## 📢 Autor

Feito com 💙 por **Mateus**

---

Se esse projeto te ajudou, dê uma ⭐ no repositório!
