import React, { Component } from 'react';
import Input from './Input';

export default ({ name, initiative, hitpoint, id, onNameChange, onInitiativeChange, onHitpointChange, onEnter, onRemove}) => 
    <div className='card'>
        <Input label='Name' id={id} value={name} onChange={onNameChange}/>
        <Input label='Initiative' id={id} value={initiative} onChange={onInitiativeChange} onEnter={onEnter}/>
        <Input label='Hitpoint' id={id} value={hitpoint} onChange={onHitpointChange}/>
        <button onClick={e => onRemove(id)}>Remove</button>
    </div>;
