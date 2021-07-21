import axios from 'axios';
import { OnlineRoot,RootPath } from './Config';


const Get = (path, root) =>  {
    const promise = new Promise((resolve, reject) => {

        axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
        .then((hasil) => {
            resolve(hasil.data)
            // console.log(hasil);
            // console.log(hasil.data);
            // this.setState({
            //     post: hasil.data
            // })
        }, (err) => {
            reject(err);
        })

    })
    return promise
}

export default Get;