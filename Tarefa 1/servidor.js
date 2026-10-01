const http = require('http');
const PORT = 3000;
const cards = [
  { name: "Rafa (O imigrante especial) ", type: "Criatura", attack: 5, defense: 6 },
  { name: "Gabriel (O amante do Araujo) ", type: "Criatura", attack: 1, defense: 9 },
  { name: "Arauja (A Princesa Sofia) ", type: "Criatura", attack: 6, defense: 9 },
  { name: "Francisco (O especial) ", type: "Criatura", attack: 5, defense: 5 },
  { name: "Dinis (O continente modelo em pessoa) ", type: "Criatura", attack: 9, defense: 9 },
];
 
 
 
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
 
 
    if (req.url === "/") {
   
    const numerodec = cards.length
    res.end(`<h1>Número de cartas: ${numerodec}</h1> `);
    return;}
 
 
 
    if (req.url === "/sobre") {
    res.end(' <h1> O meu nome é Rodrigo <h1> Turma: TGPSI24-T');
    return;
  }
 
  if (req.url === "/cartas") {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    res.write(`<h1><ul>${items}<ul><h1>`);
    res.end(`${cards.length}`)
    return;
  }
   if (req.url === "/agora") {
    const now = new Date().toLocaleString("pt-PT");
    res.end(`<h1>${now}</h1>`);
    return;
  }
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>erro 404</h1>`)
 
});
 
server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
 