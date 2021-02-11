import React, {Fragment} from 'react';

const titlesProjects = (list) => {
    return ( 
        <Fragment>
        <div className="col-4 col-md-2">
           <a href={list.route}>{list.title}</a> 
        </div>
        </Fragment>
     );
}
 
export default titlesProjects;