let video = document.getElementById("background-video");
let source = video.getElementsByTagName("source")[0];

let card = document.getElementsByClassName("card")[0];
let user_info = document.getElementsByClassName("user-info")[0];

let count = 1;


function changeMode() {
    if (count % 2 == 0) {
        source.src = "./media/video/itcamp_dark.mp4";
        card.style.backgroundColor="rgb(52, 48, 48)";
        user_info.style.color = "white";
        count += 1;
    } else {
        source.src = "./media/video/itcamp_light.mp4";
        user_info.style.color = "black";
        card.style.backgroundColor="grey";
        count += 1;
    }
    video.load();
}
