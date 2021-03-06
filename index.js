import React from 'react'
import ReactDOM from 'react-dom'
import { Form }  from 'agave-react-ui';
import Schema from './schemes/Schema'
import './resources/styles/Main.scss';

const Example = React.createClass({
    handleSubmit(Result){
        Result.Form.validateForm();
        if(Result.Form.formIsValid()){
           alert('Форма заполнена верно');
        }
    },
    render() {
        return(
            <div>
                <div className="special_margin"></div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">Список всех элементов</div>
                        <div className="panel-body">
                            <Form schema={Schema} onSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Example/>,
    document.getElementById('app')
);