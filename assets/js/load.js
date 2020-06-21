function loadImage(){
    for(var i = 0; i < suit.length;i++){
        for(var j = 0; j < rankChar.length;j++){
            let img = new Image(150,320);
            img.src = `./assets/img/${rankChar[j]}${suit[i].slice(0,1)}.jpg`;
            cardImg.push(img.outerHTML);
        }
    }
}

loadImage();