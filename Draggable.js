import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Draggable extends Component{
    constructor(props){
        super(props);
    }

    dragStartHandler = (e) => {
        e.target.style.opacity = '0.4';
        this.dragSrcEl = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    dragEndHandler = (e) => {
        e.preventDefault();
        e.target.style.opacity = '1';

        document.querySelectorAll('.column').forEach(function (col) {
            col.classList.remove('over');
        });
    }

    dragEnterHandler = (e) => {
        e.target.classList.add('over');
    }

    dragLeaveHandler = (e) => {
        e.target.classList.remove('over');
    }

    dragOverHandler = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    dropHandler = (e) => {
        e.preventDefault();
        this.dragSrcEl.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData('text/html');
    }

    render(){
        return (
            <div className='draggable-container'>
                {
                    this.props.children.map(element => {
                        return React.cloneElement(element, {
                            draggable : "true",
                            onDragStart : this.dragStartHandler,
                            onDrop : this.dropHandler,
                            onDragOver : this.dragOverHandler,
                            onDragLeave : this.dragLeaveHandler,
                            onDragEnter : this.dragEnterHandler, 
                            onDragEnd : this.dragEndHandler,
                            onDragStart : this.dragStartHandler

                        })
                    })
                }
            </div>
        );
    }
}

export default hot(module)(Draggable);