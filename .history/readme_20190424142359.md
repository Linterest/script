### 抢实验Chrome插件配置

##配置要抢的网页
1.在script.js中将window.location.assign("URL")中的URL替换成你需要刷新的网址，目前仅支持北航实验系统
2.在manifest.json中将"matches": ["URL"],中的URL替换成你需要刷新的网址，目前仅支持北航实验系统

##导入Chrome扩展程序
打开Chrome->菜单->更多工具->扩展程序->加载已解压的扩展程序，然后找到script文件的路径，点击确认，此时，打开对应的网页就可以发现正在运行此脚本。
若script有更新，则在扩展程序页面点击重新加载即可。
