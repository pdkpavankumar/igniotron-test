import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNoodleById } from '../actionCreator/noodleAction';
import { useParams } from 'react-router-dom';
const NoodleDetail = (props) => {
  const item = props.selectedItem.length === 1 && props.selectedItem[0];
  const { id } = useParams();
  useEffect(() => {
    props.getNoodleById(parseInt(id));
  }, []);

  return (
    <div>
      {props.selectedItem.length === 1 ?
        <>
          <div className="title">Noodle</div>
          <div className="sub-title">Detail</div>
          <div className="detail">
            <img src={item.img?.Image} alt={item.Variety} className="card-image-detail" />
            <div className="details">
              <p>Brand - {item.Brand}</p>
              <p>Variety - {item.Variety}</p>
              <p>Style - {item.Style}</p>
              <p>Country - {item.Country}</p>
              <p>Stars - {item.Stars}</p>
              <p>Top Ten - {item.["Top Ten"]}</p>
            </div>
          </div>
        </>
        :
        'Loading...'}

    </div>
  )
};
const mapStateToProps = (state) => {
  return { selectedItem: [...state.noodles] }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ getNoodleById }, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoodleDetail);