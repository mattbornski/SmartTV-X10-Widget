#!/bin/bash

cp -R *.widget /devwidgets

killall Konfabulator
/usr/local/bin/Konfabulator --delete-data --Latest
/usr/local/bin/Konfabulator --Latest

