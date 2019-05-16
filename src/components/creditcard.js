import React, { Component } from 'react';
import './creditcard.css'
import img2 from './images/pus.png'
import img3 from './images/CreditCard.png1.png'
class Creditcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            number: '',
            month: '',
            year: '',
        }
    }
    //Cardholder
    nameChange(n) {
        let X= /^[A-Z a-z]+$/;
        if (n.target.value.match(X)){
           this.setState({
            name: n.target.value
        });  
        }else{alert ('Not a character')} 
       
    }
    //Number
    numberChange(c) {
        if (isNaN(c.target.value)){alert  ('Not a number')} 
        else{
            this.setState({
            number: c.target.value
        });
        }
        
    }
    //Expiration
    monthChange(m) {
        if (isNaN(m.target.value)){alert  ('Not a number')}
        else{
            this.setState({
            month: m.target.value
        });
        }
        
    }
    yearChange(y) {
        if (isNaN(y.target.value)){alert  ('Not a number')}
        else{
            this.setState({
            year: y.target.value
        });
        }
        
    }
    reset = () => {
        this.setState({
            name: '',
            number: '',
            month: '',
            year: '',
        })
    }
    render() {
        return (
            <div className='cart' >
                <div className='titre'>
                    <p>CREDIT CARD</p>
                </div>
                <div className='pus'>
                    <img src={img2} />
                </div>
                <div className='container'>
                    <div className='part1'>
                        <div className='numero'>
                            <span>{this.state.number.padEnd(16,'*').split('').map((x,i)=>{return i%4===0 ?" "+x:x}).join('')}</span>
                        </div>
                        <div className='contenue'>
                            <div className='info'>
                                <div>
                                    <span>CARDHOLDER</span>
                                    <p>{this.state.name.padEnd(20,'-')}</p>
                                </div>
                            </div>
                            <div className='valid'>
                                <div className='thru'>
                                    <span>VALID</span>
                                    <span>THRU</span>
                                </div>
                                <div className='month'>
                                    <p>MONTH/YEAR</p>
                                    <span>{this.state.month.padEnd(2,'-')} / {this.state.year.padEnd(2,'-')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='visa'>
                        <img src={img3} />
                    </div>

                </div>
                <form>
                <div className='inputs'>
                    <div>
                        <span>CARDHOLDER</span>
                        <input type="text" maxLength="20" onChange={this.nameChange.bind(this)} />
                    </div>
                    <div>
                        <span>NUMBER</span>
                        <input type="text" maxLength="16" onChange={this.numberChange.bind(this)} />
                    </div>
                    <div>
                        <span>MONTH</span>
                        <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
                    </div>
                    <div>
                        <span>YEAR</span>
                        <input type="text" maxLength="2" onChange={this.yearChange.bind(this)} />
                    </div>
                </div>
                <div className='reset'>
                    <button onClick={this.reset}>Reset</button>
                </div>
                </form>
            </div>


        );
    }
}

export default Creditcard;