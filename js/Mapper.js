function myMap()
{
    let mapProp=
    {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:10,
    };
    window.bigMap=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    getLocation();
}
function getLocation()
{
    if (navigator.geolocation) {
        position();
        //window.alert("asdfas" +pos.lat);
        //navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    window.alert(position.coords.latitude +"    "+ position.coords.longitude);
}


function mapDirection(x,y)
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
        let pos= {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        let DirectionService.route();
    });
}

function position()
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
        let pos= {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        let marker = new google.maps.Marker({
            position: pos,
            map: bigMap,
            title: 'Hello World!'
        });
    });
}