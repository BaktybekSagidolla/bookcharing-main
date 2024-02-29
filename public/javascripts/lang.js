
var dropdownToggle = document.querySelector('.dropdown-toggle');
    document.addEventListener('DOMContentLoaded', function() {
        var dropdownMenu = document.querySelector('.dropdown-menu');
        var dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
        dropdownToggle.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });


        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
 
                // var language = item.textContent.trim();

                // dropdownToggle.textContent = localStorage.getItem('language') == 'rus' ? 'Русский' : 'English';

                dropdownMenu.classList.remove('show');

            });
        });
    });

var arrLang= {
    'en':{
        'home': 'Home',
        'guide': 'Guide',
        'services': 'Books',
        'about': 'About',
        'news': 'News Page',
        'look': 'Looking',
        'to': ' to',
        'rentcar': 'rent book',
        'HowItsWork': 'How Its Work',
        'steps': "Rent With Easy 3 Steps",
        'location': "Choose A Location",
        'location_text': 'Choose a location convenient for you to pick up the book.',
        'pick_up': 'Rental Date',
        'pick_up_text': 'Choose a time convenient for you to pick up the book and a date for returning the book',
        'book': 'Book A Book',
        'book_text': 'Choose a book from the list and make a reservation.',
        'best_cars': 'Best Books',
        'topDeals': 'Our Top Deals',
        'fromTop':'From Top Rated Dealers',
        'RentNow': 'Rent Now',
        'ABOUTUS': 'ABOUT US',
        'About1': 'Who We Are and What We Do',
        'About2': 'We are a company specializing in book-sharing services, aiming to make reading more convenient, accessible, and community-oriented.',
        'About3': 'Our company is a team of professionals deeply committed to the idea of book-sharing to reduce the waste of resources and promote literacy and knowledge sharing within communities.',
        'news_titel': "GET THE WORLD'S LATEST BOOK NEWS",
        'news_titel2': "World's Leading Book News",


 
    },
    'rus':{
        'home': 'Главная',
        'guide': 'Гайд',
        'services': 'Книгы',
        'about': 'О Нас',
        'news': 'Новости',
        'look': 'Ищите ',
        'to': 'книгу для аренды',
        'rentcar': '',
        'HowItsWork': 'Как это работает',
        'steps': "Аренда книгы в 3 простых шагаx",
        'location': "Выберите Место",
        'location_text': 'Выберите место, где вам удобно забрать машину',
        'pick_up': 'Дата Аренды',
        'pick_up_text': 'Выберите время, которое вам удобно для получения машины, и дату возврата',
        'book': 'Cделайте Бронирование',
        'book_text': 'Выберите книгу из списка и сделайте бронирование.',
        'best_cars': 'Лучшие Книгы',
        'topDeals': 'Наши лучшие предложения',
        'fromTop':'От Лучших Дилеров',
        'RentNow': 'Забронировать',
        'ABOUTUS': 'О НАС',
        'About1': 'Кто мы и что мы делаем ',
        'About2': 'Мы — компания, специализирующаяся на услугах по обмену книгами, стремящаяся сделать чтение более удобным, доступным и ориентированным на сообщество.',
        'About3': 'Наша компания — это команда профессионалов, глубоко приверженных идее обмена книгами с целью сокращения бесполезной траты ресурсов и содействия повышению грамотности и обмену знаниями внутри сообществ.',
        'news_titel': 'ПОЛУЧИ ПОСЛЕДНИЕ КНИГОНОВОСТИ МИРА',
        'news_titel2': "Ведущие мировые книжные новости",

    },
    }


    document.addEventListener('DOMContentLoaded', function() {
        function setLanguage() {
            var lang = localStorage.getItem('language');
            if (!lang) {
                lang = 'en'; 
                localStorage.setItem('language', lang);
            }
            document.querySelectorAll('.lang').forEach(function(item) {
            var key = item.getAttribute('key');
                item.textContent = arrLang[lang][key];
        });
            dropdownToggle.textContent = localStorage.getItem('language') == 'rus' ? 'Русский' : 'English';
        }
    
        setLanguage();
    
        document.querySelectorAll('.translate').forEach(function(element) {
            element.addEventListener('click', function() {
                var lang = this.getAttribute('id');
                localStorage.setItem('language', lang);
                setLanguage();
                console.log(localStorage.getItem('language'));
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var newsPageLink = document.querySelector('.news-link');
        newsPageLink.addEventListener('click', function(event) {

            event.preventDefault();
            var lang = localStorage.getItem('language') || 'en'; 
            var redirectUrl = '/news/' + lang;
            window.location.href = redirectUrl;
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var newsPageLink = document.querySelector('.news-link');
        newsPageLink.addEventListener('click', function(event) {

            event.preventDefault();
            var lang = localStorage.getItem('language') || 'en'; 
            var redirectUrl = '/news/' + lang;
            window.location.href = redirectUrl;
        });
    });