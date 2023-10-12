import { createRef, RefObject } from 'react';

const Html2Canvas: React.FC<any> =()=>{
    const rootElement: RefObject<HTMLDivElement>=createRef();
    
    return <div style={{height:"100vh"}}  ref={rootElement}>
        <div>
            test header content
        </div>
        <div style={{color:"green",backgroundColor:"yellow"}}>
            <span>test body content</span>
        </div>
        <div style={{color:"red"}}>
            <span >test body content</span>
        </div>
        <div style={{color:"green",backgroundColor:"pink"}}>
            <span>test body content</span>
        </div>
        <div style={{color:"green",backgroundColor:"transparent"}}>
            <span>test body content</span>
        </div>
    </div>
}
export default Html2Canvas;