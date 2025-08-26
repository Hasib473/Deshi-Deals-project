
function getelemtn(id){
    const getElement= document.getElementById(id);
    return getElement;
}

getelemtn('kbtn-1').addEventListener('click',function(){
    let price = getelemtn('pricek-1').innerText;
    let totalPrice =getelemtn('total-p').innerText

    let updateTotal = Number(price)+Number(totalPrice);

    getelemtn('total-p').innerText = updateTotal;
    
    let title = getelemtn('ptitle').innerText;

    let cartcontainer = getelemtn('cart-container')
    let newElemnt = document.createElement("div")
    newElemnt.innerHTML=`<div class="flex justify-between bg-gray-100 p-4 m-4 rounded-lg ">
                        <img src="./assets/kitchen-1.png" alt="" class="w-10">
                        <div>
                            <h2>${title}</h2>
                             <p>${price}</p>
                        </div>
                    </div>`

    cartcontainer.append(newElemnt)
})