function myMap()
{
    getLocation();
    navigator.geolocation.getCurrentPosition(function(position)
    {
        let mapProp=
            {
                center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                zoom:10,
            };
        window.bigMap=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    });
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


function mapDirection(destination)
{
    let directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

    navigator.geolocation.getCurrentPosition(function(position)
    {
        let pos= {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        let request={
            origin:{
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            destination: destination,

            travelMode:'DRIVING'
        }

        let router=new DirectionsService();

        router.route(request,function(response,status){
            if (status == 'OK') {
                window.alert("A");
                directionsDisplay.setDirections(response);
            }
        });
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