#!/bin/bash
set -x
exec > >(tee /home/ubuntu/init.log) 2>&1

export HOME=/home/ubuntu

sudo chown -R ubuntu:ubuntu $HOME

# Torch
git clone https://github.com/torch/distro.git $HOME/torch --recursive
cd $HOME/torch
bash install-deps
./install.sh
# echo ". /home/ubuntu/torch/install/bin/torch-activate" >> /home/ubuntu/.bashrc
source $HOME/.bashrc
$HOME/torch/install/bin/torch-activate

# loadcaffe
source $HOME/.bashrc
$HOME/torch/install/bin/luarocks install loadcaffe

# neural-style
cd $HOME
git clone https://github.com/jcjohnson/neural-style.git
cd $HOME/neural-style
sh models/download_models.sh

# Complete
echo "===== INIT COMPLETE ====="
