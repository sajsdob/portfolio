import React, { Component } from 'react';
import SimpleStorage from "react-simple-storage";
import Header from './Header.js';
import Todo from './Todo.js';
import Done from './Done.js';
import './Todo.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 900 });



class Todoapp extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      userinput: '',
      done: [],
      chandedIndex: null,
      editInProgress: false,
      editedItem: ''
    }
    this.escFunction = this.escFunction.bind(this);
  }

  //METHODS


closeModal = (e) => {
  this.setState({editInProgress: false})
}

changinginput = (input) => {
    this.setState({
      userinput: input
    })
  };

  escFunction(event){
    if(event.keyCode === 27) {
      this.setState({editInProgress: false})
    }
  }

componentDidMount () {
  document.addEventListener("keydown", this.escFunction);
}

  addtolist = (input) => {
    if (this.state.userinput === '') {
      alert('empty input')
    }
    else {
      var newitems = this.state.items;
      newitems.push(input);
      this.setState({
        items: newitems,
        userinput: ''
      })
    }
  }

  delete = (indexp) => {
    var newarray = this.state.items.filter((item, index) => index !== indexp);
    this.setState({
      items: newarray
    })
  }

  deletedone = (indexp) => {
    var newarray = this.state.done.filter((item, index) => index !== indexp);
    this.setState({
      done: newarray
    });
  }


  addToDone = (e, indexp) => {
    var donelist = this.state.done;
    donelist.push(e)
    this.setState({
      done: donelist
    });
    if (this.state.items.length === 1) {
    };
    var newarray = this.state.items.filter((item, index) => index !== indexp);
    this.setState({
      items: newarray
    })
  }

  handleKeyPress = (event, ) => {
    if (event.key === 'Enter') {
      this.addtolist(this.state.userinput)
    }
  }

  setChangedIndex = (index) => {
    this.setState({
      chandedIndex: index,
      editInProgress: true,
    });
    var currentValue = this.state.items[index]
    this.setState({
      editedItem: currentValue
    })
    
  }

  saveEditedTask = (e) => {
    e.preventDefault();
    let editedItems = this.state.items;
    editedItems[this.state.chandedIndex] = this.state.editedItem;
    this.setState({
      editInProgress: false,
      items: editedItems
    })
  }


  render() {
    return (
      <div className='todo-app'>
        <SimpleStorage parent={this} />
        {this.state.editInProgress ?
          <div onClick={(e)=>this.closeModal(e)} className='edit-container'>
            <form onClick={(e)=>e.stopPropagation()} className='edit-form' onSubmit={(e)=>this.saveEditedTask(e)}>
                            <label>
                                EDIT TASK:
                            </label>
                            <textarea value={this.state.editedItem} className='edit-change' type='text' onChange={(e)=>this.setState({editedItem: e.target.value})}/>
                            <input className='edit-submit' type="submit" value="SAVE" />
                        </form>
          </div> : ''}
        <Header handleKeyPress={this.handleKeyPress}
          addtolist={this.addtolist}
          changinginput={this.changinginput}
          userinput={this.state.userinput} />
        <Todo
          setChangedIndex={this.setChangedIndex}
          items={this.state.items}
          deleted={this.delete}
          addToDone={this.addToDone} />
        <Done deletedone={this.deletedone}
          done={this.state.done} />
      </div>
    )
  }
}

export default Todoapp