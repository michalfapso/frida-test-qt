# Compiling
```
cd qt_helper_lib
qmake CONFIG+=release
make
```

```
cd qt_test_console
qmake CONFIG+=release
make
```

# Running
## Windows
```
set PYTHONIOENCODING=UTF-8
cd frida
d:\install\Python3.7\Scripts\frida-trace.exe  -i _ZN7QString6appendERKS_ -i _ZeqRK7QStringS1_ ..\qt_test_console\release\qt_test_console.exe >out.log 2>&1
```
or
```
D:\install\Python3.7\Scripts\frida.exe -o out.log --no-pause -l qt_api_monitor.js ..\qt_test_console\release\qt_test_console.exe
```
