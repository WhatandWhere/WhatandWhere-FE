import React from 'react';

const EventItem = ({ event }) => {
    return (
        <div className="event-item">
            <img src={event.image} alt={event.name} />
            <h3 className="event-name">{event.name}</h3>
            <p className="event-description">{event.description}</p>
            <button className="apply-button">Apply</button>
        </div>
    );
};

const EventList = () => {
    const events = [
        {
            id: 1,
            name: 'Event 1',
            description: 'Description for Event 1',
            image: '../imgs/testEvent.jpg',
        },
        {
            id: 2,
            name: 'Event 2',
            description: 'Description for Event 2',
            image: '../imgs/testEvent.jpg',
        },
        {
            id: 3,
            name: 'Event 3',
            description: 'Description for Event 3',
            image: '../imgs/testEvent.jpg',
        },

    ];

    return (
        <div className="event-list">
            {events.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
