import { createRef, RefObject } from 'react';
import html2canvas from 'html2canvas';

const Html2Canvas: React.FC<any> =()=>{
    const rootElement: RefObject<HTMLDivElement>=createRef();
    
    return <div style={{height:"100vh",backgroundColor:"rgba(255,0,0,0.5)"}}  ref={rootElement} >
        <div>
            test header content
        </div>
        <div style={{color:"rgba(255,0,0,0)",backgroundColor:"yellow"}}>
            <span>test body content</span>
        </div>
        <div style={{color:"red"}}>
            <span >test body content</span>
        </div>
        <div style={{color:"green",backgroundColor:"pink"}}>
            <span>test body content</span>
        </div>
        <div   style={{color:"green",backgroundColor:"transparent"}}>
            <span>test body content</span>
        </div>
        <div>
            <button onClick={()=>{
                if(rootElement.current==null)return;
                html2canvas(rootElement.current,{
                    logging: true,
                    useCORS: true,
                }).then((canvas)=>{
                    document.body.appendChild(canvas);
                    console.log(canvas.getContext("2d")?.getImageData(0,0,canvas.width, canvas.height));
                    console.log(canvas.toDataURL().split("data:image/png;base64,")[1]);
                })
            }}>click</button>
        </div>
    </div>
}
export default Html2Canvas;