/* event listener for image */
hear = document.body.querySelector("#album_list");
hear.addEventListener("click", handleClick);

/* handle click */
function handleClick(event) {
    // console.log(event);
    let target_album = event.target.alt;
    console.log(target_album);
    addAlbumToCart(target_album);
}

/* update image elemtns */

/* construct a list of element of certain type */
function list_element(typeName) {
    // typeName = "img"
    list = document.getElementsByTagName(typeName);
    // console.log(list)
    return list;
}

// test_list = list_element("test");
// console.log(test_list[1])

function set_image_path() {
    list = list_element("img");
    for (let i = 0; i < list.length; i++) {
        list[i].src = `images/${list[i].id}.png`;
    }
}

set_image_path();

let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false },
{ name: "Album 3", price: 9.99, addedToCart: false },
{ name: "Album 4", price: 19.99, addedToCart: false }];

/* add album to cart */
let cart = [];
function addAlbumToCart(newPurchase) {
    // let ulistelemnt = document.createElement("ul");
    // let listelement = document.createElement("li");
    // let imgelement = document.createElement("img");
    // for (let i = 0; i < albums.length; i++){
    //     if (newPurchase === albums[i].name){
    //         imgelement.src = `images/${newPurchase}`;
    //         imgelement.alt = newPurchase;
    //         // listelement.appendChild(imgelement);
    //         // ulistelemnt.appendChild(listelement);
    //         ulistelemnt.appendChild(imgelement);
    //         ulistelement.appendChild(albums[i].name);
    //         ulistelemnt.appendChild(albums[i].price);
    //         albums[i].addedToCart = true;

    //     }
    //     let scart = document.getElementsByTagName("hr");
    //     scart.appendChild(ulistelemnt);
    // }
    for (let i = 0; i < albums.length; i++) {
        item = [];
        if (newPurchase === albums[i].name) {
            if (!albums[i].addedToCart) {
                albums[i].addedToCart = true;
                item[0] = new Image();
                item[0].src = `images/${newPurchase}.png`;
                item[1] = newPurchase;
                item[2] = albums[i].price;
                cart.push(item);
            }
        }
    }
    console.log(cart);
    let scart = document.querySelector(".cart_list");
    console.log(scart);
    let ulistelemnt = document.createElement("ul");
    let listelement = document.createElement("li");
    listelemnt.appendChild(cart);
    ulistelemnt.appendChild(listelement);
    scart.appendChild(ulistelemnt);

    // if(newStudent.progName.toUpperCase() === "CIT")
    // {
    //     let CITList = document.querySelector("#CIT");
    //     CITList.appendChild(listelement);
    // }
    // else if (newStudent.progName === "CST")
    // {
    //     let CSTList = document.querySelector("#CST");
    //     CSTList.appendChild(listelement);
    // }
}

/* check if album already purchase */


// function checkIfStudentExists(newStudent) {
//     let studentExists = false;
//     //only add to the array if the student is not already enrolled
//     //1. loop through the array
//     //2. get acccess to each student's firstname and last name and compare them with what was entered
//     //3. update a boolean variable if the student exists
//     for (let stu of studentArray) {
//         if (
//             stu.firstName === newStudent.firstName && stu.lastName === newStudent.lastName
//         ) {
//             studentExists = true;
//             break;
//         }
//     }
//     return studentExists;
// }