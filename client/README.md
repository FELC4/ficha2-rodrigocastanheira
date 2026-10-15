## Como correr a app React

cd client
npm install
npm run dev

Depois abre http://localhost:5173 no browser.

## View Source: Express vs React

Na porta 3000, o View Source mostra o HTML completo, com as
cartas já lá dentro, o HTML foi construído no servidor. Na porta
5173, o View Source mostra só um `<div id="root"></div>` vazio e um script:
o HTML das cartas foi construído no browser, pelo JavaScript do React. Sei
porque o View Source mostra o que o servidor enviou, e no React as cartas só
aparecem depois de o script correr.

## Network tab: Express vs React

No site Express, cada vez que filtro ou mudo de página o browser faz um novo
request e recebe um HTML completo do servidor. No React, filtrar não faz
nenhum request: os dados já estão no browser e o `useState` guarda o filtro.
A diferença é que o Express reconstrói a página no servidor a cada pedido, e
o React só redesenha no browser o que mudou.