import React from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modelClosed}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? 0.85 : 0
            }}>
            {props.children}
        </div>
    </Aux>
    
)

export default modal;