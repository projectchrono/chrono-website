# projectchrono.org
To compile/generate this website locally:

install ruby 
- if using choclatey on windows: "choco install ruby"
- linux: use the package manager to install ruby
- osx should have ruby by default

install the jekyll ruby gem
- "gem install jekyll"
install the octokit ruby gem
- "gem install octokit"
you may also have to install jekyll-lunr-js-search
- "gem install jekyll-lunr-js-search"

in this directory run "bundle exec jekyll serve", this does several things:
- compiles the website into a "_site" directory (DO NOT COMMIT THIS INTO GIT, the .gitignore should take care of this)
- executes a webserver at "localhost:4000" that you can see in your web browser
- watches this directory for any changes and regenerates the website as needed

jekyll will keep watching and regenerating the website until it is closed

For projectchrono.org and api.projectchrono.org:

hookshot is running under a systemd script on projectchrono.org
`systemctl status hookshot.service` to check

To reset the hook:

systemctl restart hookshot.service

hookshot.js will execute a script which will pull the latest changes, compile the website and then copy it to the site directory. Note that only the "develop" branch is currently watched

For more information see [here](http://hamelot.co.uk/other/jekyll-github-hook/)
