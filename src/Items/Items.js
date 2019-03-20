import React from 'react';
import './Items.css';

const Items = (props) =>{

      const itemList = props.todos.length ? (
            props.todos.map(item => {
                  return(
                        <li className="list-group-item" key={item.id}>                              
                              {item.itemContent} 
                              <button className="delete float-right" onClick={() => {props.removeItem(item.id)}}>
                                    <i className="fas fa-minus-circle"></i>
                              </button>
                        </li>
                  )
            })
      ) : (
            <li className="list-group-item empty">No todo item.<span role="img" aria-label="baby-chick">🐤</span> </li>
      );

      return(
            <ul className="list-group list-group-flush">                  
                  {itemList}
            </ul>
      );
}

export default Items;