import React, {Component, Fragment} from 'react';

let i = 0;
class Student extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '一年级三班学生情况',
            students: [{id: 'No.1', name: '小张', age: 12}, {id: 'No.2', name: '小付', age: 12}, {id: 'No.3', name: '小李', age: 13}]
        };
        this.showInfo = this.showInfo.bind(this);
    }
    render () {
        console.log('render'+(i++));
        let {title, students} = this.state;
        return (<Fragment>
            <h2>{title} {this.props.grade}</h2>
            <ul>
                {students.map((item, index) => {
                    return (<li key={item.id+index} onClick={()=>this.showInfo(item.id)}>学号{item.id}. 姓名：{item.name} ---- 年龄：{item.age}</li>);
                })}
            </ul>
        </Fragment>);
    }
    showInfo (id) {
        this.setState(prevState=>{
            return {
                students: JSON.parse(JSON.stringify(prevState.students).replace(/No/, 'NO'))
            }
        }, ()=> {
            console.log('渲染完成后调用的函数');
        });
    }
    componentWillMount () { console.log('componentWillMount'); }
    componentDidMount () { console.log('componentDidMount'); }
    componentWillReceiveProps (nextProps, nextState) {console.log('componentWillReceiveProps', nextProps, nextState);}
    shouldComponentUpdate () { console.log('shouldComponentUpdate');  return true;}
    componentWillUpdate () { console.log('componentWillUpdate'); }
    componentDidUpdate () { console.log('componentDidUpdate'); }
}

export default Student;
