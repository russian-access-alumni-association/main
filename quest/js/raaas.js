var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

var heroneed = 0;

function onYouTubeIframeAPIReady() {
	document.getElementById('h3ro').addEventListener('click', function() {
		heroneed += 1;
		if (heroneed == 10) {
			somebodyNeedsAHero();
		}
	});
}

function somebodyNeedsAHero() {
	player = new YT.Player('heroplayer', {
		height: '1',
		width: '1',
		videoId: 'bWcASV2sey0',
	    playerVars: { 'autoplay': 1, 'controls': 0, 'disablekb': 1, 'loop': 1, 'playlist': 'bWcASV2sey0' },
		events: {
			'onReady': onPlayerReady,
		}
	});
}

function onPlayerReady(event) {
	event.target.setVolume(100);
    event.target.playVideo();
}

      
