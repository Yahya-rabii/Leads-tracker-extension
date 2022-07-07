let tab = [];
let index = 0;
let x = false;
let j = "";
let t = 0;
let h = 1;
let l = "";
let d = 0;
let url = ""


if (localStorage.length > 1) {

    for (let i = 0; i < localStorage.length; i++) {


        tab.push(window.localStorage.getItem(i));

    }
    tab.shift();
    for (let i = 0; i < tab.length; i++) {
        document.getElementById("vals").innerHTML += ' <br> ' + "<li > <a target='_blank' href=" + tab[i] + "> " + tab[i] + "</a> </li>";
    }
} else {

    l = "0";
    console.log(l)
    localStorage.setItem(0, l);
}




document.getElementById("input-btn1").addEventListener("click", function () {


    for (let i = 0; i < tab.length; i++) {
        const element = tab[i];

        if (document.getElementById("input-el").value == element) {
            alert("LINK ALREADY EXIST")
            exit;
        }

    }

    if (tab.length > 0) {
        tab.push(document.getElementById("input-el").value);
        d = parseInt(window.localStorage.getItem(0)) + 1;
        const element = tab[d - 1]
        document.getElementById("vals").innerHTML += ' <br> ' + "<li > <a target='_blank' href=" + element + "> " + element + "</a> </li>";
        console.log(tab);
        window.localStorage.setItem(d, element)
        window.localStorage.setItem(0, d)
    } else {
        tab.push(document.getElementById("input-el").value);
        const element = tab[index]
        document.getElementById("vals").innerHTML += ' <br> ' + "<li > <a target='_blank' href=" + element + "> " + element + "</a> </li>";
        console.log(tab);
        window.localStorage.setItem(1, element)
        window.localStorage.setItem(0, 1)

    }
});



j = "";
index = 0;

document.getElementById("input-btn2").addEventListener("click", function () {



    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function (tabs) {
        url = tabs[0].url;
        for (let i = 0; i < tab.length; i++) {
            const element = tab[i];

            if (url == element) {
                alert('tab already saved !! ');
                exit;

            }

        }

        if (tab.length > 0) {

            console.log(url)
            tab.push(url);
            d = parseInt(window.localStorage.getItem(0)) + 1;
            const element = tab[d - 1]
            document.getElementById("vals").innerHTML += ' <br> ' + "<li > <a target='_blank' href=" + element + "> " + element + "</a> </li>";
            window.localStorage.setItem(d, element)
            window.localStorage.setItem(0, d)


        } else {

            console.log(url)
            console.log(url)

            tab.push(url);
            const element = tab[index]
            document.getElementById("vals").innerHTML += ' <br> ' + "<li > <a target='_blank' href=" + element + "> " + element + "</a> </li>";
            window.localStorage.setItem(1, element)
            window.localStorage.setItem(0, 1)

        }


    });





    console.log(tab);


});

index = 0;
j = "";

document.getElementById("input-btn3").addEventListener("click", function () {

    document.getElementById("vals").innerHTML = '';
    document.getElementById("input-el").value = '';
    tab = [];
    index = 0;
    localStorage.clear();
    localStorage.setItem(0, 0);
})