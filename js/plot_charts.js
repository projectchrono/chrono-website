var HTML_base = "https://projectchrono.org/metrics/api";
google.charts.load("current", {
    "packages": ["corechart"]
});
var charts = []; // not entirely sure what this does
var color_list = ['#274EC0', '#D12411', '#1E8E1B'];
// Shows dropdown menu of all tests available
function showTestNames(test_list) {
    for (i = 0; i < test_list.length; i++) {
        test = test_list[i];
        // Makes a dropdown list of each available test
        var x = document.getElementById("test_names");
        var option = document.createElement("option");
        option.text = test.name;
        option.value = test.name;
        x.add(option);
    }
}
// Parses data for a given test and plots charts for each metric
function drawCharts(test_runs) {
    var run_names = []; // Number of machines + name
    var runs = []; //  2D Array containing. Cols =  Number of machines, Rows = Run
    var metrics = [];
    run_names = test_runs["run_names"];
    var len = run_names.length;
    /* Load runs for each machine */
    for (var i = 0; i < len; i++) {
        runs.push(test_runs[run_names[i]]);
    }
    /* Load metric names */
    for (metric in runs[0][0]["metrics"]) {
        metrics.push(metric);
    }
    console.log(run_names, runs, metrics);
    showlegend(run_names);
    plotProps(metrics, run_names, runs);
}

