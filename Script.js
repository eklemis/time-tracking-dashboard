let data_ready = false;

let data_url = "./data.json";

let request = new XMLHttpRequest();

request.open('GET', data_url);

request.responseType = 'json';
request.send();

request.onload = function() {
    const user_data = request.response;
    show_data(user_data);
}
let timeWork, timePlay, timeStudy, timeExercise, timeSocial, timeSelfCare;

function show_data(obj){
    console.log(obj)
    timeWork = obj [0]
    timePlay = obj [1]
    timeStudy = obj [2]
    timeExercise = obj [3]
    timeSocial = obj [4]
    timeSelfCare = obj [5]
    data_ready = true
    console.log("Data Ready!!")
    set_active(document.getElementById('daily-opt'), 0)
}

function set_active(ele, index){
    document.querySelectorAll(".bottom-card > a").forEach(function (element){
        document.getElementById(element.id).removeAttribute('class')
    });

    document.getElementById(ele.id).setAttribute("class", "active");
    if (index == 0){
        document.getElementById('work-cur-hr').innerHTML = timeWork.timeframes.daily.current+"hrs";
        document.getElementById('work-prev-hr').innerHTML = "Yesterday - "+timeWork.timeframes.daily.previous+"hrs";

        document.getElementById('play-cur-hr').innerHTML = timePlay.timeframes.daily.current+"hrs";
        document.getElementById('play-prev-hr').innerHTML = "Yesterday - "+timePlay.timeframes.daily.previous+"hrs";

        document.getElementById('study-cur-hr').innerHTML = timeStudy.timeframes.daily.current+"hrs";
        document.getElementById('study-prev-hr').innerHTML = "Yesterday - "+timeStudy.timeframes.daily.previous+"hrs";

        document.getElementById('exercise-cur-hr').innerHTML = timeExercise.timeframes.daily.current+"hrs";
        document.getElementById('exercise-prev-hr').innerHTML = "Yesterday - "+timeExercise.timeframes.daily.previous+"hrs";  
        
        document.getElementById('social-cur-hr').innerHTML = timeSocial.timeframes.daily.current+"hrs";
        document.getElementById('social-prev-hr').innerHTML = "Yesterday - "+timeSocial.timeframes.daily.previous+"hrs";   
        
        document.getElementById('selfcare-cur-hr').innerHTML = timeSelfCare.timeframes.daily.current+"hrs";
        document.getElementById('selfcare-prev-hr').innerHTML = "Yesterday - "+timeSelfCare.timeframes.daily.previous+"hrs";       
    }
    else if (index == 1){
        document.getElementById('work-cur-hr').innerHTML = timeWork.timeframes.daily.current+"hrs";
        document.getElementById('work-prev-hr').innerHTML = "Last week - "+timeWork.timeframes.weekly.previous+"hrs";

        document.getElementById('play-cur-hr').innerHTML = timePlay.timeframes.weekly.current+"hrs";
        document.getElementById('play-prev-hr').innerHTML = "Last week - "+timePlay.timeframes.weekly.previous+"hrs";

        document.getElementById('study-cur-hr').innerHTML = timeStudy.timeframes.weekly.current+"hrs";
        document.getElementById('study-prev-hr').innerHTML = "Last week - "+timeStudy.timeframes.weekly.previous+"hrs";

        document.getElementById('exercise-cur-hr').innerHTML = timeExercise.timeframes.weekly.current+"hrs";
        document.getElementById('exercise-prev-hr').innerHTML = "Last week - "+timeExercise.timeframes.weekly.previous+"hrs";  
        
        document.getElementById('social-cur-hr').innerHTML = timeSocial.timeframes.weekly.current+"hrs";
        document.getElementById('social-prev-hr').innerHTML = "Last week - "+timeSocial.timeframes.weekly.previous+"hrs";   
        
        document.getElementById('selfcare-cur-hr').innerHTML = timeSelfCare.timeframes.weekly.current+"hrs";
        document.getElementById('selfcare-prev-hr').innerHTML = "Last week - "+timeSelfCare.timeframes.weekly.previous+"hrs";  
    }
    else if (index == 2){
        document.getElementById('work-cur-hr').innerHTML = timeWork.timeframes.monthly.current+"hrs";
        document.getElementById('work-prev-hr').innerHTML = "Last month - "+timeWork.timeframes.monthly.previous+"hrs";

        document.getElementById('play-cur-hr').innerHTML = timePlay.timeframes.monthly.current+"hrs";
        document.getElementById('play-prev-hr').innerHTML = "Last month - "+timePlay.timeframes.monthly.previous+"hrs";

        document.getElementById('study-cur-hr').innerHTML = timeStudy.timeframes.monthly.current+"hrs";
        document.getElementById('study-prev-hr').innerHTML = "Last month - "+timeStudy.timeframes.monthly.previous+"hrs";

        document.getElementById('exercise-cur-hr').innerHTML = timeExercise.timeframes.monthly.current+"hrs";
        document.getElementById('exercise-prev-hr').innerHTML = "Last month - "+timeExercise.timeframes.monthly.previous+"hrs";  
        
        document.getElementById('social-cur-hr').innerHTML = timeSocial.timeframes.monthly.current+"hrs";
        document.getElementById('social-prev-hr').innerHTML = "Last month - "+timeSocial.timeframes.monthly.previous+"hrs";   
        
        document.getElementById('selfcare-cur-hr').innerHTML = timeSelfCare.timeframes.monthly.current+"hrs";
        document.getElementById('selfcare-prev-hr').innerHTML = "Last month - "+timeSelfCare.timeframes.monthly.previous+"hrs"; 
    }
}