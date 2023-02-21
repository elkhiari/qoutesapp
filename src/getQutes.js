import axios from "axios";


export const getQoutes = ()=>{
        var config = {
        method: 'get',
        url: 'https://api.api-ninjas.com/v1/quotes',
        headers: { 
            'X-Api-Key': 'WR8Ls7TL+RxE0JMl1l9Qpg==mNXMGJYqHtZGIFdv'
        }
        };

        axios(config)
        .then(function (response) {
        return(response.data);
        })
        .catch(function (error) {
        return(null);
    });

}