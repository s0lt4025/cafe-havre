//要素を作成する作業
/*ol要素を扱いやすいEasily変数化する
li要素の最後の子供を扱いやすいEasily変数化する*/
/*queryselector(値)*/
var ol=document.querySelector(".hero ol")
var lastItem=document.querySelector("li:last-child")

//処理を作成する作業
function slideshow() {
    var lastSlide = ol.querySelector("li:last-child");

    lastSlide.classList.add("active");

    setTimeout(function() {
        var clone = lastSlide.cloneNode(true);
        clone.classList.remove("active");
        ol.prepend(clone);
        lastSlide.remove();

        slideshow();
    }, 5000);
}

/*
cloneNode()
li要素の最後の子供を複製する*/

/*
classList.remove()
li要素にアニメーションしてたことを忘れさせる*/

/*prepend()
複製した要素を先頭に挿入する*/

/*remove()
複製後に削除する*/

/*classList.add()
新しく最後の子供になったli要素にアニメーションする指示を出す*/

//きっかけを作成する作業
setTimeout(slideshow, 5000);

//transitionend
/*アニメーションが終わったら*/
//setTimeout
/*一定の時間が経過したら*/
