import { useHistory } from 'react-router-dom';
const NoodleCard = ({ item, id }) => {
  const history = useHistory();

  const hanldeClick = () => {
    history.push(`/item/${id}`);
  };

  return (
    <div className="card" onClick={hanldeClick}>
      <img src={item.img.Image} alt={item.Variety} className="card-image" />
      <p>Brand - {item.Brand}</p>
      <p>Variety - {item.Variety}</p>
      <p>Style - {item.Style}</p>
      <p>Country - {item.Country}</p>
      <p>Stars - {item.Stars}</p>
      <p>Top Ten - {item.["Top Ten"]}</p>
    </div>
  )
};

export default NoodleCard;