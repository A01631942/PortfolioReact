import React, {Fragment} from 'react';

const titlesSkills = (list) => {
   console.log(list); 
   return ( 
        <Fragment>
        <div className="col-4 col-md-2">
           <p><a href={list.route}>{list.title}</a></p>
        </div>
        </Fragment>
     );
}
 
export default titlesSkills;