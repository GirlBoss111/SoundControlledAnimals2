function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ySUehv5Nm/model.json', modelready);
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("resultlabel").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("resultaccuracy").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";

        document.getElementById("resultlabel").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("resultaccuracy").style.color = "rgb("+r+","+g+","+b+")";

        img1 = document.getElementById('alien1')
        img2 = document.getElementById('alien2')
        img3 = document.getElementById('alien3')

        if(results[0].label == "Clap"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
        }

        else if(results[0].label == "Snapping")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
        }

        else if(results[0].label == "Talking"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
        }

        else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
        }

    }
}