var classValid = document.getElementsByClassName("valid");
if (classValid.length > 0) {
    console.log(classValid[0].id + "的实验已经释放，赶紧去抢");
    alert(classValid[0].id + "的实验已经释放，赶紧去抢");

} else {
    console.log("暂无实验，请耐心等待");
    setTimeout(()=> {
        window.location.assign("http://202.112.139.62/Admin?CenterBoxUrl=/Equipment/AppointmentBoxIndex%3Fid%3Db1c96ead-08c2-4047-8ce6-3420d78150a7%26time%3D855")
    }, 10000);

}
