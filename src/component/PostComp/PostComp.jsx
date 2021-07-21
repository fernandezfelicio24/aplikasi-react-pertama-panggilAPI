import React from 'react';


const PostComp = (props) => {

    

    return(
        <div className="post">
        <div className="img-thumb">
            <img src="https://picsum.photos/id/1/200/300" alt=""/>
        </div>
        <div className="content">
            <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className="button-update" onClick={() =>props.update(props.data)}>Update</button>
            <button className="remove" onClick={() =>props.remove(props.data.id)}>Remove</button>
    
        </div>
    </div>
    )
}

export default PostComp;
