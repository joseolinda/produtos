# Tutorial Github Page

## Preparação

1. No seu projeto criado com vite, edite o arquivo `vite.config.js` e adicione a seguinte configuração:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build folder to docs
  base: './',
  build: {
    outDir: 'docs'
  },
})
```

2. No seu arquivo `package.json`, adicione o seguinte script:

```json
"scripts": {
  "build": "vite build"
}
```
4. Execute o comando `npm run build` para gerar a pasta `docs` com os arquivos de produção.
5. Faça o commit e sinconize o projeto com o Github.

## Deploy

1. Abrar o repositório no Github.
2. Clique na aba `Settings`.
3. Role a página até a seção `Pages`. Fica no menu lateral esquerdo.
4. Em `Source`, selecione a branch `main` e a pasta `docs`.

## Acesso

Após a publicação, o projeto estará disponível no endereço `https://seu-usuario.github.io/nome-do-repositorio`.