import React, { Fragment } from 'react'
import './Modal.css'
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
        return <div className='backdrop'></div>
    };
    const Modeloverlay = (props) => {
        return (
            <div className='modal'>
                <div className='content'>
                    {props.children}
                    </div>
            </div>
        );
    };

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(
        <Modeloverlay>
            {props.children}
        </Modeloverlay>)}
    </Fragment>
  )
}

export default Modal
