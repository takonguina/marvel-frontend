const CharacterCard = ({ characters }) => {
  const { name } = characters;
  return <div className="character-card-container">{name}</div>;
};

export default CharacterCard;
