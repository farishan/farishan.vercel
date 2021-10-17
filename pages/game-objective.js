const objectives = [
  'Survive to the end',
  'Cure the disease',
  'Get the most victory points',
  'Run your opponent out of cards = Last person standing',
  'Win the most points (victory point-driven game)',
  'Capture/destroy',
  'Territorial control',
  'Collection',
  'Solve',
  'Chase/race/escape',
  'Spatial alignment',
  'Build',
  'Negation of another goal'
];

export default function GameObjective() {
  return (
    <div className="container p-8">
      <p>
        The objective of any good game must be clear, concise, intuitive, and
        memorable
        (https://brandonthegamedev.com/10-elements-of-good-game-design/)
      </p>
      <div>
        <p>Objective examples:</p>
        {objectives.map((objective) => (
          <p key={objective}>{objective}</p>
        ))}
      </div>
    </div>
  );
}
