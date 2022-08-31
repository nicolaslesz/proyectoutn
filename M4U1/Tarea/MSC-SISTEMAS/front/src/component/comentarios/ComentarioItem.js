import React from 'react';

const ComentarioItem = (props) => {
    const { name, photo, body } = props;

    return (
        <div className='acomoda'>
            <div className='refe'>
                <h3>{name}</h3>
                <img src={photo} />
                <div dangerouslySetInnerHTML={{ __html: body }} />
                <hr />
            </div>
        </div>
    );
}

export default ComentarioItem;