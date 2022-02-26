import React from 'react';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.room.filter((x) => x._id !==roomId)
        };

        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});  

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                <button>onclick={(e) => deleteRoom(room._id)} Delete</button>
                </li>
            ))}
        </ul>
    );

    return (       
         <div>
             <h2>{house.name}</h2>
             {
                rooms({ rooms, houseId: house._id, deleteRoom})
             }
             <NewRoom addNewRoom={addNewRoom} />
       </div> 
    );
};
