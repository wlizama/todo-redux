import React, { PropTypes } from 'react'

const Link = ({ active, children, onclick }) => {
    if (active)
        return <span>{children}</span>

    return (
        <a
            href='#'
            onclick={ e => {
                e.preventDefault()
                onclick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onclick: PropTypes.func.isRequired
}

export default Link
