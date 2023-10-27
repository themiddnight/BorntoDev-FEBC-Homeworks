import React from 'react'

type CardProps = {
    title?: string
    children: React.ReactNode
    foot?: string
}

export const Card = ({ title, children, foot }: CardProps): React.ReactElement => {
    const header = (
        <div className='card-header'>
            <h1>{title}</h1>
        </div>
    )
    const body = (
        <div className='card-body'>
            {children}
        </div>
    )
    const footer = (
        <div className='card-footer'>
            <small>{foot}</small>
        </div>
    )

    return (
        <div className='card'>
            {title ? header : null}
            {body}
            {foot ? footer : null}
        </div>
    )
}