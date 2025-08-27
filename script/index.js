
function getelemtn(id){
    const getElement= document.getElementById(id);
    return getElement;
}


let cartbutton = document.getElementsByClassName('cart-btn')

for (let cartbtn of cartbutton){
    cartbtn.addEventListener('click',function(){
        const productImage = cartbtn.parentNode.parentNode.children[0].children[0].src;

        const productTitile = cartbtn.parentNode.parentNode.children[1].children[1].innerText;

        const productPrice = cartbtn.parentNode.parentNode.children[1].children[2].children[0].innerText;
        
        const updatePrice = Number(getelemtn('total-p').innerText) + Number(productPrice);

        getelemtn('total-p').innerText = updatePrice;

        const updateCount =Number(getelemtn('total-c').innerText) +1;
        getelemtn('total-c').innerText = updateCount;

    let cartcontainer = getelemtn('cart-container')
    let newElemnt = document.createElement("div")
    newElemnt.innerHTML=`<div class="flex justify-between bg-gray-100 p-4 m-4 rounded-lg ">
                        <img src="${productImage}" alt="" class="w-10">
                        <div>
                            <h2>${productTitile}</h2>
                             <p>${productPrice}</p>
                        </div>
                    </div>`

    cartcontainer.append(newElemnt)
    })
}

 getelemtn('final-btn').addEventListener('click',function(){
    window.location.href='./payment.html'
 })




// getelemtn('kbtn-1').addEventListener('click',function(){
//     let price = getelemtn('pricek-1').innerText;
//     let totalPrice =getelemtn('total-p').innerText

//     let updateTotal = Number(price)+Number(totalPrice);

//     getelemtn('total-p').innerText = updateTotal;
    
//     let title = getelemtn('ptitle').innerText;

    // let cartcontainer = getelemtn('cart-container')
    // let newElemnt = document.createElement("div")
    // newElemnt.innerHTML=`<div class="flex justify-between bg-gray-100 p-4 m-4 rounded-lg ">
    //                     <img src="./assets/kitchen-1.png" alt="" class="w-10">
    //                     <div>
    //                         <h2>${title}</h2>
    //                          <p>${price}</p>
    //                     </div>
    //                 </div>`

    // cartcontainer.append(newElemnt)
// })