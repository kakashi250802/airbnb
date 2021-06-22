let x = document.getElementsByClassName("header-search__item");
console.log(x);
// Lặp qua các phần tử có class là menu
for (let i = 0; i < x.length; i++) {

    // Lắng nghe sự kiện click
    // và đổi màu chữ thành màu đỏ

    x[i].onclick = function() {
        this.style.color = "red";
    };
}
// let y = document.getElementsByClassName("header-search__item");

// for (let i = 0; i < y.length; i++) {

//     // Lắng nghe sự kiện click
//     // và đổi màu chữ thành màu đỏ

//     if (y[i].style.color = "red") {
//         y[i].style.color = "green";

//     };
// }