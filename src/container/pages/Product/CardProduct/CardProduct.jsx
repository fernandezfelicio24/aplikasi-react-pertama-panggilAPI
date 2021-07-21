import React, {Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component {


    render(){
        return(
            


            <div className="card">
                <div className="img-thumb-prod"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1Bkr-llqUhGYS3lgFpN2TvgVsrh4GUVAnw&usqp=CAU" alt=""/>
                </div>
            <p className="product-title">Daging Babi Rica Rasa Tai plus gosih Tepung Crispy [ 1 Container ] </p>
            <p className="product-price">Rp 34.0000 </p>
            <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
            </div>
    
            

        );
    }
}

export default CardProduct;