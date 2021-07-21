//libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import BlogPost from '../pages/BlogPost/BlogPost';
import LifeCycleCop from '../pages/LifeCycleComp/LifeCycleCop';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import Product from '../pages/Product/Product';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
//Styling
import './Home.css';


class Home extends Component {

    state = {
        showComponent :true
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent :false
    //         })
    //     }, 15000)
    
    // }

    render(){
        return(
            <Router>
            <Fragment>
                <div className="navigation">
                    <Link to="/" >Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/youtube-comp">Youtube Comp</Link>
                </div>
            <Route path="/" exact component={BlogPost}/>
            <Route path="/detail-post/:postID" component={DetailPost}/>     
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleCop} />
            <Route path="/youtube-comp" component={YoutubeCompPage} />
            </Fragment>
            
            </Router>
        )  
        
    }
}

export default Home;