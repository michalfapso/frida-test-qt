#!/bin/bash

LD_PRELOAD=../qt_helper_lib/libqt_helper_lib.so.1.0.0 frida-trace -i _ZN7QString6appendERKS_ -i _ZeqRK7QStringS1_ ../qt_test_console/qt_test_console
