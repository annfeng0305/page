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
document.addEventListener('DOMContentLoaded', function() {
    const back = document.getElementById('back');

    // 监听页面滚动事件
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            back.style.display = "block";
        } else {
            back.style.display = "none";
        }
    }

    // 当点击按钮时，滚动到页面顶部
    back.addEventListener('click', function() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE 和 Opera
    });
});
