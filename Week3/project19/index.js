const prev = document.getElementById('prev');
const next = document.getElementById('next');
const imagecontent = document.getElementById('imagecontent');

let count = 0;

function indexer(count) {
    if (count === 0) {
        imagecontent.innerHTML = `<img src="images/image1.png" height=300px width=300px style="border-radius:10px">`;
    }
    else if (count === 1) {
        imagecontent.innerHTML = `<img src="images/image2.png"  height=300px width=300px style="border-radius:10px">`;
    }
    else if (count === 2) {
        imagecontent.innerHTML = `<img src="images/image3.png" height=300px width=300px style="border-radius:10px">`;
    }
    else if (count === 3) {
        imagecontent.innerHTML = `<img src="images/image4.png" height=300px width=300px style="border-radius:10px">`;
    }
    else if (count === 4) {
        imagecontent.innerHTML = `<img src="images/image5.png" height=300px width=300px style="border-radius:10px">`;
    }
};

indexer(0);

prev.addEventListener('click',function() {
    count--;
    if (count < 0) {
        count = 4;
    }
    indexer(count);
});
next.addEventListener('click',function() {
    count++;
    if (count > 4) {
        count = 0;
    }
    indexer(count);
});
