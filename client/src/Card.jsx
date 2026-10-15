export default function Card({ card }) {
  return (
    <li>
        {card.attack >= 6 && <span className="strong">fortissimo</span>}
        {card.name} ({card.type}) – ataque {card.attack}
    </li>
  );
}