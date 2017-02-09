---
layout: default
title: Download
permalink: /download/
---

{::options parse_block_html="true" /}

Download precompiled binaries
=============================

Project Chrono is distributed as open source, 
so the preferred way for installing it is to **clone** the source code from our [GIT repository](https://github.com/projectchrono/chrono) and to build the binaries by **compiling** the source code. 
However we provide also precompiled binaries if you want skip the build process:

## Windows users:
A Project Chrono installer package is available from our repositories. The latest version features a more stable backend and a GUI for a friendlier user experience. If you have installed Project Chrono from the previous text-based installer, it is recommended to uninstall that version first. This installer will not interfere with manual builds of Project Chrono.

<div class="well">
<h4> <span class="glyphicon glyphicon-download-alt"></span> Download</h4>
[Precompiled Project Chrono for Windows](http://projectchrono.org/repos/chrono/ChronoEngine-installer-2-20170207.exe).
</div>


## CentOS/RedHat/Fedora users:
Project Chrono release RPMs are also available from our repositories.

<div class="well">
<h4> <span class="glyphicon glyphicon-download-alt"></span> Download</h4>
[Precompiled Project Chrono for CentOS/RedHat/Fedora](http://projectchrono.org/repos/projectchrono-repo-0.1.0-1.noarch.rpm).
</div>


## Other Users:
Precompiled binaries for other platforms are not provided. Project Chrono should be **cloned** from the public [GIT repository](https://github.com/projectchrono/chrono) and **compiled** from its C++ source code as described in the  [installation page](http://api.chrono.projectchrono.org/tutorial_install_chrono.html).



<br>
<br>

---


Chrono::PyEngine
================

This is the ready-to-use Chrono::PyEngine for Python. It is a module
that can be installed in your Python environment so that you can access
the functions of Chrono via the [Python
language](http://www.python.org). This can be an easier way to use
Chrono because Python is more friendly than C++ (but remember
that not all C++ functions are mapped to Python, moreover Python is
slower than C++).

The installer automatically detects your Python installation and adds
the Chrono module.

Note! currently only Python versions from 3.3 are supported. Versions 2.x are not officially supported. Also, only
the 64 bit version of Python is currently supported with this installer.


<div class="well">
<h4> <span class="glyphicon glyphicon-download-alt"></span> Download Chrono for Python</h4>

<a href="http://www.projectchrono.org/assets/installers/ChronoPyEngine_v2.0.8.exe"> Download Chrono::PyEngine v.2.0.8 module for Python v.3.x 64bit</a><br />

</div>

{:warning: .ce-warning} 
This stand-alone Chrono::PyEngine installer has been discontinued sice 29/12/2016, as we plan to distribute all the Chrono::PyEngine material together with the precompiled binaries of Chrono::Engine. There will be a single installer (the one that can be downloaded at the top of this page). Otherwise, just build the Python module by yourself as
explained in [this page](http://api.chrono.projectchrono.org/module_python_installation.html).
{:warning}

{:info: .ce-info}
If you need to plot graphs in Python, we suggest you to consider also the installation of both 
[MatplotLib](http://matplotlib.org/downloads.html) and 
[Numpy](http://www.numpy.org) 
Python packages.
{:info}


<br>
<br>


---


Chrono::SolidWorks
==================

This optional tool can be installed as an add-in for the
[SolidWorks](http://www.SolidWorks.com) 3D CAD, that is widely used by
many engineering companies. After you install this add-in, you will find
a new exporter tool in the right panel of SolidWorks: this can be used
to generate .py files with PyChrono scene descriptions
containing masses, constraints, etc.

The installer automatically detects your SolidWorks installation (v.2011,
v.2012, v.2013 64bit supported and tested, for the moment) and adds the
Chrono add-in.

		  
<div class="well">
<h4> <span class="glyphicon glyphicon-download-alt"></span> Download Chrono::SolidWorks add-in for SolidWorks</h4>
<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v2.08.exe"> Download Chrono::SolidWorks v.2.0.8 add-in for SolidWorks 2013 and higher (beta!)</a><br />

<h5> older versions:</h5>

<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v2.07.exe"> Download Chrono::SolidWorks v.2.0.7 add-in for SolidWorks 2013 and higher (beta!)</a><br />
<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v2.05.exe"> Download Chrono::SolidWorks v.2.0.5 add-in for SolidWorks 2013 and higher (beta!)</a><br />
<a href="http://www.projectchrono.org/assets/installers/ChronoEngine_SolidWorks_v2.01.exe"> Download Chrono::SolidWorks v.2.0.1 add-in for SolidWorks 2012</a><br />
</div>

<br>
<br>

---


Useful tools 
=============================

In the following we list download links for useful third-party tools and libraries that you might need if you want to build/use Project Chrono. If you plan to build Project Chrono from the source code in the GIT repository, some of them are mandatory (ex. the GIT client, the CMake tool, the compiler, etc.) but if you install the precompiled Project Chrono binaries, most are optional.


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


