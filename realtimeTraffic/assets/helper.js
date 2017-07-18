$(document).ready(function(){
 
    $("#localBtn").on("click",()=>{
        newCenter = {lat: 32.486169, lng: -80.880322};
        newZoom = 10;
        initMap();
    })   
    $("#stateBtn").on("click",()=>{
        newCenter = {lat:33.745892, lng:-80.859505};
        newZoom = 8;
        initMap();
    })
})// end doc ready

var newCenter, newZoom;
const apiHost = "https://scdotatrapi.herokuapp.com";
//const apiHost = "http://localhost:3000";

// modal templates

var noDataMsg = 
    `<div class="panel-body">
        <p class="noDataMsg">Nothing appearing? Try tapping/clicking that marker again... . If you still see no results, this counter might be offline.</p>
    </div>`;

var loadingMsg = 
    `<div class="panel-body loader">
        <h4>Attempting to load data ...</h4>
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
            $("#msgModal").modal("hide")
            $("#recentDataModal").modal("show");

                // chart init and config has to occur after modal is populated, since canvases aren't placed until then
                // recent hour chart
                var recentChart = new Chart($("#recentChart"),{
                    type: 'horizontalBar',
                    "options": hourChartOptions
                });

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
        
        // find last actual data
        
        let hourArray = ['1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM', '4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM','12 AM'];

        if (response.actualDir1.indexOf(" ") > -1)
            var lastIndex = response.actualDir1.indexOf(" ")-1
        else 
            var lastIndex = 23;
        
        var current = [response.actualDir1[lastIndex], response.actualDir2[lastIndex]];
        var historic = [response.histDir1[lastIndex], response.histDir2[lastIndex]];
        var speedDir1 = response.speedDir1[lastIndex];
        var speedDir2 = response.speedDir2[lastIndex];
        console.log(speedDir1,speedDir2);
        
        $("#hourLabel").html(`Last update: ${hourArray[lastIndex]}`);
        $("#dir1Speed").html(speedDir1);
        $("#dir2Speed").html(speedDir2);

        var recentData = {
            datasets: [
                {
                    "label": "Current",
                    "data": current,
                    backgroundColor: "#6C55B2"
                },
                {
                    "label": "Typical",
                    "data": historic,
                    backgroundColor: "#80CC7F"
                }
            ],
            "labels":["North or East lanes","South or West lanes"]
        };

        updateChart(recentChart,recentData);
        
        // full day data comes back from my API already in correct format, so just plug it in:                
        var dir1FullDay = {
            datasets: [
                {
                    "label":"Actual",
                    "data":response.actualDir1,
                    backgroundColor: "#6C55B2",
                    "yAxisID": "y-axis-0"
                },
                {
                    "label":"Historic",
                    "data":response.histDir1,
                    backgroundColor: "#FF9130",
                    "type": "line",
                    "yAxisID": "y-axis-0"
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
                    "label":"Count",
                    "data":response.actualDir2,
                    backgroundColor: "#6C55B2",
                    "yAxisID": "y-axis-0"
                },
                {
                    "label":"Historic",
                    "data":response.histDir2,
                    backgroundColor: "#FF9130",
                    "type": "line",
                    "yAxisID": "y-axis-0"
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
    if (newCenter) 
        var center = newCenter 
    else 
        var center= {lat: 32.486169, lng: -80.880322};
    if (newZoom) 
        var zoom = newZoom
    else
        var zoom = 10;
    
    map = new google.maps.Map(document.getElementById('atrMap'), {
        zoom,
        center
    });

        $(siteData).each( function( index,site ) {
        var marker = new google.maps.Marker({
            position: site.location,
            map: map,
            animation: google.maps.Animation.DROP
        });

        marker.addListener("click", function() {
            $("#msgModalBody").html(loadingMsg);
            $("#msgModal").modal("show");
            fetchData(site.id,site.description);
        });
    });   
}

// 
updateChart = (chart,data) => {
    chart.data = data;
    chart.update();
}

