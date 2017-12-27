const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    //used to dynamically import files which returns a promise
    System.import('./image_viewer').then(module => {
        // console.log(module);
        module.default();
    },
    err => console.log(err));
};

document.body.appendChild(button);