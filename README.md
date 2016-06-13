# neural-style-droplet

This repo will allow you to spin up a
Digital Ocean droplet preloaded with [jcjohnson/neural-style](https://github.com/jcjohnson/neural-style).

Usage:
- Setup
  - create a file `api-key.json` that contains your [Digital Ocean api key](https://cloud.digitalocean.com/settings/api/tokens).
  - Modify `cloud-config.yml` to include your [ssh public key](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2)
  - Modify `deploy.js` to adjust the size of the droplet
- Deploy
  - run `node deploy`
  - SSH into your droplet (I recommend [pearkes/tugboat](https://github.com/pearkes/tugboat))
  - you can monitor `/var/log/cloud-init-output.log` for the installation of dependencies. Alternatively, once all cloud-config has completed, a file `cloud-init-complete` will appear in the home directory
  - SCP your images to your droplet
  - `cd` into `~/neural-style` and run `th neural_style.lua -style_image <image.jpg> -content_image <image.jpg>` to try it out!
