// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/2cffa014-0880-4777-b43e-a1118dad69f8/
import React, { FC } from 'react';

/**
 * Look into html-escaper at node_modules\html-escaper\README.md
 * or he at node_modules\he\README.md
 * and body-parser node_modules\body-parser\README.md
 * 
 * @returns 
 */
const BusinessBasicInfo: FC = () => {
    // html-entities example, from node_modules\html-entities\README.md    
    const Entities = require('html-entities').AllHtmlEntities;

    const entities = new Entities();

    console.log(entities.encode('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;∆
    console.log(entities.encodeNonUTF('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;&#8710;
    console.log(entities.encodeNonASCII('<>"&©®∆')); // <>"&©®&#8710;
    console.log(entities.decode('&lt;&gt;&quot;&amp;&copy;&reg;')); // <>"&©®

    return <h1>Hello</h1>;
};

export default BusinessBasicInfo;