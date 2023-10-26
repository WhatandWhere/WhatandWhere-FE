import React from 'react';

const EventTags = ({tags = []}) => {
    return (
        <div className="event-tags">
            {tags.map(tag => (
                <span key={tag} className="event-tag">{tag}</span>
            ))}
        </div>
    );
};

export default EventTags;
