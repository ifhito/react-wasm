import React, { useState, useEffect } from 'react';
import type * as WASM from "../../../wasm-build/wasm"
type Wasm = typeof WASM.resize_image;
function Webasm() {
  const [image,setImage] = useState(new Blob());
  const WASM = import("wasm");
  useEffect(() => {
    (async () => {
      const url = `${process.env.PUBLIC_URL}/logo192.png`;
      const resp = await fetch(url);
      const b = await resp.blob();
      setImage(b);
    })();
    WASM.then(async ({resize_image}) => {
      const url = `${process.env.PUBLIC_URL}/logo192.png`;
      const resp = await fetch(url);
      const b = await resp.blob();
      const blob = await resizeImageWasm(b, 7.0, 70, "png", resize_image);
      // const i = await test(1);
      // console.log(i);
      // setTest(i);
      console.log('test');
      setImage(blob);
    });
  },[]);
  
  return (
    <div>
      <img src={URL.createObjectURL(image)}/>
    </div>
  );
}

async function resizeImageWasm(file: Blob, width:number, height: number, format: string, wasm:Wasm): Promise<Blob>{
  console.log(`Original: ${file.size} Bytes`);
  const arr = new Uint8Array(await file.arrayBuffer());

  const result = wasm(arr, width, height, format);

  const blob = new Blob([result]);
  console.log(`Resized: ${blob.size} Bytes`);

  return blob;
}

const addFontImageWasm = async (file: Blob, scale_height: number, pixels_from_up: number, pixels_from_left: number, text:string, format:string, wasm:Wasm) => {
    
}
export default Webasm;
