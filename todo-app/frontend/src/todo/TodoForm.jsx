import React, { Component } from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { addTodo, changeDescription, search, clear } from './todoActions'
import { bindActionCreators } from 'redux'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  
  keyHandler(e){
    const { clear, addTodo, search, description } = this.props
    
    if (e.key === 'Enter'){
       e.shiftKey ? search() : addTodo(description)
    } else if (e.key === 'Escape'){
       clear()
    }
  }

  componentWillMount(){
    this.props.search()
  }

  render(){
    const { clear, addTodo, search, description, changeDescription } = this.props

    return (
      <div role="form" className="todoform">
        <div className="row">
          <Grid cols='12 9 10'>
            <input 
              type="text" 
              id="description" 
              className="form-control"
              placeholder="Adicionar tarefa"
              value={description}
              onChange={changeDescription}
              onKeyUp={this.keyHandler}
            />
          </Grid>
            
          <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={() => addTodo(description)} />
            <IconButton style='info' icon='search' onClick={() => search()} />
            <IconButton style='default' icon='close' onClick={() => clear()} />
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    description: state.todo.description,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({clear, addTodo, changeDescription, search}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)