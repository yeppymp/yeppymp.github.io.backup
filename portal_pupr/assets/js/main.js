var app = new Vue({
    el: '#app',
    data: {
        menu_open: false,
        menus: db_menus,
        news: db_news,
        news_video: db_news_video,
        news_highlight: db_highlight_news,
        announcements: db_announcement,
        footers: db_footer,
        info_umum: db_info_umum,
        info_pendukung: db_info_pendukung,
        agenda: db_agenda,
        lpse: db_lpse,
        socmed: db_socmed,
        berita_unit_organisasi: db_berita_unit_organisasi,
        news_open: false,
        others_open: false,
        activeTab: 0,
        default_state: true,
        current_page: 'p-home',
        pagination_news: {
            total: 200,
            current: 7,
            perPage: 6,
            rangeBefore: 3,
            rangeAfter: 3,
            order: '',
            size: '',
            isSimple: false,
            isRounded: false
        },
        search_text: '',
        search: false,
        read_news: {},
        news_exist: true,
        show_scroll_top: false
    },
    methods: {
        toggleMenu: function () {
            this.menu_open = !this.menu_open
        },
        toggleOther: function () {
            this.others_open = !this.others_open
        },
        openNews: function () {
            var tabs = document.querySelector('.news .b-tabs');
            if (!tabs.classList.contains('show')) {
                tabs.classList.add('show')
                this.news_open = true
            }
        },
        closeNews: function () {
            var tabs = document.querySelector('.news .b-tabs');
            if (tabs.classList.contains('show')) {
                tabs.classList.remove('show')
                this.news_open = false
            }
        },
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
        onScroll: function () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            if (currentScrollPosition > 628) {
                this.show_scroll_top = true
            } else {
                this.show_scroll_top = false
            }
        }
    },
    watch: {
        'search_text': function (val, oldVal) {
            if (val == '') {
                this.search = false;
            } else {
                this.search = true;
            }
        }
    },
    computed: {
        filteredNews: function () {
            if (!this.search) {
                return db_news;
            } else {
                var self = this;
                return db_news.filter(function (n) {
                    return n.title.toLowerCase().indexOf(self.search_text.toLowerCase()) > -1;
                });
            }
        }
    },
    mounted: function () {
        let cp = document.getElementById('app')
        let splitted = cp.className.split(' ');
        this.current_page = splitted[0];
        if (this.current_page == 'p-read-news') {
            window.addEventListener('scroll', this.onScroll)
            let urlParams = new URLSearchParams(window.location.search);
            let read = this.news.filter(function (n) {
                return n.id == urlParams.get('id');
            });
            if (read.length == 1) {
                this.read_news = read[0];
                this.news_exist = true;
            } else {
                this.read_news = {};
                this.news_exist = false;
            }
        }
        var self = this;
        setTimeout(function () {
            self.default_state = false
        }, 1000);
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.onScroll)
    }
});

// Initialize all elements with hero carousel class.
var options = {
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 10000,
    loop: true,
    duration: 1000,
    pagination: true,
    navigation: false,
    navigationKeys: false,
};
try {
    const carousels = bulmaCarousel.attach('.hero-carousel', options);
    carousels[0].next()
} catch (error) {

}

// Initialize all elements with others carousel class.
var other_options = {
    pagination: false,
    loop: true,
    navigation: false,
};
const other_carousels = bulmaCarousel.attach('.other-carousel', other_options);
// other_carousels[0].next()
// To access to bulmaCarousel instance of an element
// const element = document.querySelector('.other-carousel');
// if (element && element.bulmaCarousel) {
//     // bulmaCarousel instance is available as element.bulmaCarousel
//     console.log(element)
// }

var slider_paginations = document.querySelectorAll('.slider-pagination');
slider_paginations.forEach(function (val) {
    val.classList.add('container');
});

var paginations = document.querySelectorAll('.section.others .slider-pagination .slider-page');
paginations.forEach(function (pag) {
    pag.addEventListener('click', function () {
        other_carousels[0].next();
        let current_active = document.querySelector('.section.others .slider-pagination .slider-page.is-active')
        current_active.classList.remove('is-active');
        if (!pag.classList.contains('is-active')) {
            pag.classList.add('is-active');
        }
    });
});

var lastScrollTop = 0;
var minibar = document.querySelector('.p-news .minibar')
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop || st == 0) {
        minibar.classList.remove('fixed');
    } else {
        minibar.classList.add('fixed');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);