#!/usr/bin/env bash
cd ~/TargetServer/express
pm2 delete all
npm install
pm2 start app.js