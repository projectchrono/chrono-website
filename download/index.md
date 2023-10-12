---
layout: default
title: Download
permalink: /download/
---

{::options parse_block_html="true" /}

Get the source
==============

Project Chrono is distributed as open source, so the preferred way for installing it is to **clone** the source code from our [GIT repository](https://github.com/projectchrono/chrono) and to build the libraries by **compiling** the source code.

Instructions for configuring and building the Chrono libraries are provided on the [installation page](http://api.projectchrono.org/development/tutorial_table_of_content_install.html).

<br>

---

Download precompiled binaries
=============================

We also provide both container images and precompiled binaries if you want to skip the build process:

### Windows, Mac, and Linux users:
The latest release of Project Chrono is available as a [Docker](https://www.docker.com/products/docker-desktop) image.
<div class="well">

#### Get the latest version

```sh
docker pull uwsbel/projectchrono:latest
```

#### Pull a specific release
```sh
docker pull uwsbel/projectchrono:7.0.1-cuda11.5
```
Or, for an older release
```sh
docker pull uwsbel/projectchrono:6.0.0-cuda11.2
```

See the [Project Chrono Docker Repository](https://hub.docker.com/repository/docker/uwsbel/projectchrono) for more information. 
</div>

### Windows users:
The latest version of the installer features a GUI for a friendlier user experience. If you have previously used the installer package for Project Chrono, it is recommended to uninstall that version first. This installer will not interfere with manual builds of Project Chrono.

<div class="well">

#### <span class="glyphicon glyphicon-download-alt"></span> Download

_Precompiled Project Chrono 7.0.1 for Windows_ is in the works and will be available soon. 

[Precompiled Project Chrono 6.0.0 for Windows](https://github.com/projectchrono/chrono/releases/download/6.0.0/projectchrono-installer-6.0.0.exe)

</div>



<br />
<br />

---

PyChrono
========

[PyChrono](http://projectchrono.org/pychrono/) is Chrono for Python. It is a module that can be installed in your Python environment so that you can access the functions of Chrono via the [Python language](http://www.python.org). This can be an easier way to use Chrono because Python is more friendly than C++.

We support installation of PyChrono via the **conda** installer:

```
conda install -c projectchrono pychrono
```

For more details on the installation, refer to the 
[PyChrono installation page](http://api.projectchrono.org/pychrono_installation.html).


<br>
<br>


---


Chrono::SolidWorks
==================

This optional tool can be installed as an add-in for the [SolidWorks](http://www.SolidWorks.com) CAD software.
After installation of this add-in, a new exporter tool is availabnle in the right panel of SolidWorks: this can be used to generate .py files with PyChrono scene descriptions containing masses, constraints, etc.

The installer automatically detects the SolidWorks installation (SolidWorks v.2021 is tested and known to work at the moment, but other version may also work) and adds the
Chrono add-in.

<div class="well">
<h4> <span class="glyphicon glyphicon-download-alt"></span> Download</h4>
<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v9.2.exe"> Chrono::SolidWorks 9.2 add-in for SolidWorks 2021 and higher. Compatible with develop branch of Chrono</a><br />

---

<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v8.0.exe"> Chrono::SolidWorks 8.0 add-in for SolidWorks 2021 and higher. Compatible with Chrono 8.0.</a><br />
<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v6.0.exe"> Chrono::SolidWorks 6.0 add-in for SolidWorks 2021 and higher. Compatible with Chrono 6.0 and Chrono 7.0.</a><br />
</div>

<br>
<br>

---


Useful tools
=============================

The following list contains useful third-party tools and libraries for building and/or using Chrono. If building Chrono from source, some of them are required/recommended (e.g., a GIT client, CMake for configuration, a compiler, etc.). If using preinstalled binaries, most of these are optional.


### C++ compiler

A C++ compiler is **required** in order to build
Chrono libraries and demos. Chrono requires a C++11 compliant compiler. The Chrono building process has been tested with Microsoft compilers (required version Visual Studio v.2013 or later), GNU compilers, and Intel compilers.

<div class="ce-info">

In case you do not have a C++ compiler already installed on your computer, you can download one of these free tools:

* Windows

  * [Microsoft C++, in Visual Studio](https://www.visualstudio.com)  (suggested; the Community edition is also free)

  * [MingW GNU C++](http://www.mingw.org/wiki/InstallationHOWTOforMinGW)

* Linux

  * On most distributions, the GNU gcc compiler should be already installed by default. If not, install with:  
	```
	sudo apt-get install gcc build-essential
	```  
    (assuming you have Ubuntu)

  * or download from [http://gcc.gnu.org](http://gcc.gnu.org)
</div>

<div class="ce-danger">
The initial release of Visual Studio 2015 gives an
error when compiling Chrono. Using **update 2** of Visual Studio 2015 fixes this problem (download it from
[this page](https://www.visualstudio.com/en-us/news/vs2015-update2-vs.aspx). )
</div>


### GIT client

A GIT client compiler is **required** in order to build
Chrono libraries and demos.
The C++ source code of Chrono is hosted on a GIT versioning system.
You need a GIT client that allows you to clone and pull the most recent release from GIThub.
There are many alternatives, but we suggest [SourceTree](https://www.sourcetreeapp.com/).


### CMake

The CMake tool is **required** in order to in order to build
Chrono libraries and demos. CMake is cross-platform and available
for many operating systems (choose the one that you need, ex. Windows,
Linux, etc.). Download it from [this site](http://www.cmake.org/cmake/resources/software.html).


### Irrlicht 3D

The [Irrlicht](http://irrlicht.sourceforge.net/downloads.html) library
is **required** in order to compile the Chrono demos that use the **IRRLICHT module**
3D visualization. It is a cross-platform 3D visualization library, based
on OpenGL and DirectX. Download it from [this site](http://downloads.sourceforge.net/irrlicht/irrlicht-1.8.2.zip).

{:info: .ce-info}
The new release v.1.8.2 of Irrlicht is tested to be stable and working well with Chrono.  
Release v.1.8.3 does not contain the precompiled 64bit dlls.  
Release v.1.8.0 has some issues with soft shadows.
{:info}


### Matlab

The *optional* **MATLAB module** in Chrono provides the support
for interoperation with Matlab(TM). If you want to build that unit and
to test its demos, you must have the Matlab API installed in your
computer: that is distributed in the main Matlab software, so if you
already have Matlab installed you are fine. If not, just do not compile and use the
MATLAB module in the Chrono project. If you want to buy the
Matlab software, go to
[<http://www.mathworks.com>](http://www.mathworks.com).


### POVray

The *optional* **POSTPROCESSING module** in Chrono provides
functionality for exporting simulation data in formats that can be
rendered by external software. No libraries are needed to build or use
this unit; however you may need raytracing software for
processing the saved data. Currently, the POVray 3D raytracer is
supported and tested. Download it from [this
site](http://www.povray.org).

### GNUplot

The *optional* **POSTPROCESSING module** in Chrono provides
functionality for exporting simulation data. One of the output file formats
is for plotting graphs with the free GNUplot tool. Download it from [this
site](http://www.gnuplot.info).
