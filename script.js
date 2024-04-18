// 獲取按鈕和下拉內容
var dropbtn = document.querySelector('.dropbtn');
var dropdownContent = document.getElementById('dropdownContent');

// 設定按鈕點擊事件
dropbtn.onclick = function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// 點擊其他地方時關閉選單
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
}
