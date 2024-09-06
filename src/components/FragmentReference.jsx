import React from 'react';
import folderIcon from "../images/folder-open-outline.svg";
import infoIcon from "../images/info.svg";
import plusIcon from "../images/plus.svg";
import editIcon from "../images/edit.svg";
import useGraphQL from "../api/useGraphQL";
import Error from "./base/Error";
import Loading from "./base/Loading";

const _path = "/content/dam/wknd-shared/en/fragment-reference";

const editorProps = {
    "data-aue-resource": "urn:aemconnection:" + _path + "/jcr:content/data/master",
    "data-aue-type": "reference",
    "data-aue-filter": "cf"
};

const FragmentReference = () => {

    const persistentQuery = 'wknd-shared/articles-all';

    //Use a custom React Hook to execute the GraphQL query
    const {data, errorMessage} = useGraphQL(persistentQuery);

    //If there is an error with the GraphQL query
    if (errorMessage) return <Error errorMessage={errorMessage}/>;

    //If data is null then return a loading state...
    if (!data) return <Loading/>;

   return <div style={{ maxWidth: "1280px" , margin: "0 auto" }} {...editorProps}>
       <h2>Fragment Reference Test Page</h2>
       <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "10px 0 10px 0" }}>
           <label>Fragment Reference</label>
           <div style={{ display: "flex", gap: "5px" }}>
               <input style={{ width: "300px", height: "25px" }} placeholder="My cool placeholder"/>
               <img width="1.5%" src={folderIcon} alt="Folder"/>
               <img width="1%" src={infoIcon} alt="Info"/>
           </div>
           <div style={{ display: "flex" }}>
               <div style={{ display: "flex" }}>
                   <img width="4%" src={editIcon} alt="Edit"/>
                   <button>Edit Content Fragment</button>
               </div>
               <div style={{ display: "flex" }}>
                   <img width="4%" src={plusIcon} alt="Plus"/>
                   <button>New Content Fragment</button>
               </div>
           </div>
       </div>
   </div>
};

export default FragmentReference;
