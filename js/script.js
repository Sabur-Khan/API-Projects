let loadPhone = async (serchProduct='10') => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${serchProduct}`);
    let data = await res.json();
    let phones = data.data;
    displayPhones(phones);
}

let showAll = document.getElementById('show-All');
let displayPhones = phones =>{
    
    let phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    if(phones.length > 10){
        showAll.classList.remove('hidden');
    }else{
        showAll.classList.add('hidden');
    }

    phones = phones.slice(0,9);

    phones.forEach(phone =>{
        let phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray shadow-xl p-5`;
        phoneCard.innerHTML = `

            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body justify-center">
                <h2 class="card-title text-black font-bold justify-center">${phone.phone_name}</h2>
                <p class="text-black">There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions justify-center">
                    <button onclick="handelShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>

        `
        phoneContainer.appendChild(phoneCard);
    })
    togglelodingSpnner(false)
}

let handelShowDetail = async (id) =>{
    let res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    let data = await res.json();
    let phone = data.data;
    shoePhoneDetails(phone)
}

let shoePhoneDetails = (phone) =>{
    let showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
        <div class="w-full py-10 mb-4 bg-white"><img class="mx-auto mb-10" src="${phone.image}" alt="${phone.name}"/></div>
        <h2 class="text-2xl block text-white mb-2 font-bold">Name: ${phone.name}</h2>
        <p class=" mb-2 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <p class=" text-white"><span class="font-bold">Storage:</span> ${phone.mainFeatures.storage}</p>
        <p class=" text-white"><span class="font-bold">Display:</span> ${phone.mainFeatures.displaySize}</p>
        <p class=" text-white"><span class="font-bold">Chipset:</span> ${phone.mainFeatures.chipSet}</p>
        <p class=" text-white"><span class="font-bold">Memory:</span> ${phone.mainFeatures.memory}</p>
        <p class=" text-white"><span class="font-bold">Slug:</span> ${phone.slug}</p>
        <p class=" text-white"><span class="font-bold">Release data :</span> ${phone.releaseDate}</p>
        <p class=" text-white"><span class="font-bold">Brand :</span> ${phone.brand}</p>
        <p class=" text-white"><span class="font-bold">GPS :</span> ${phone.others.GPS}</p>
    `;
    show_details_modal.showModal();
}

let serchBtn = () =>{
    togglelodingSpnner(true)
    let fieldInput = document.getElementById('serch-field')
    let fieldInputValue = fieldInput.value;
    loadPhone(fieldInputValue);
}

let togglelodingSpnner = (isLoading) =>{
    let lodingSpnner = document.getElementById('loding-spnner');
    if(isLoading){
        lodingSpnner.classList.remove('hidden')
    }else{
        lodingSpnner.classList.add('hidden')

    }
}


// let showAlls = document.getElementById('show-All')
// showAlls.addEventListener('click', function(){

// })
loadPhone()