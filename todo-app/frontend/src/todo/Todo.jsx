import React from "react";
import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo(props){
    return(
        <div>
            <PageHeader name="Todo" small="Cadastro" />
            <TodoForm />
            <TodoList />
        </div>
    )
}