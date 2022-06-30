console.log("-- 准备把本次访问计入统计 --");
var ajaxObj = new XMLHttpRequest();
ajaxObj.open('get', 'test.txt');
ajaxObj.send();
ajaxObj.onreadystatechange = function () {
    if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
        console.log(ajaxObj.responseText);
    }
}
