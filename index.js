let targetValue, startAt, percentage;

window.addEventListener('onWidgetLoad', function (obj) {
    let data=obj["detail"]["session"]["data"];
 //   let recents=obj["detail"]["recents"];
 //   let currency=obj["detail"]["currency"];
 //   let channelName=obj["detail"]["channel"]["username"];
 //   let apiToken=obj["detail"]["channel"]["apiToken"];
    let fieldData=obj["detail"]["fieldData"];
	let liveValue=data["follower-total"]["count"];
  
    targetValue=fieldData.targetValue;
    startAt=fieldData.startAt;
  	percentage = ((liveValue - startAt) / (targetValue - startAt)) * 100;
  
 	document.getElementById('meine-status-bar').style.backgroundSize = percentage + '%';
});

window.addEventListener('onEventReceived', function (obj) {
  	if (obj.detail.listener == "follower-latest") {
    	let liveValue = obj.detail.event.amount;
        percentage = ((liveValue - startAt) / (targetValue - startAt)) * 100;
		document.getElementById('meine-status-bar').style.backgroundSize = percentage + '%';
    }
});