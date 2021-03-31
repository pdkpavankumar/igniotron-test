import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect, useState } from 'react';
import { listNoodles, addNoodles, getNoodleByBrand } from '../actionCreator/noodleAction';
import NoodleCard from './NoodleCard';

const NoodleList = (props) => {

  const [value, setValue] = useState('');
  const hanldeChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    props.items.length === 0 && Promise.all([
      fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json').then(res => res.json()),
      fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json').then(res => res.json())]
    ).then(([res, img]) => {
      res = res.map((item, index) => { return { ...item, id: index, img: img[Math.floor(Math.random() * img.length)] } });
      props.addNoodles(res);
    })
      .catch(err => { throw err });
  }, []);
  return (
    <>
      <div className="title">Noodle</div>
      <div className="searchbar">
        <input type="text" placeholder="Search any brand name..." onChange={hanldeChange}></input>
      </div>
      <div className="cards">
        {value ? props.items.filter((item) => {
          return item["Brand"].toLowerCase().includes(value.toLowerCase())
        }).map((item) => {
          return <NoodleCard item={item} id={item.id} key={item.id} />
        }) : props.items.map((item) => {
          return <NoodleCard item={item} id={item.id} key={item.id} />
        })}
      </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return { items: [...state.noodles] }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ listNoodles, addNoodles, getNoodleByBrand }, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoodleList);