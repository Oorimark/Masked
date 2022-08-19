import React from 'react'
import { CreateLinkPage } from './create'
import { JonLinkPage } from './join'

export const LinkPage = () => {
    return (
        <React.Fragment>
            <CreateLinkPage />
            <JonLinkPage />
        </React.Fragment>
    )
}