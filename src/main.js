//div.image img -> src

execute = function(){
    var links=[];
    var containers = document.body.getElementsByClassName('image');
    for( var i=0; i<containers.length; i++){
        var imgs =containers[i].getElementsByTagName('img');
        for( var j=0; j<imgs.length; j++){
            var url = "http:"+(imgs[j].getAttribute('src') );
            if( url.match(/http:\/\/i.imgur.com\/.*\.[a-z]+/)&& links.indexOf(url) < 0 )
                links.push(url);
        }
    }
    return links;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("sending ");
    sendResponse(execute());
});

//alert("inserted");
