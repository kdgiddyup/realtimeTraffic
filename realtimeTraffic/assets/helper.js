$(document).ready(function(){

    $("#localBtn").on("click",()=>{
        map.setCenter(localCenter);
        map.setZoom(localZoom);

    })   
    $("#stateBtn").on("click",()=>{
        map.setCenter(stateCenter);
        map.setZoom(stateZoom); 
    })

    // initialize vehicle count gauges
    $('#dir1Gauge .gauge-arrow').cmGauge();
    $('#dir2Gauge .gauge-arrow').cmGauge();

})// end doc ready

// some ChartJs configs
// set chart scales to start at 0
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 0
    }
});

localCenter = {lat: 32.353968, lng: -80.893852};
localZoom = 9;

stateCenter = {lat:33.027134, lng:-80.364184};
stateZoom = 8;

const apiHost = "https://scdotatrapi.herokuapp.com";
//const apiHost = "http://localhost:3000";

// modal templates

var noDataMsg = 
    `<div class="panel-body">
        <p class="noDataMsg">Nothing appearing? Try tapping/clicking that marker again. If you still see no results, this counter might be offline.</p>
    </div>`;

var loadingMsg = 
    `<div class="panel-body loader">
        <h4>Looking for data ...</h4>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>`;

// map functions are down below fetchData
fetchData = ( site, place ) => {
   
   // ajax to api route to retrieve current info   
   $.get(`${apiHost}/api/tables/${site}`, (response) => {
    // no data from API? 
        if (response.actualDir1.length === 0 ) {
            // no data? update message modal with noData message
            $("#msgModalBody").html(noDataMsg)
        }
        else {
            $("#msgModal").modal("hide");
            $("#recentDataModal").modal("show");

            // chart init and config has to occur after modal is populated, since canvases aren't placed until then

            // update place name
            $(".modal-title").html(place);

            // update directional labels
            $(".dir1Label").html(response.dirNames[0]);
            $(".dir2Label").html(response.dirNames[1]);

            // full day charts
            //direction 1 (appears in modal window established on index.html)
            var dir1Day = new Chart($("#dir1day"), {
                type: 'bar',
                "options": dayChartOptions
            });    
            // direction 2 (also on index.html modal div)
            var dir2Day = new Chart($("#dir2day"), {
                type: 'bar',
                "options": dayChartOptions
            });    
    
        // find latest hour of data from API call response 
        
        let hourArray = ['1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM', '4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM','12 AM'];

        if (response.actualDir1.indexOf(" ") > -1)
            var lastIndex = response.actualDir1.indexOf(" ")-1
        else 
            var lastIndex = 23;
        
        var currentDir1 = response.actualDir1[lastIndex];
        var currentDir2 = response.actualDir2[lastIndex];
        var historicDir1 = response.histDir1[lastIndex];
        var historicDir2 = response.histDir2[lastIndex];
        
        // what is the ratio of current vehicle count vs. typical count?
        // we'll need this for our gauge graphic
        var ratioDir1 = Math.floor( currentDir1 / historicDir1 * 100);
        var ratioDir2 = Math.floor( currentDir2 / historicDir2 * 100);

        var speedDir1 = response.speedDir1[lastIndex];
        var speedDir2 = response.speedDir2[lastIndex];

        
        $("#hourLabel").html(`Last update: ${hourArray[lastIndex]}`);
        $("#dir1Speed").html(speedDir1);
        $("#dir2Speed").html(speedDir2);

        // update vehicle count gauges for each direction of travel
        // we want 100% to be at the middle of the gauge, so we divide ratio in half  

        $("#dir1Gauge .gauge-arrow").trigger("updateGauge", ratioDir1/2);
        $("#dir2Gauge .gauge-arrow").trigger("updateGauge", ratioDir2/2);
        
        // update count labels
        $("#dir1count").html(`${currentDir1} vehicles (${ratioDir1}% of normal)`)
        $("#dir2count").html(`${currentDir2} vehicles (${ratioDir2}% of normal)`)
        
        // full day data comes back from my API already in correct format, so just plug it in:                
        var dir1FullDay = {
            datasets: [
                {
                    "label":"Today",
                    "data":response.actualDir1,
                    "backgroundColor": "#6C55B2",
                    "yAxisID": "y-axis-0",
                    "hidden": false
                },
                {
                    "label":"Historic",
                    "data":response.histDir1,
                    "backgroundColor": "#FF9130",
                    "type": "line",
                    "yAxisID": "y-axis-0",
                    "hidden" : false
                },
                {
                    "label":"Avg mph",
                    "data":response.speedDir1,
                    backgroundColor: "#80CC7F",
                    "type": "line",
                    "yAxisID": "y-axis-1"
                }
            ], // end of dataset array
            // labels would be times for the whole chart
            
            "labels": hourArray
        }  // end of data object
      
       var dir2FullDay = {
            datasets: [
                {
                    "label":"Today",
                    "data":response.actualDir2,
                    backgroundColor: "#6C55B2",
                    "yAxisID": "y-axis-0",
                    "hidden":false
                },
                {
                    "label":"Historic",
                    "data":response.histDir2,
                    backgroundColor: "#FF9130",
                    "type": "line",
                    "yAxisID": "y-axis-0",
                    "hidden":false
                },
                {
                    "label":"Avg mph",
                    "data":response.speedDir2,
                    backgroundColor: "#80CC7F",
                    "type": "line",
                    "yAxisID": "y-axis-1"
                }
            ], // end of dataset array

            // labels would be times for the whole chart
            "labels": hourArray
        }  // end of data object
             updateChart(dir1Day,dir1FullDay);
             updateChart(dir2Day,dir2FullDay);
        }
    }); // end ajax call
} // end fetchData function


initMap = () => { 
    var center= localCenter;
    var zoom = localZoom;
    
    map = new google.maps.Map(document.getElementById("atrMap"), {
        zoom,
        center,
        styles: mapStyles  // mapStyles is housed in atrData.js
    });

    $(siteData).each( function( index,site ) {
        var marker = new google.maps.Marker({
            position: site.location,
            map: map,
            animation: google.maps.Animation.DROP,
            // darker hue: #556292 lighter hue: #AEB9DF
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#AEB9DF',
                fillOpacity: 0.7,
                scale: 10,
                strokeColor: '#556292',
                strokeWeight: 2
            }
            });

        marker.addListener("click", function() {
            $(".chart-container").children("iframe").remove();
            $("#msgModalBody").html(loadingMsg);
            $("#msgModalTitle").html(site.description);
            $("#msgModal").modal("show");
            
            // make api call to get data; final argument is an attempt counter
            fetchData(site.id,site.description);
            });
        }); 
}
// 
updateChart = (chart,data) => {
    chart.data = data;
    chart.update();
}


