/* update image elemtns */

/* construct a list of element of certain type */
function list_element(typeName){
    // typeName = "img"
    list = document.getElementsByTagName(typeName);
    // console.log(list)
    return list;
}

// test_list = list_element("test");
// console.log(test_list[1])

function set_image_path(){
    list = list_element("img");
    for (let i = 0; i < list.length; i++){
        list[i].src=`images/${list[i].id}.png`;
    }
}

set_image_path();