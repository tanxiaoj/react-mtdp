import React from 'react'

import '../../static/css/common.less'

class Hello extends React.Component {
    render() {
        var m = 100;
        var s = {fontSize: '28px',color: 'red'};
        var arr = [1,2,3,5]
        return (
            <div>
                <p className="title">123 world1</p>
                {
                    m == 100? 10 : 101
                }
                {/* {注释} */}
                <p style={s} onClick={this.clickHandler.bind(this)}>321 world1</p>
                <p>456 world1</p>
                <ul>
                    {
                        arr.map(function(item, index){
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    clickHandler(e) {
        e.preventDefault(); // --
        console.log(this)
        console.log(Date.now())
    }
}

export default Hello
