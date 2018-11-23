import React from 'react'

import Header from '../../components/Header'
import Carousel from './subpage/Carousel'
import List from './subpage/List'
import Recommend from './subpage/Recommend'

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context) ;
        this.state = {
            now: Date.now()
        }
    }
    render() {
        return (
            <div>
                <Header title="hello页面"></Header>
                <p onClick={this.clickHandle.bind(this)}>hello world {this.state.now}</p>
                <Carousel/>
                <Recommend/>
                <List/>
                <hr/>
            </div>
        )
    }
    clickHandle() {
        this.setState({
            now: Date.now()
        })
    }
    componentDidMount() {
        console.log('渲染完成');
    }
    componentDidUpdate(prevProps, prevStatus) {
        // 触发更新完成
        console.log("触发更新");   
    }
    componentWillUnmount() {
        // 组件被销毁之前
    }
}

export default Hello
