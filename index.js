let liveValue, targetValue, startAt, percentage;

let setProgress = function(value) {
	document.getElementById('meine-status-bar').style.backgroundSize = value + '%';
};

window.addEventListener('onWidgetLoad', function (obj) {
    let data=obj["detail"]["session"]["data"];
    let fieldData=obj["detail"]["fieldData"];
  	liveValue=data["subscriber-points"]["amount"];
    targetValue=fieldData.targetValue;
    startAt=fieldData.startAt;
  	percentage = ((liveValue - startAt) / (targetValue - startAt)) * 100;
	setProgress(percentage);  
});

window.addEventListener('onEventReceived', function (obj) {
	 if (obj.detail.listener == "subscriber-latest") {
		liveValue ++;
        percentage = ((liveValue - startAt) / (targetValue - startAt)) * 100;
		setProgress(percentage);}
});
