---
layout: default
title: Status
permalink: /status/
---

### Build

A continuous integration (CI) is running [on this GITlab page]{https://gitlab.com/uwsbel/chrono/pipelines}, where you can find the results of the latest automatic cross-platform builds for all platforms.


### Basic Stats

<script type="text/javascript" src="https://www.openhub.net/p/projectchrono/widgets/project_languages?format=js"></script>
<script type="text/javascript" src="https://www.openhub.net/p/projectchrono/widgets/project_factoids_stats?format=js"></script>

<br>

### Project Chrono Benchmark Test Results:
A set of tests are run on Project Chrono every time a push is made to our [GIT repository](https://github.com/projectchrono/chrono). The results of those tests are pushed to a database and posted here.

The Linux build machine runs Arch Linux on an Intel Core i7-5960@3GHz 8-core with an Nvidia GTX 770 GPU, 32 GB RAM, and 128GB SSD.
The Windows build machine uses the same hardware and runs Windows 10 Enterprise.
The OSX build machine runs MacOS 10 on an Intel Core i5-4278U@2.6GHz dual-core with Intel Iris Graphics, 8GB RAM, and 1T HDD.

To zoom in on a chart, click and drag your mouse across the area of interest. Right click on the chart to reset to its original size.

<html>
<body>

<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<select id="test_names" onchange="showTest(value);">
    <option value="default"> Tests Loading! </option>
</select>

<div id="metrics"></div>
<script src="/js/plot_charts.js"></script>
</body>
</html>

<br>

