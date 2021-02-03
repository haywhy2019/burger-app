import React from 'react'
import Aux from "../hoc/Aux"
import classes from "./Layout.module.css"

export default function Layout(props) {
    return (
        <Aux>
        <div>  Toolbar,sideDrawer, Backdrop </div>
        <main className={classes.content}>
        {props.children}
        </main>
        </Aux>
    )
}
