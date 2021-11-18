const btn= document.querySelectorAll("button")
// chỗ button có
// console.log(btn) chạy F12 vô scoure thử xem có hk
btn.forEach(function(button,index){

    // console.log(button,index) 
    button.addEventListener("click",function(event){

        //Lưu ý: nếu bên trong có nhiểu thẻ giống thì phải đặt class hoăc id cho nó
        // VD button chỉ có 1 button thêm vào giỏ hàng nên lấy button luôn. Còn nếu nhiều phải đặt class
        // addEventListener sự kiện click
        var btnItem = event.target
        // event.target lick vào thì chọn phần tử đó
        var product= btnItem.parentElement
        //đặt thêm 1 biến và chọn parentElement: là thẻ cha của nó
        // console.log(product)
        var productImg=product.querySelector("img").src
        // querySelector vì mỗi phần tử chỉ có 1 ảnh
        //  .src lấy link ảnh
        // console.log(product)

        var productName=product.querySelector("H2").innerText
        // đi vào lấy thẻ h1 luôn vì chỉ có 1 thẻ h1
        var productPrice=product.querySelector("span").innerText
        // console.log(productImg,productName,productPrice) 
        //  không dùng hàm này vì ta đã add nó vô cart 
        addcart(productImg,productName,productPrice)


    })


})
// function này mới thực thi
function addcart(productImg,productName,productPrice){
    //tạo 1 thr tr trước
    var addtr= document.createElement("tr")
    // cách 1:
    // var trcontent=productPrice
    // thêm số tiền để hiểu





    //cách 2: đem thẻ tr bên index qua, để trong kép đơn và cùng trên 1 hàng
    //thêm biến vào thì có dấu đơn và + r để bên trong
   
    // var trcontent='  <tr><td style="display: flex; align-items: center;"><img style="width: 70;height: 70px;" src="'+productImg+'" alt="">'+productName+'</td><td> <p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td></tr>'
  
  
  
    // thêm
// đây là cách nếu thêm 1 phần tử giống vào giỏ hàng thì nó sẽ hiện là đã có trong giỏ hàng
var cartItem=document.querySelectorAll("tbody tr")

for(var i=0; i<cartItem.length;i++){
    var productT=document.querySelectorAll(".title")
    if(productT[i].innerHTML==productName){
        alert("Sản phẩm đã có trong giỏ hàng")
        return
    }
}


var trcontent='  <tr><td style="display: flex; align-items: center;"><img style="width: 70;height: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td> <p><span class="price">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
// thêm
   
    addtr.innerHTML=trcontent
    // innerHTML là nội dung bên trong
var cartTable= document.querySelector("tbody")

// console.log(cartTable)
cartTable.append(addtr)
// append là  thêm biến addtr vào trong tbody thêm tr vào dưới cùng


//tính tổng
//nếu thêm 1 sản phẩm vào giỏ hàng thì sẽ gọi nó ra
carttotal()
deleteCart()

}





//---------------totalprice--------------------
function carttotal(){
    var cartItem=document.querySelectorAll("tbody tr")
    // nếu thêm 1 sp thì 1 thẻ tr còn 2 thì 2 tr
    //đi từ thẻ tbody để nó hiểu tr bên trong nếu k thì phải đặt class
// console.log(carttotal.length) nó sẽ đếm cho ta biết bao nhiêu thẻ tr
//có 5 sản phẩm thì chạy từ 0 đến 4
var totalC=0
//totalC là tổng lại hết
for(var i=0; i<cartItem.length;i++){
var inputValue= cartItem[i].querySelector("input").value
// ta sẽ lấy thẻ giá nhân số lượng
var productPrice=cartItem[i].querySelector(".price").innerHTML
//giá chấm innerHTML hoặc innerText đều được
// console.log(productPrice)
totalA=inputValue*productPrice*1000
// totalA là lấy số lượng nhân đơn giá
// totalB=totalA.toLocaleString('de-DE')
//totalB là để có dấu chấm giữa số
totalC= totalC + totalA
// totalD=totalC.toLocaleString('de-DE')
// hàm này hùng để có .000 phía sau

}

var cartTotalA=document.querySelector(".price-total span")
// .price-total do mình đặt cho nó là class rồi nên gọi lun
//.price-total span đi vào thẻ span
// cartTotalA.innerHTML=totalC


cartTotalA.innerHTML=totalC.toLocaleString('de-DE')


// // thêm khi lick vào giỏ hàng
// var cartPrice=document.querySelector(".price-icon span")
// cartPrice.innerHTML=totalC.toLocaleString('de-DE')
// thêm

 inputchange()

}
// -------------------------Delete cart------------------------------------

function deleteCart(){
    //deleteCart() phải lên thêm vào để gọi đến deleteCart()
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var productT=document.querySelectorAll(".cart-delete")
       productT[i].addEventListener("click",function(event){
           var cartDelete=event.target
           var cartitemR=cartDelete.parentElement.parentElement
           //2 lầnparentElement mới ra được thẻ tr
           //1 lần ra thẻ td
           cartitemR.remove()
           carttotal()
       })
        }
    }

// --------thay đổi số lượng và xóa thì cập nhật số tiền lại--------------------------------------
function inputchange(){
    // inputchange() phải lên totalPrice để gọi đến inputchange()
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        //vòng lặp nó sẽ lặp các thẻ chờ cartItem:thẻ chờ
        var inputValue=cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){

      })



}
}

//---------thêm-------------------
// const cartbtn=document.querySelector(" .fa-times")
// const cartshow=document.querySelector(" .fa-shopping-cart")
// cartshow.addEventListener("click",function(){
//     document.querySelector(".cart").style.right="0"
// })
// const cartbtn=document.querySelector(" .fa-shopping-cart")
// cartshow.addEventListener("click",function(){
//     document.querySelector(".cart").style.right="-100%"
// })