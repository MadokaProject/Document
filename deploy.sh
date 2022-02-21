#!/bin/bash
git add . && git commit -m $1 && git push
npm run docs:build
cp -rvf /home/coder/project/Madoka-docs/docs/.vuepress/dist/* /home/coder/project/madoka.colsrch.cn