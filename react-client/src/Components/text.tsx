import React, { useState, useEffect } from 'react';
import styles from "../styles/text.module.css";
import ReactPlayer from "react-player"; 
function Text() {
  return (
    <div id={styles.componentTestText}>
        <p>このサイトでは画像の編集を試せます。</p>
        <p>色を変更したり、fontを合成したり色々できるようにしています。</p>
        <p>試してみてね</p>
        <p id={styles.componentAtentionText}>注) 音が流れます</p>
        <ReactPlayer
        url={`${process.env.PUBLIC_URL}/piano_of_frogs.mp3`}
        playing={true}
        muted={false}
        />
    </div>
  );
}

export default Text;
