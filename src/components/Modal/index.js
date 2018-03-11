import React, {Component} from 'react'
import './style.css'

class Modal extends Component{

    handleClickSave = this.handleClickSave.bind(this);
    handleClickCancel = this.props.handleClickCancel || this.handleClickCancel.bind(this);

    state = {
        isOpen: this.props.isOpen
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.props.isOpen) 
            this.setState({isOpen : nextProps.isOpen});
    }

    render(){
        return (
            <div id="win" style = { (!this.state.isOpen)? {display:"none"}: {} } >
                <div className="overlay"></div>
                <div className="visible">
                    <h2>Adding todo</h2>
                    <input ref="titleField" type="text" id="titleText" className="modalItem titleModal" placeholder="Enter title" name="title" />
                    <textarea ref="descriptionField" type="text" id="descriptionText" className="modalItem descriptionModal" placeholder="Enter description" name="description" />
                    <div className ="controls">
                        <button className="btn" onClick={this.handleClickSave}>Save</button>
                        <button className="btn" onClick={this.handleClickCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
       
    }

    handleClickCancel () {
        this.setState({
            isOpen: false
        })
    }

    handleClickSave () {
        this.props.handleClickSave(this.refs.titleField.value, this.refs.descriptionField.value);
    }
}

export default Modal