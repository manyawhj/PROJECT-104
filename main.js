Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("Camera");
Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("Result").innerHTML='<img id="Snapshot_image" src="'+data_uri+'"/>';
});
}

console.log("ML5version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-5coDmKSo/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function Identify_image() {
    img=document.getElementById("Snapshot_image");
    classifier.classify(img,gotresult);
    }
    
     function gotresult(error,results){
        if (error){
            console.log(error);
         }
         else {
             console.log(results);
             document.getElementById("member_name").innerHTML=results[0].label;
             document.getElementById("member_accuracy").innerHTML=results[0].confidence.toFixed(3);
         }
    }