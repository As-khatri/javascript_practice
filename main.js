//if condition
checknumber = (number) => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    }
    else {
        console.log(`${number} is odd`)
    }
}
checknumber(1);

//callback function(function as argument)
sum = (a, b) => {
    console.log(a + b)
}
calculate = (a, b, callback) => { //callback as callback function
    callback(a, b);
}
calculate(1, 2, sum) //sum as callback function

//callback hell(nested callback function )
getData = (dataId, getNextData) => {
    setTimeout(() => {
        console.log('data', dataId);
        if (getNextData) {

            getNextData();
        }
    }, 2000);

}
getData(1, () => {                                  //getData has fuction as callbackfunction(as arrow function)
    console.log('fetching  data2.......');
    getData(2, () => {
        console.log('fetching data3 .......');
        getData(3, () => {
            console.log('fatching data4 ......');
            getData(4)
        })
    });
});

const getPromiseData = (dataId, getNextData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success!');
            // reject('loading error')
            if (getNextData) {
                getNextData();
            }

        }, 7000);
    });

}
let promises = getPromiseData();
promises.then((res) => {
    console.log('success', res)
})
promises.catch((rej) => {
    console.log('error!', rej);
})

//promise chain
const chainingData = (chaining, chainingFunc) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('content', chaining);
            resolve('sucess');
            if (chainingFunc) {
                chainingFunc();
            }
        }, 4000);
    })
}
// chainingData('one').then((res)=>{           
// console.log('fatching done',res);
// chainingData('two').then(()=>{
//     console.log('fatching done',res); 
// })

// })
 
chainingData('one')
.then((res)=>{           //promise chain(as:then inside then)
    console.log(res);
    return chainingData('two');
})
.then((res)=>{
   console.log(res)

});
//async - await
allwait =async()=>{
    await chainingData('one');
    await chainingData('two');
}
allwait();