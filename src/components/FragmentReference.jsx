import React from 'react';

const _path = "/content/dam/headless-canvas/fragment-reference/cf--2";

const editorProps = {
    "data-aue-resource": "urn:aemconnection:" + _path + "/jcr:content/data/master",
    "data-aue-type": "reference",
    "data-aue-filter": "cf"
};

const FragmentReference = () => {

   return (
       <div style={{padding: "10px"}} {...editorProps}>
           <button>Click here to see Fragment Reference fields</button>
       </div>
   )
};

export default FragmentReference;
