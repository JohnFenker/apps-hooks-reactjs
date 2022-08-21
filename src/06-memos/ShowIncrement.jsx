
import React from 'react'

export const ShowIncrement = ({ increment }) => {
    console.log('me volvi a generar :(')
    return (
        <button
            className='btn btn-secondary'
            onClick={()=>{
                increment();
            }}
        >
            Incrementar
        </button>
  )
}
