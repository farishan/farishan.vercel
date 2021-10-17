const mechanicCategories = [
  'Turns',
  'Action points',
  'Auction or bidding',
  'Cards',
  'Capture/eliminate',
  'Catch-up',
  'Dice',
  'Movement',
  'Risk and reward',
  'Role-playing',
  'Tile-laying',
  'Worker placement',
  'Game modes',
  'Victory conditions'
];

const mechanicElements = [
  {
    id: 'Quantity',
    description: 'Mechanics that can be represented as a number',
    examples: [
      'Resource: Health, mana, energy, rage',
      'Currency: Gold, zeny, bells',
      'Abstract: Time'
    ]
  },

  {
    id: 'Spatial',
    description: 'Mechanics that affect space',
    examples: [
      'World: Position and rotation of objects',
      'Tangible: Collision, characters, props',
      'Intangible: Inventory, storage'
    ]
  },

  {
    id: 'State',
    description: 'Mechanics that apply additional rules',
    examples: [
      'Player: Grounded, airborne, swimming, alive, dead',
      'Game: Victory, lobby, loading',
      'Object: On, off, open, closed'
    ]
  },

  {
    id: 'Action',
    description: 'Mechanics that drive change',
    examples: [
      'Resource: Health regen, shooting ammo',
      'World: Running, jumping, teleporting',
      'Object: Unlock door, open chest'
    ]
  }
];

const example = `Mario turns big (state, spatial) when he eats a mushroom (action). When Mario is big (state, spatial), if he takes damage (quantity), he turns small (state, spatial), and when Mario is small (state, spatial) and he takes damage (quantity), he dies (state).`;

export default function GameMechanic() {
  return (
    <>
      <div className="container p-8">
        <h2 className="font-bold mb-4 text-2xl">Game Mechanic Elements:</h2>
        {mechanicElements.map((element) => (
          <div key={element.id} className="mb-4">
            <p className="font-bold">{element.id}</p>
            <p>{element.description}</p>
            <p>Examples:</p>
            <ul>
              {element.examples.map((example) => (
                <li key={example}>&bull; {example}</li>
              ))}
            </ul>
          </div>
        ))}

        <p>Example: {example}</p>
      </div>
    </>
  );
}
