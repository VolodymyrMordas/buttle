const React = require('react');
const ReactDOM  = require('react-dom');
const Bootstrap = require('react-bootstrap');

require('./index.css');

class App extends React.Component {
    render (){
        return (
            <div>
                <div class="greating">Hello world, {this.props.name} {this.props.familyname}</div>
                <ArrayMethodsTest />
            </div>
        );
    }
}

class Result extends React.Component {
    render () {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">array:{this.props.function_name}</div>
                <div class="panel-body">
                    <div class="hint">
                        {this.props.description}
                    </div>
                    <div><b>result:</b> {this.props.result}</div>
                </div>
            </div>

        );
    }
}

class ArrayMethodsTest extends React.Component {
    render () {
        const parameters = [1,2,3,4,5];
        return (
            <div>
                <Result result={ArrayMethodsTest.processMap(parameters)}
                        function_name="map"
                        description="Метод map вызывает переданную функцию callback один раз для каждого элемента, в порядке их появления и конструирует новый массив из результатов её вызова" />

                <Result result={ArrayMethodsTest.processReduce(parameters)}
                        function_name="reduce"
                        description="Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению."/>

                <Result function_name="some"
                        description="Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции." />

                <Result function_name="every"
                        description="Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции." />

                <Result function_name="foreach"
                        description="Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве." />

                <Result function_name="filter"
                        description="Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции." />

                <Result function_name="reverse"
                        description="Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым." />

                <Result function_name="slice"
                        description="Метод slice() возвращает новый массив, содержащий копию части исходного массива." />
            </div>
        )
    }

    static processMap (params) {
        return params.map(function (currentValue, index, arr) {
            return (currentValue * index) + ",";
        });
    }

    static processReduce (params) {
        return params.reduce(function (accumulator, currentValue, index, arr) {
            return accumulator + (currentValue * index);
        });
    }
}

ReactDOM.render(
    <App name="Vitaly" familyname="Telychko" />,
    document.getElementById("app")
);