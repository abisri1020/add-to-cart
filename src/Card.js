import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import './Card.css';

import { Context } from './Context';

function Crd(props) {
  // var key = props.key;
  const [value, setValue] = useState(4);
  const [btnNm, setBtnName] = useState(props.view);

  const getValuesFromProvider = useContext(Context);
  var action = getValuesFromProvider.handleButtonFromProvider;

  function handleButton(action, unique_Key, e) {
    console.log(e, 'Checking Unique Key');

    if (action != 0) {
      if (e.target.textContent === 'Add to Cart') {
        e.target.textContent = 'Remove from Cart';
        getValuesFromProvider.handleIncrementFromProvider();
      } else {
        e.target.textContent = 'Add to Cart';
        getValuesFromProvider.handleDecrementFromProvider();
      }
    }

    if (action === 1) {
      action = 2;
    } else if (action === 2) {
      action = 1;
    }
    // console.log(action, 'Check Action');
    getValuesFromProvider.handleButtonFromProvider(action);
  }
  // console.log(props.action, 'checking my props funtionality');
  return (
    <>
      <div className="card">
        <div>
          {props.sale == true ? <span className="sale">Sale</span> : <></>}

          <div>
            <img
              className="image"
              src="https://productoftheyearusa.com/wp-content/uploads/2016/03/McN_POY_20158281.jpg"
            />
          </div>
          <div className="content">
            <h3 className="alignment">{props.name}</h3>
            {props.star == true ? (
              <span className="alignment">
                <Rating name="read-only" value={5} readOnly />
              </span>
            ) : (
              <></>
            )}

            <h5 className="alignment">
              <span
                className="old_Cost"
                style={{ textDecorationLine: 'line-through' }}
              >
                {props.cost1}
              </span>{' '}
              &nbsp;
              {props.cost2}
            </h5>
            <Button
              className="alignment"
              onClick={(e) => {
                if (props.action != 0) {
                  handleButton(props.action, props.unique_Key, e); ////here is the issue
                }
              }}
              variant="outlined"
            >
              {props.view}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crd;
