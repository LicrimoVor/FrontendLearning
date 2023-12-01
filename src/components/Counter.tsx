import { useState } from "react";

import classes from './Counter.module.scss';

/** Счетчик */
export function Counter(){
  const [value, setValue] = useState<number>(0);
  
  return (
    <div className={classes.lol}>
      <h1>{value}</h1>
      <button onClick={()=> setValue(value+1)}>++i</button>
    </div>
  )
}