import React from 'react';
import css from '../Button/Button.module.css';

export const LoadMore =({onClick}) =>{
    return(
      <div className={css.button_container}>
      <button className = {css.Button} type="button" onClick={onClick}>
        Load more
      </button> 
      </div>
    );
};

