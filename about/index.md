---
layout: default
title: About
permalink: /about/
---

### What is {% include module.html first="PROJECT" second="CHRONO" %}?

{% include module.html first="PROJECT" second="CHRONO" %} is a multi-physics modelling and simulation infrastructure based on a platform-independent, open-source design. 
The core of {% include module.html first="PROJECT" second="CHRONO" %} is the Chrono::Engine middleware, a C++ object-oriented library which can be used to perform multi-physics simulations, including multibody and finite element analysis.
Among the other components of the {% include module.html first="PROJECT" second="CHRONO" %} ecosystems are: 

- <a href="https://api.projectchrono.org/development/group__vehicle.html">Chrono::Vehicle</a>, which provides support for vehicle modeling and simulation
- <a href="https://api.projectchrono.org/development/group__fsi.html">Chrono::FSI</a>, which provides support for Fluid-Solid Interaction problems
- <a href="http://projectchrono.org/pychrono">PyChrono</a>, which ports Chrono::Engine to Python
- <a href="https://api.projectchrono.org/development/group__pardisomkl__module.html">Chrono::MKL and Chrono::MUMPS</a>, which provide interfaces to the PARDISO sparse direct linear solvers
- Chrono::Parallel, a library for enabling multi-core parallel computation in Chrono
- <a href="https://api.projectchrono.org/development/group__distributed__module.html">Chrono::Distributed</a>, a library for enabling MPI distributed parallel computation in Chrono
- Chrono::Granular, a library for GPU-enabled granular dynamics simulation in Chrono
- <a href="https://api.projectchrono.org/development/group__cascade__module.html">Chrono::Cascade</a>, a library which provides CAD interoperability
- Chrono::SolidWorks, an add-in for SolidWorks&copy;, which can be used to export 3D models and geometries from a  CAD file into Chrono


<h4>Technical Leads</h4>
- Associate Professor <a href="/tasora/">Alessandro Tasora</a> - University of Parma, Italy
- Senior Scientist <a href="https://sbel.wisc.edu/staff/serban-radu/">Radu Serban</a> - University of Wisconsin-Madison, USA
- Professor <a href="https://sbel.wisc.edu/contact/">Dan Negrut</a> - University of Wisconsin-Madison, USA


<h4>Key Project Chrono Developers</h4>
- <a href="http://sbel.wisc.edu/People/">Luning Fang</a> - Student, University of Wisconsin-Madison, USA
- <a href="http:/sbel.wisc.edu/People/">Jason Zhou</a> - Student, University of Wisconsin-Madison, USA
- <a href="http://sbel.wisc.edu/People/">Ruochun Zhang</a> - Student, University of Wisconsin-Madison, USA
- <a href="http://sbel.wisc.edu/People/">Asher Elmquist</a> - Student, University of Wisconsin-Madison, USA
- <a href="http://sbel.wisc.edu/People/">Colin Vanden Heuvel</a> - Staff, University of Wisconsin-Madison, USA
- <a href="http://sbel.wisc.edu/People/">Mike Taylor</a> - PhD Student, University of Wisconsin-Madison, USA
- <a href="http://sbel.wisc.edu/People/">Simone Benatti</a> - PhD Student, University of Parma, Italy


<h4>Past developers</h4>
- Dr. Hammad Mazhar - former UW-Madison PhD student, now at NVIDIA
- Dr. Dan Melanz - former UW-Madison student, now at Energid
- Dr. Dario Mangoni - former University of Parma student, now at Altair
- Dr. Justin Madsen - former UW-Madison PhD student, now at Oshkosh Corporation
- Dr. Toby Heyn - former UW-Madison PhD student, currently at Epic Systems
- Dr. Arman Pazouki - former UW-Madison Assistant Scientist, now at Cal State University - Los Angeles
- Dr. Antonio Recuero - former UW-Madison Assistant Scientist, now at Idaho National Lab
- Jay Taves - former UW-Madison student, now at Accuray
- Milad Rakhsh - former UW-Madison PhD student, now at Roblox
- Nic Olsen - former UW-Madison student, now at Oshkosh
- <a href="https://andrewseidl.com/">Andrew Seidl</a> - former UW-Madison student, now at MapD
- Conlain Kelly - UW-Madison undergraduate student, now grad student at Georgia Tech
- Dylan Hatch - UW-Madison CS undergraduate student, now at Google


### HISTORY

The first version of the Chrono::Engine was developed in 1998 by [Prof. Alessandro Tasora](http://dynamics.eng.unipr.it/tasora) when he was a student at the Politecnico di Milano. It was the result of a thesis in Mechanical Engineering. Originally, Chrono::Engine was meant to be a multibody simulation tool for robotics and biomechanics applications.


Until 2002, Chrono::Engine was tightly linked to the Realsoft3D modeller. In 2002-2005 the software was gradually reorganized in the form of a standalone library, just like it is today. Alessandro started working in 2005 with [Professor Mihai Anitescu](http://www.mcs.anl.gov/~anitescu/) from University of Chicago and Argonne National Laboratories. Their work strengthened the handling of large frictional contact models in Chrono. 

[Professor Dan Negrut](http://homepages.cae.wisc.edu/~negrut/index.htm) joined the Project Chrono effort in 2007. The members of Simulation-Based Engineering Lab [\(SBEL\)](http://sbel.wisc.edu) at the University of Wisconsin-Madison have been active in its development ever since. 

Senior Scientist Radu Serban starting working on Project Chrono effort in 2013, at the time he joined the Simulation-Based Engineering Lab. 

We took the decision to release Chrono as open source in 2013, when we started to use the name {% include module.html first="PROJECT" second="CHRONO" %} to recognize the fact that this software infrastructure had become a multi-physics simulation engine. In 2014, the US Army decided to invest US $1.8 million over a two year period to further develop Chrono as an open source platform for physics-based modelling and simulation. Recent investments that will augment Chrono include US $1.0 million from National Science Foundation (2019-2023), US $0.4 million from US Army Research Office (2019-2023), US $1.5 million from U.S Army GVSC and ERDC (2019-2022). The current version of Chrono is 7.0 and it was released in November of 2021.

### Copyright and License
Chrono is copyrighted by {% include module.html first="PROJECT" second="CHRONO" %} and is released under a <a href="https://projectchrono.org/license-chrono.txt">BSD-3 license</a>.

