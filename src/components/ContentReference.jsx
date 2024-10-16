import React from 'react';

const _path = "/content/dam/headless-canvas/content-reference/content-reference-cf--1";

const editorProps = {
    "data-aue-resource": "urn:aemconnection:" + _path + "/jcr:content/data/master",
    "data-aue-type": "reference",
    "data-aue-filter": "cf"
};

const ContentReference = () => {

   return (
       <div style={{padding: "10px"}} {...editorProps}>
           <button>Click here to see Content Reference fields</button>
       </div>
   )
};

export default ContentReference;
