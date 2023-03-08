//new Promise(function (resolve, reject) {
// the function is executed automatically when the promise is constructed
// after 1 second signal that the job is done with the result "done“
//setTimeout(() => resolve("done"), 1000);

// after 1 second signal that the job is finished with an error
//setTimeout(() => reject(new Error("Whoops!")), 1000);


//});

function myresolve(t) {
    return "Sucess!! Promise waited [" + t + "] ms";
}
function sleep(t) {
    let mypromise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(myresolve(t)) }, t)
    });
    mypromise.then(
        result => {
            let container = document.getElementById("promisehere");
            let div = document.createElement("div");
            div.innerHTML = result;
            container.appendChild(div);
        },
        error => alert(error)
    );
}
sleep(3000);