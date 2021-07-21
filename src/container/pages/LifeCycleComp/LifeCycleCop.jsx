import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';
class LifeCycleCop extends Component{

    //Kita membuat lifecycle pertama yaitu construktor
    constructor (props){
        //kita meggunakan props dikarenakan class extend ke Component
        super(props)
        this.state = {
            count:1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount (){
        console.log('componentDidMount')
        // setTimeout(()=> {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps', nextProps);
        console.log('nexstate', nextState);
        console.log('this state', this.setState);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
         return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDiUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }


    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log('render')
        return(
            <Fragment>

            <p>Halaman LifeCycle</p>
            <hr/>
            <button className="btn" onClick={this.changeCount}>Component Button{this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleCop;