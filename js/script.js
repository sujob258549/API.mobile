

const lodeApi = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const data = await res.json();
    const phones = data.data;
    allCard(phones);
    // console.log(phones)
}


const allCard = phones => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = '';


    // show all container..........................
    const showAll = document.getElementById('show-all');
    if (phones.length < 10) {
        showAll.classList.remove('hidden');

    };

    // fast 9phone show
    phones = phones.slice(0, 9);

    // forEach loop............
    phones.forEach(phone => {
        console.log(phone);
        const divContainer = document.createElement('div');
        divContainer.classList = `card  bg-gray-200 w-full  shadow-xl pt-5`;
        divContainer.innerHTML = `
       <figure><img src="${phone.image}" />
       </figure>
       <div class="card-body">
           <h2 class="card-title">${phone.brand}</h2>
           <h3 class="card-title">${phone.phone_name}</h3>
           <p>${phone.slug}</p>
           <div class="card-actions justify-end">
               <button class="btn btn-primary">Buy Now</button>
           </div>
       </div>
       `;

        console.log(phoneClass)
        mainContainer.appendChild(divContainer);


    });
// remove class of loading
    loading(false);
};

const inputButtons = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    console.log(inputValue);
    // coll loading
    loading(true);
    // coll api
    lodeApi(inputValue);

    inputField.value = '';
}




const loading = (istrue) =>{
    const loadingField = document.getElementById('loading-field');
    if(istrue){
        loadingField.classList.remove('hidden');
    }
    else{
        loadingField.classList.add('hidden');
    }
}



// lodeApi();

// const mainContainer = document.getElementById('main-container');
//     const divContainer = document.createElement('div');
//     divContainer.classList.add(`card bg-gray-200 shadow-xl`)
//     divContainer.innerHTML = `
//         <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /> </figure>
//         <div class="card-body">
//         <h2 class="card-title">Shoes!</h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div class="card-actions justify-end">
//             <button class="btn btn-primary">Buy Now</button>
//         </div>
//         </div>

//    `;
//     mainContainer.appendChild(divContainer);

