// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).

import { useState } from "react";
import Card from "./Card.jsx";


const cards = [
  { name: " Rafa (O imigrante especial) ", type: "Criatura", attack: 5, defense: 6 },
  { name: " Gabriel (O amante do Araujo) ", type: "Feiticeiro", attack: 1, defense: 9 },
  { name: " Arauja (A Princesa Sofia) ", type: "Feiticeiro", attack: 6, defense: 9 },
  { name: " Francisco (O especial) ", type: "Feiticeiro", attack: 5, defense: 5 },
  { name: " Dinis (O continente modelo em pessoa) ", type: "Criatura", attack: 9, defense: 9 },
];

function App() {
  const [filter, setFilter] = useState("todas");
  const [search, setSearch] = useState("");
  const [lucky, setLucky] = useState(null);

  const visible = cards.filter(
    (card) =>
      (filter === "todas" || card.type === filter) &&
      card.name.toLowerCase().includes(search.toLowerCase())
  );

  function pickLucky() {
  const index = Math.floor(Math.random() * cards.length);
  setLucky(cards[index]);
}

  return (
    <main>
      <h1>A minha coleção</h1>

      <p>
        Tenho {cards.length} cartas ({visible.length} à vista)
      </p>

      <div>
        <button onClick={() => setFilter("todas")}>Todas</button>
        <button onClick={() => setFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setFilter("Feiticeiro")}>Só feitiços</button>
      </div>

      <p>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar pelo nome..."
        />
      </p>

      <button onClick={pickLucky}>Carta à sorte</button>
      {lucky && (
        <p>
          Saiu-te: <strong>{lucky.name}</strong> ({lucky.type}) – ataque{" "}
          {lucky.attack}, defesa {lucky.defense}
        </p>
      )}

      <ul>
        {visible.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default App;