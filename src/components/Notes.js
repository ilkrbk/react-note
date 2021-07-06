import React from 'react'

export const Notes = ({notes, onRemove}) => (
    <ul className="list-group">
        {notes.map(note => (
            <li className="list-group-item note" key={note.id}>
                <div>
                    <h3>{note.title}</h3>
                    <h4>{note.date}</h4>
                </div>
                <button type="button" class="btn btn-outline-danger btm-sm" onClick={() => onRemove(note.id)}>&times;</button>
            </li>
        ))}
    </ul>
)