function showlegend(run_names) {
    // Makes table of colors and names for build machines
    var table = document.createElement("table");
    table.style.borderCollapse = "separate";
    table.style.borderSpacing = "3px";
    for (var n = 0; n < run_names.length; n++) {
        // Create table row and colorbox 
        var tr = document.createElement("tr");
        var colorbox = document.createElement("td");
        // Set up colorbox
        colorbox.setAttribute("style", "background-color:" + color_list[n]);
        colorbox.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<br>";
        tr.appendChild(colorbox);
        // Put buildername next to color box
        var buildername = document.createElement("td");
        buildername.innerHTML = run_names[n];
        tr.appendChild(buildername);
        table.appendChild(tr);
    }
    // Create legend title and put it above the table
    legendtitle = document.createElement("div");
    legendtitle.innerHTML = "<br> Legend <br>";
    document.getElementById("metrics").appendChild(legendtitle);
    document.getElementById("metrics").appendChild(table);
}
// Creates a chart from a given data table and property name to chart
function makeChart(data, prop_name) {
    // console.log(data);
    // Set up chart
    var options = {
        tooltip: {
            isHtml: true
        },
        title: prop_name,
        legend: "none",
        // vAxis: {title: metric_name},
        // hAxis: {title: "timestamp"},
        explorer: {
            axis: "horizontal",
            actions: ["dragToZoom", "rightClickToReset"],
            keepInBounds: true,
            maxZoomIn: .01
        },
        chartArea: {
            height: "50%",
            width: "90%"
        },
        colors: color_list
    };
    // Place chart in page
    var div = document.createElement("div");
    div.setAttribute("id", prop_name);
    div.setAttribute("class", "metric");
    document.getElementById("metrics").appendChild(div);
    var chart = new google.visualization.ScatterChart(document.getElementById(prop_name));
    chart.draw(data, options);
    charts.push(chart);
}
// Plots charts for each property (metrics and execution time) of a given test
function plotProps(metrics, run_names, runs) {
    var timestamps = [];
    var commit_ids = [];
    var base_table = [
        ["timestamp"]
    ];
    // console.log(base_table);
    // Sets up table of timestamps
    for (var n = 0; n < run_names.length; n++) {
        // Iterate through each run for that name
        base_table[0][(2 * n) + 1] = run_names[n];
        for (var m = 0; m < runs[n].length; m++) {
            var test_run = runs[n][m];
            var ts = new Date(test_run["timestamp"]);
            // Adds timestamp to list of timestamps iff not already in array
            var index = getObjectIndex(ts, timestamps);
            if (index == -1) {
                timestamps.push(ts);
                base_table.push([ts]);
                // table[timestamps.length][n + 1] = test_run["metrics"][metric_name];
            } //else {
            // table[index + 1][n + 1].push(test_run["metrics"][metric_name]);
            // }            
        }
    }
    // Ensures each row has same length
    for (var n = 0; n < base_table.length; n++) {
        base_table[n].length = 2 * run_names.length + 1;
    }
    for (var n = 0; n < run_names.length; n++) {
        base_table[0][2 * n + 2] = "Commit_id";
    }
    var table = base_table;
    // Plots execution times
    for (var n = 0; n < run_names.length; n++) {
        var run_name = run_names[n];
        // Iterate through each run for that name
        for (var m = 0; m < runs[n].length; m++) {
            var test_run = runs[n][m];
            var ts = new Date(test_run["timestamp"]);
            var index = getObjectIndex(ts, timestamps);
            table[index + 1][2 * n + 2] = ("<b>" + run_name + "</b> &nbsp;<br>" + "<b>Commit&nbsp;Id:&nbsp;</b>" + test_run["commit_id"] + "&nbsp;<br>" + "<b>Timestamp:&nbsp;</b>" + ts + "&nbsp;<br>" + "<b>Execution time:&nbsp;</b>" + test_run["execution_time"]);
            // table[index + 1][(2 * n) + 2] = "tooltip";
            table[index + 1][(2 * n) + 1] = test_run["execution_time"];
        }
    }
    console.log(table);
    var data = google.visualization.arrayToDataTable(table);
    for (var n = 0; n < run_names.length; n++) {
        data.setColumnProperty(2 * n + 2, 'role', 'tooltip');
        data.setColumnProperty(2 * n + 2, 'html', true);
    }
    makeChart(data, "Execution Times");
    // console.log(metrics);
    for (var i = 0; i < metrics.length; i++) {
        var metric = metrics[i];
        // console.log(i + ": " + metric);
        table = base_table;
        // Plots a chart for each metric
        for (var n = 0; n < run_names.length; n++) {
            // Iterate through each run for that name
            for (var m = 0; m < runs[n].length; m++) {
                var test_run = runs[n][m];
                // console.log(test_run['metrics'][metric]);
                var ts = new Date(test_run["timestamp"]);
                var index = getObjectIndex(ts, timestamps);
                table[index + 1][2 * n + 2] = ("<b>" + run_name + "</b> &nbsp;<br>" + "<b>Commit&nbsp;Id:&nbsp;</b>" + test_run["commit_id"] + "&nbsp;<br>" + "<b>Timestamp:&nbsp;</b>" + ts + "&nbsp;<br>" + "<b>Result:&nbsp;</b>" + test_run["metrics"][metric]);
                table[index + 1][2 * n + 1] = test_run["metrics"][metric];
            }
        }
        // console.log(table);
        data = google.visualization.arrayToDataTable(table);
        for (var n = 0; n < run_names.length; n++) {
            data.setColumnProperty(2 * n + 2, 'role', 'tooltip');
            data.setColumnProperty(2 * n + 2, 'html', true);
        }
        makeChart(data, metric);
    }
}
// Finds index of specified object in an array 
function getObjectIndex(obj, arr) {
    for (var test_idx = 0; test_idx < arr.length; test_idx++) {
        if (arr[test_idx].valueOf() == obj.valueOf()) {
            return test_idx;
        }
    }
    return -1;
}
// Sets up authentication info
$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    },
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*"
    }
});
// Gets list of test names
$.ajax({
    url: HTML_base + "/tests",
    method: "GET",
    data: "{};",
    dataType: "jsonp",
    jsonpCallback: "tests",
    success: function (response, status, xhr) {
        console.log($.trim(response));
        // Changes "Test Loading!" text
        $("#test_names option:selected").html(" --- Select A Test --- ");
        showTestNames(JSON.parse(response));
    },
    error: function (xhr, status, error_code) {
        console.log("Error:" + status + ": " + error_code);
    }
})
// Shows a test when selected from the dropdown menu
function showTest(test_name) {
    $("#metrics").empty(); // Clears metrics div so new charts can be shown
    if (test_name == "default") {
        return; //If the "Select A Test" option is selected
    }
    $.ajaxSetup({
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*"
        }
    });
    // Gets all test data for a given test
    $.ajax({
        url: HTML_base + "/tests/" + test_name,
        method: "GET",
        data: "{};",
        dataType: "jsonp",
        jsonpCallback: "test",
        success: function (response, status, xhr) {
            console.log(response);
            google.charts.setOnLoadCallback(drawCharts(response));
        },
        error: function (xhr, status, error_code) {
            console.log("Error:" + status + ": " + error_code);
        }
    })
}
