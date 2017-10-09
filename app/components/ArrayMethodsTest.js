import React from 'react';
import Result from './Result';

class ArrayMethodsTest extends React.Component {
    render() {
        const parameters = [1, 2, 3, 4, 5];
        return (
            <div className="row">
                <div className="col-lg-4">
                    <Result result={ArrayMethodsTest.processMap(parameters)}
                            function_name="map"
                            description="Метод map вызывает переданную функцию callback один раз для каждого элемента, в порядке их появления и конструирует новый массив из результатов её вызова"/>
                </div>
                <div className="col-lg-4">
                    <Result result={ArrayMethodsTest.processReduce(parameters)}
                            function_name="reduce"
                            description="Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению."/>
                </div>
                <div className="col-lg-4">
                    <Result function_name="some"
                            description="Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции."/>
                </div>
            </div>
        )
    }

    static processMap(params) {
        return params.map(function (currentValue, index, arr) {
            return (currentValue * index) + ",";
        });
    }

    static processReduce(params) {
        return params.reduce(function (accumulator, currentValue, index, arr) {
            return accumulator + (currentValue * index);
        });
    }
}
export default ArrayMethodsTest;