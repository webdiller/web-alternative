const doc = document;

const accordionModule = (function() {
    var acc = document.getElementsByClassName("how__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}());


const modalModule = (function(parentEl, btnElements, closeElement) {
    let arrEl = doc.querySelectorAll(btnElements);
    let modalHowTitle = doc.getElementById('modalHowTitle');
    let modalHowText = doc.getElementById('modalHowText');
    addOverlay();
    var overlay = doc.getElementById('modalHowOverlay');

    // buttons
    arrEl.forEach(element => {
        element.addEventListener('click', function() {
            parentEl.classList.add('active');
            overlay.classList.add('active');
            modalHowTitle.innerText = this.getAttribute('data-title');
            modalHowText.innerText = this.getAttribute('data-descr');
        });
    });

    // overlay
    overlay.addEventListener('click', function() {
        this.classList.remove('active');
        parentEl.classList.remove('active');
    })

    // close
    closeElement.addEventListener('click', function() {
        parentEl.classList.remove('active');
        overlay.classList.remove('active');
    });

    // add overlay
    function addOverlay() {
        let overlay = doc.createElement('div');
        overlay.classList.add('modal-how__overlay');
        overlay.setAttribute("id", "modalHowOverlay");
        doc.body.appendChild(overlay);
    }
}(modalHow, '.how-road__item', modalHowClose));


const menuModule = (function() {
    let headerMenuBtn = doc.getElementById('headerMenuBtn'),
        headerMenuBar = doc.getElementById('headerMenuBar'),
        headerMenuClose = doc.getElementById('headerMenuClose'),
        headerOverlay = doc.getElementById('headerOverlay'),
        headerWrapper = doc.getElementById('headerWrapper'),
        headerNav = doc.getElementById('headerNav');

    headerMenuBtn.addEventListener('click', function() {
        headerMenuBar.classList.toggle('disabled');
        headerMenuClose.classList.toggle('active');
        headerOverlay.classList.toggle('active');
        doc.body.classList.toggle('disable-scroll');
    });

    if (window.matchMedia("(min-width: 992px)").matches) {
        headerWrapper.appendChild(headerNav);
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
        headerOverlay.appendChild(headerNav);
    }

    window.addEventListener("resize", function() {
        let w = this.innerWidth;
        if (w >= 997) {
            headerWrapper.appendChild(headerNav);
        } else if (w <= 997) {
            headerOverlay.appendChild(headerNav);
        }
    });



}());


const featuresModule = (function() {
    let itemContainer = doc.getElementById('featuresDItems');
    let items = doc.querySelectorAll('#featuresDItems .features-d-item');
    let list = doc.querySelectorAll('#featuresDList a');

    list.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            let x = this.href.split('#');
            let path = x[x.length - 1];
            removeClasses();
            this.classList.add('active');
            $(`#${path}`).addClass('active');
        });
    });

    function removeClasses() {
        items.forEach(element => {
            element.classList.remove('active');
        });
        list.forEach(element => {
            element.classList.remove('active');
        });
    }
}());


const clientsModule = (function(elementSelector) {

    let options = {
        wrapAround: true,
        center: false,
        cellAlign: 'left',
        arrowShape: {
            x0: 25,
            x1: 60,
            y1: 35,
            x2: 65,
            y2: 30,
            x3: 35
        },
        on: {
            ready: function() {

                let clientsCarouselNav = doc.getElementById('clientsCarouselNav');
                let prev = doc.querySelector('#clientsCarouselSlider .flickity-prev-next-button.previous');
                let next = doc.querySelector('#clientsCarouselSlider .flickity-prev-next-button.next');

                clientsCarouselNav.appendChild(prev);
                clientsCarouselNav.appendChild(next);

                setOverflow(true, '#clientsCarouselSlider');
            }
        }
    }

    function setOverflow(value = false, selectorSlider) {
        if (value === false) {
            $(`${selectorSlider} .flickity-viewport`).css('overflow-y', 'hidden');
        } else {
            $(`${selectorSlider} .flickity-viewport`).css('overflow-y', 'visible');
        }
    }

    $(`${elementSelector} `).flickity(options);

}('#clientsCarouselSlider'));


const feedbackFormModule = (function() {
    let form = doc.getElementById('feedbackForm'),
        feedbackFormName = doc.getElementById('feedbackFormName'),
        feedbackFormPhone = doc.getElementById('feedbackFormPhone'),
        feedbackFormText = doc.getElementById('feedbackFormText'),
        feedbackFormAgree = doc.getElementById('feedbackFormAgree'),
        feedbackFormBtn = doc.getElementById('feedbackFormBtn'),
        feedbackFormAlert = doc.getElementById('feedbackFormAlert'),
        feedbackFormAlertTitle = doc.getElementById('feedbackFormAlertTitle'),
        feedbackFormAlertDescr = doc.getElementById('feedbackFormAlertDescr'),
        feedbackFormAlertBtn = doc.getElementById('feedbackFormAlertBtn');

    var res = {};
    var alertData = {
        succes: {
            title: "Отправлено",
            descr: "Спасибо за отправку",
            button: "Ок"
        },
        error: {
            title: "Заполните поля",
            descr: "Одно или несколько полей не заполнены",
            button: "Ок"
        },
    }

    feedbackFormBtn.addEventListener('click', function() {
        res.name = feedbackFormName.value;
        res.phone = feedbackFormPhone.value;
        res.text = feedbackFormText.value;
        res.agree = feedbackFormAgree.checked;
        console.log({ res });
    });

    function isFieldsEmpty() {

    }

    $(".lazyload").lazyload();

}());
