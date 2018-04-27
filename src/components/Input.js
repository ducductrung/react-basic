import React, { Component } from 'react';

export default ({
    id,
    label,
    value, 
    onChange,
    onEnter
}) =>
    <div>
        <label>{label}: <input type="text"
            value={value}
            onBlur={e => {
                    if (label === "Initiative") onEnter();
                }
            }
            onKeyPress={e => {
                    if (e.key === 'Enter' && label === "Initiative") onEnter();
                }
            }
            onChange={e => onChange(id, e)} /></label>
    </div>;
