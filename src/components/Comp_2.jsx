import React from 'react';
import CustomHook from './CustomHook';
const Comp_2 = () => {
  
   const hookDemoFun=CustomHook(0,"comp_2");
  
    return (
        <div>
                <h1>component::1</h1>
                <a onClick={hookDemoFun} href>click</a>
        </div>
    );
}

export default Comp_2;
