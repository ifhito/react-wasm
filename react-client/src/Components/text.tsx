import React, { useState, useEffect } from 'react';
import styles from "../styles/text.module.css";
function Text() {
  return (
    <div id={styles.componentTestText}>
        <p>このサイトでは画像の編集を試せます。</p>
        <p>色を変更したり、fontを合成したり色々できるようにしています。</p>
        <p>試してみてね</p>
    </div>
  );
}

export default Text;
