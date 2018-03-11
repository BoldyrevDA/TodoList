import React, {Component} from 'react'
import TodoItem from '../TodoItem'
import Modal from '../Modal'
import './style.css'

class TodoList extends Component {
    
    allItems = this.props.items.slice();
    state = {
        items: this.allItems.slice(),
        modalIsOpen: false
    }
    
    render() {
        const itemsElements = this.state.items.map((item, index) => 
        <tr key={item.id} className = {index % 2 !== 0? 'odd_color': ''} >
            <TodoItem item = {item} clickDelete = {this.deleteItem.bind(this, item)} />
        </tr>
    )
    
        return [
            <button key="addTodo" className="btn right" onClick = {this.openModal}>Add todo</button>,

            <form key="filter" action="" method="get" className="search" onSubmit={this.filterList.bind(this)}>
                <input type="search" ref="searchField"  name="" placeholder="Search..." className="input"  />
                 <button type="submit" value="Submit" className="submit"><i className="fa fa-search"></i></button>
            </form>,

            <table key="itemsTable">
                <thead>
                    <tr className="table_header">
                        <th>Title</th>
                        <th>Description</th>
                        <th>Is done</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsElements}
                </tbody>
            </table>,

            <Modal key="modal" 
                isOpen = {this.state.modalIsOpen}
                handleClickSave = {this.addItem} 
                handleClickCancel = {() => this.setState({modalIsOpen: false})} 
                
            />
        ]
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    addItem = (title, description) => {
        let id = this.allItems[this.allItems.length-1].id + 1;
        let newTodo = {
            id: id,
            title: title,
            description: description,
            isDone: false
        };
        this.allItems.push(newTodo);
        this.setState({
            items: this.allItems.slice(),
            modalIsOpen: false
        });
    }

    deleteItem(item) {
        let idxItem = this.state.items.indexOf(item);
        this.state.items.splice(idxItem, 1);

        idxItem = this.allItems.indexOf(item);
        this.allItems.splice(idxItem, 1);

        this.setState({});
    };

    filterList(e){
        e.preventDefault();
        //let textFilter = this.state.filter;
        let textFilter = this.refs.searchField.value;
        if(textFilter.length > 3){
           let filteredList = this.allItems.filter(function(item){
               return item.title.toLowerCase().search(textFilter.toLowerCase())!== -1;
           })
           this.setState({items: filteredList});
        }
        else {
            this.setState({items: this.allItems.slice()});
        }
    }

    
}

export default TodoList