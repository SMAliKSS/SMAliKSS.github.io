(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{116:function(e,t,o){var content=o(169);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(66).default)("a964fc38",content,!0,{sourceMap:!1})},117:function(e,t,o){var content=o(171);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(66).default)("1fe7d6d2",content,!0,{sourceMap:!1})},131:function(e,t,o){e.exports=o(132)},155:function(e,t,o){"use strict";o.r(t);o(68),o(40),o(41),o(93),o(46);t.default=function(e){var t=e.isHMR,o=e.app,n=e.store,r=e.route,l=e.params,c=e.error,d=e.redirect,h=o.i18n.fallbackLocale;if(!t){null!=l&&l.lang||(l.lang=n.state.locales.find((function(e){if(r.fullPath.indexOf(e)>-1)return e})));var f=l.lang||h;if(!n.state.locales.includes(f))return c({message:"This page could not be found.",statusCode:404});if(n.commit("SET_LANG",f),o.i18n.locale=n.state.locale,f===h&&0===r.fullPath.indexOf("/"+h)){var m="^/"+h+(0===r.fullPath.indexOf("/"+h+"/")?"/":""),y=new RegExp(m);return d(r.fullPath.replace(y,"/"))}}}},168:function(e,t,o){"use strict";o(116)},169:function(e,t,o){var n=o(65)(!1);n.push([e.i,".button[data-v-04f14073]{background:var(--button);color:var(--button-text);border-radius:.25rem;padding:0 2rem;transition:background .2s cubic-bezier(1,0,0,1);height:4.6rem;border:2px solid transparent;line-height:calc(4.6rem - 2px);display:inline-block;vertical-align:middle;text-align:center;font-size:0}.button[data-v-04f14073]:hover{background:var(--button-hover)}.button .label[data-v-04f14073]{vertical-align:middle;display:inline-block;white-space:nowrap;font:500 1.4rem/1 var(--font);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:767px){.button .label[data-v-04f14073]{font-size:1.2rem}}",""]),e.exports=n},170:function(e,t,o){"use strict";o(117)},171:function(e,t,o){var n=o(65)(!1);n.push([e.i,".site-error[data-v-3738afeb]{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;min-height:calc(100vh - 6.5rem)}.site-error .error[data-v-3738afeb]{font:400 3.6rem/4.4rem var(--font);width:80%;max-width:20.5em;margin:.75em auto 0;color:var(--heading-color)}@media (max-width:767px){.site-error .error[data-v-3738afeb]{font-size:2.4rem;line-height:3rem;width:calc(100% - 8rem)}}.site-error .button[data-v-3738afeb]{position:absolute;display:block;text-align:center;margin-bottom:4rem;bottom:0}",""]),e.exports=n},174:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return n})),o.d(t,"mutations",(function(){return r}));o(40),o(41);var n=function(){return{locales:["en","fa"],locale:"en",modalTrigger:!1,colors:{light:{"background-color":"#ffffff","background-color-secondary":"#f3f5f4","text-color":"rgba(0, 0, 0, 0.67)","heading-color":"rgba(0, 0, 0, 0.87)",link:"#5f6368","link-hover":"#202124",button:"#1a73e8","button-hover":"#4185f4","button-text":"#ffffff","button-icon":"#f7f7f7","button-icon-hover":"#f2f2f2","footer-color":"#f8f9fb","border-color":"#ddd",mask:"rgba(0, 0, 0, 0.1)","light-glow":"#f0c420","settings-default":"#5f6368","settings-pillar-activated":"#5f6368","logo-color":"rgba(70, 70, 70, 0.75)","logo-linkedin":"#0077b7","logo-npm":"#231f20","logo-stackoverflow-task":"#ff9800","logo-stackoverflow-stack":"#757575"},dark:{"background-color":"#091a28","background-color-secondary":"#071521","text-color":"rgba(255, 255, 255, 0.5)","heading-color":"rgba(255, 255, 255, 1)",link:"#fdf9f3","link-hover":"#41b38a",button:"#158876","button-hover":"#41b38a","button-text":"#ffffff","button-icon":"#f7f7f7","button-icon-hover":"#f2f2f2","footer-color":"#071521","border-color":"#ddd",mask:"rgba(255, 255, 255, 0.1)","light-glow":"#f0c420","settings-default":"#5f6368","settings-pillar-activated":"#f3f5f4","logo-color":"rgba(255, 255, 255, 1)","logo-linkedin":"#0077b7","logo-npm":"#231f20","logo-stackoverflow-task":"#ff9800","logo-stackoverflow-stack":"#757575"}}}},r={SET_LANG:function(e,t){e.locales.includes(t)&&(e.locale=t)},SET_MODALTRIGGER:function(e,t){e.modalTrigger=t}}},176:function(e){e.exports=JSON.parse('{"buttons":{"close":"Close","goHome":"Go back to home","ok":"OK, got it","start":"Let\'s get started"},"contents":{"about":{"main":"Hi there, my full name is Seyed Mohammad Ali Kazemi Sheykh Shabani, which is too long but I like it. But for the sake of its longness, I chose a nickname for myself which is SMAKSS or a simpler version that I like the most is Max. I assume my self a software engineer, I assumed it because I know nothing about it. Before I assumed myself a software engineer I used to play video games a lot, so I was kind of gamer 🎮. I learnt about PC, games, and other stuff since I was a lil kid (2-3 years old). Then nothing in the world was more desirable than games for me. I did not enjoy school at all, even the university years were more awful. I studied computer science at the university, I didn\'t have a clue about it and what is it at all, but with all of these disasters, I managed to start programming and since the second year of the undergraduate study (2013) I start working. In those days I just knew how to copy-paste previous codes that I have to create a new thing 😁😁. It may seem weird in the first place but honestly, it worked almost all the time. Later on, I managed to work with some utility software like Photoshop and Illustrator, and you may not believe that but I just work with them like how I code 😂. With all the applicable skills (Who cares about them 😎) I manage to work with some startups and even start my own one with a bunch of comrades (I\'m not a communist myself but I found Marx and some of the idea behind it reasonable). In all of those years, I struggle a lot and tried to make a better version of myself and finally, I could take an internship in Microsoft as a Software Engineer, it was about three though months of my life, but I learnt a lot in those months more than all the previous years. After that, I applied for some opportunities in that company and could pass the initial test in some of them but since I always loved gaming stuff I rather worked with ATG (Advanced Technology Group) team. I always enjoyed being into new things and experience some new stuff, so I decide to get into web developing area, I worked with WordPress before but I knew nothing about the whole thing. Like before I start educating myself with online courses, I really wanted to get into this area so I tried to apply some application in the Microsoft itself but it turns out I knew nothing about web developing at all, so I couldn\'t pass the initial test. Those days were too exhausting, after working with Microsoft for about one year I just resigned and quit my job (I was a kiddo and I missed those days a lot 😌). I was in the middle of nowhere but I decide to start working on something so I just joined some new startup in Iran and tried to learn how to develop a real web application, as I said I knew nothing about it but I start working on a health application as a Full-Stack web developer I call it Full-Stack because I worked with 3 different stacks, one in the Frontend, one in the Backend, and another in Serverside. I worked with those tools for about 8 months, I learnt a lot about web application but I didn\'t really love what I did there, all of those stuff sometimes made me uncomfortable and overwhelming so I resigned and quit my job once again. But this time I knew what I\'m going to do I just wanted to work with a single side of the application either Backend, Frontend or Server. So I applied for some other companies for each of the them separately. I do not know how to call it maybe fate or whatever, but I suddenly found myself within a cool-ish company as a Frontend Engineer, since then I obsessed with Frontend tools and I like to continue my journey in this area. And that is what it is."},"cookie":"I have to admit it, I\'m using cookie to provide a better user experience.","info":{"description":"First of all, thanks for paying me a visit. Well, unlike people common opinion, designing and implementing a website is hard, but doing all this on your own and producing a cool result is damn hard. I\'m not saying this is very cool (Who cares maybe it is!) but I tried my best on it. I built this all mostly for sharing my insights, also a showcase, and sharing new ideas. The whole source code of it (Its got many bugs right now 😁), is available on my GitHub page, so if you enjoyed it, you can fork it and create your own exclusive one, then you can buy me a coffee in return (Link is available in the very bottom of each page).","ps":"P.S.: You also may ask what the heck is going on with the quote thing? I have to say it is fun, cool, and maybe insightful. In addition, it is provided by","quotable":"Quotable service.","title":"You may ask what are all these about?"}},"descriptions":{"about":"Know more about me.","index":"Hi there, I\'m Max a Software Engineer: Frontend, who seeks to move mankind one step forward. I will try to share my personal insights here.","stuff":"Well, this is about, getting to know my stuff."},"errors":{"404":"It\'s a shame, I can\'t find the page that you\'re looking for.","error":"Oops, it seems an error occurred."},"links":{"about":"About Me","donate":"Buy Me a Coffee","english":"English","persian":"Farsi","stuff":"Stuff","blog":"Blog"},"main":{"content":"You can check each pillar to know more about me and my stuff.","header":{"partOne":"Get to Know,","partTwo":"My Stuff"},"pillars":{"comingSoon":"Will be available soon!","content":{"summary":"My background is in computer science, and I\'ve always tried to create stuff. I am radically passionate about new things, especially in technology. I believe good people within a good and smart team is in a higher place in the order of power than a successful product. I love getting my hands dirty to create a seamless app to bring joy to whoever using it. Usually, I\'m overwhelmed at work, but I do like hiking, reading, video games, music, movies, and dogs.","summaryFinalThing":"I enjoy the path that I\'ve taken, and I\'m looking forward to the next step, I hope that I can take one small step for mankind."},"experience":{"shopify":{"company":"Shopify","description":"As a seasoned front-end developer, I have a rich history of designing, developing, and optimising Shopify applications. I\'ve been at the forefront of creating various applications, from customisable product pages to sophisticated analytics tools. I pride myself on my proficiency with multiple technologies, including jQuery, SCSS, React, Remix, Svelte, NPM Modules, D3.js, and Polaris. One of my proudest achievements was transitioning a legacy jQuery e-commerce platform to a cutting-edge React.js framework, resulting in marked performance and user experience improvements. I\'ve also pioneered efficient architectural approaches for internal modules using Shopify CLI and have taken the initiative to publish standalone NPM modules to enhance compatibility with other Shopify add-ons. Always looking to innovate, I introduced a more efficient UX testing process for marketing platforms by integrating Cypress. Furthermore, I\'ve built robust CI/CD pipelines for front-end applications to ensure smooth and dependable code deployment, leveraging tools like danger.js and PostCSS.","duration":"Mar 2022 - Current","location":"Vancouver, British Colombia, Canada","role":"Frontend Engineer","stack":"JavaScript · Cascading Style Sheets (CSS) · Computer Science · jQuery · React.js · HTML5 · SASS · Node.js · JavaScript Libraries"},"coin-plus":{"company":"CoinPlus","description":"CoinPlus is a financial technology company that offers Blockchain-related solutions to institutional and individual investors. I\'ve worked on two different products, Sarrafeh and TexToken and was responsible for analyzing and implementing new features and managing the front-end team and their work. I\'ve Built two separate apps for each product from the ground up. I also Scaled up the existing features on both the client and admin sides. Upgrade and maintain the old admin panel to be faster.","duration":"Dec 2020 - Jun 2022","links":{"coinPlus":{"name":"CoinPlus"},"sarrafeh":{"name":"Sarrafeh"},"texToken":{"name":"TexToken"}},"location":"Tehran, Iran","role":"Frontend Engineer","stack":"Software Infrastructure · JavaScript · Cascading Style Sheets (CSS) · React.js · HTML5 · SASS · Node.js · JavaScript Libraries"},"sana-gostar-sabz":{"company":"Sana Gostar Sabz","description":"Sana was the parent company of three different products like home services, transportation, and big data manipulation. I have worked on two different products called the Ubaar and the Achareh. I could maintain and scale up the codebase and make the old codebase work faster. I also create two different web apps for each product with over 2+m users, exclusive PWA for the Achareh experts, and some brand new landings and many more cool features for both the Ubaar and the Achareh.","duration":"Jan 2019 - Jan 2021","links":{"sanaGostarSabz":{"name":"Sana Gostar Sabz"},"achareh":{"name":"Achareh"},"ubaar":{"name":"Ubaar"}},"location":"Tehran, Iran","role":"Frontend Engineer","stack":"Apache · Software Infrastructure · JavaScript · Cascading Style Sheets (CSS) · jQuery · PHP · Vue.js · React.js · HTML5 · SASS · Nuxt.js · Redux.js · Embedded JavaScript (EJS)"},"pergas-it-solutions":{"company":"Pergas IT Solutions","description":"Pergas IT Solutions is an IT department that works beneath the Pergas Teb (Lá farrerr) company. Its purposes focused on web applications for the corporation. As a frontend engineer, I focused on managing and leading frontend team members, and also delivering and designing a best-suited platform that works fine for the colleagues and other related users that fulfil their job through the platform.","duration":"Dec 2019 - Apr 2020","location":"Tehran, Iran","role":"Frontend Engineer / Frontend Chapter Lead","stack":"Material-UI · JavaScript · Cascading Style Sheets (CSS) · Team Leadership · React.js · HTML5 · SASS"},"smart-lancer":{"company":"SmartLancer","description":"SmartLancer consultancy group has been created to enhance student and entrepreneurs\' daily life and it was consist of some different products such as Vianbo and SmartLancer. SmartLancer was a group of consultancy that tries to bring new ideas and make it more convenient for local usage and help the new entrepreneurs and businesses to grow faster. Here at Smartlancer, I tried to make it easier to use and help the local entrepreneurs and startups to get to know the entire business ecosystem more easily. Vianbo is a platform that tries to serve students around the globe by bringing their needs on the line with the help of a social electronic board (SEB). Since I was a student those days, I\'m always tried to help others with my proficiency. We\'ve started our first branch of our SEB at the Politecnico di Milano and I\'m as a student and also a developer put my skills onto the table to make this platform easier to use and make it efficient.","duration":"Feb 2018 - Jan 2019","location":"Milan, Italy","role":"Software Engineer / Managing Editor","stack":"MySQL · Software Infrastructure · JavaScript · Cascading Style Sheets (CSS) · WordPress · PHP · Team Leadership · HTML5"},"salamatpaad":{"company":"Salamatpaad","description":"Salamatpaad was a fitness and diet platform that wanted to bring a healthy body and mind to people (especially women) nationwide. As a full-stack engineer, I\'ve scaled up the old code performance and added new features to the existing platform.","duration":"Jun 2018 - Jan 2019","links":{"salamatpaad":{"name":"Salamatpaad"}},"location":"Tehran, Iran","role":"Full Stack Engineer","stack":"PhpMyAdmin · Apache · MySQL · JavaScript · Cascading Style Sheets (CSS) · jQuery · PHP · Vue.js · HTML5"},"microsoft":{"company":"Microsoft","description":"After finding the right people in my life I could finally make the dream come true and start working in Microsoft in the early years of my work career. I worked in Microsoft as an intern software engineer who had to work with some big data and machine learning algorithms, so I start working with azure and instantly after that, I had to develop my knowledge in related languages like Python and C++. After finishing off my internship, I\'ve started working with the Xbox Advanced Technology Group (ATG) as a remote junior software engineer. This team was the bridge that links Microsoft game platforms and services, such as Xbox One, Windows 10, Xbox Live, and Azure with key game developers worldwide. In this role, I have been responsible for developing and enhancing the work of DirectXTK and ATGTK kits and I was able to decrease their load time by 15%.","duration":"Jun 2017 - Jun 2018","links":{"XboxATG":{"name":"XboxATG"}},"location":"London, United Kingdom","role":"Junior Software Engineer","stack":"Pascal · WebGL · Unity · Microsoft Azure · Software Infrastructure · Python (Programming Language) · C++"},"persian-acc":{"company":"PersianAcc","description":"PersianACC was one of my first full-time severe work, where I and some of my other comrades from the university gathered as a team and simultaneously kept up my work as a full-stack engineer to create a new life experience and bring rough ideas to a working platform. As the only experienced tech guy in the team, I took all the technical responsibility and simultaneously kept up my work as a full-stack engineer. I have created backend services, frontend and native applications for both iOS and Android.","duration":"Jun 2016 - Jun 2017","location":"Tehran, Iran","role":"Full Stack Engineer","stack":"Linux · Apache · MySQL · Xamarin Products · Web Technologies · Full-Stack Development · JavaScript · Cascading Style Sheets (CSS) · PHP · HTML"},"up-work":{"company":"Upwork","description":"Since my second year of university, I have always tried to reach further and beyond; hence, I would rather not be in a single context or field; then, I started to work it out with the small projects and get further to the big ones. In these years of experience, I did several projects with internal and global startups and institutes.","duration":"May 2013 - Jun 2017","location":"Worldwide","role":"Full Stack Engineer","stack":"Frontend · Backend · Material-UI · Babel.js · Webpack · Xamarin Products · MATLAB · LaTeX · Web Development · Web Technologies · Software Infrastructure · Full-Stack Development · JavaScript · C++ · Vue.js · React.js · Bootstrap · Node.js"}},"headings":{"about":"About Me","contribution":"Public Contribution","interactive":"Interactive Resume","npm":"NPM Packages","blog":"Blog"},"labels":{"techStack":"Technical stack","usefulLinks":"Useful links"},"sub-headings":{"summary":"Summary","work-experience":"Work Experience"}}},"quote":{"error":"I\'m truly ashamed! We got no quote for you today.","reason":"It may because the quote server is down at the moment.","title":{"author":"Search for author","content":"Quote of the day"}},"titles":{"about":"About me","contribution":"Public Contribution","cookieConsent":"Cookie consent","dark":"Dark","github":"GitHub","home":"Go to home","index":"SMAKSS","info":"More information","interactive":"Interactive Resume","light":"Light","linkedin":"LinkedIn","npm":"NPMJS","stackoverflow":"Stack Overflow","stuff":"Stuff","switcher":"Switcher","system":"Based on system preferences"}}')},177:function(e){e.exports=JSON.parse('{"buttons":{"close":"بستـن","goHome":"برگـردیم به صفحـه اصـلی","ok":"باشـه، فهمیـدم","start":"بـزن بـریم"},"contents":{"cookie":"مـن مـجبور شـدم بـرای ارائـه تـجربه کـاربری بهتـر از کوکـی اسـتفاده کـنم.","info":{"description":"خـب، اول از هـمه باید بگـم که برخـلاف نظر مشـترک خـیلی از مـردم طـراحی و پیـاده‌سازی یـه وبسایـت کار سخـتیه، اما انجـام دادن همه‌ اینـا بـا یـه خـروجی باحـال خیلـی سخت تـره. نمیخـوام بگـم که این وبسایت باحـاله ولی خـب من همه تلاشـمو براش کـردم. من اینجـارو بیشتـر بخاطر این طـراحی کردم که افـکار و دانستـه‌هامو با بقیه به اشتـراک بـذارم. تمـام سـورس کـد ایـن پـروژه روی گیـت‌هـاب هسـت و قابـل دانـلود و شخـصی سـازیه، پـس اگـه باهـاش حـال کـردین و توانـاییشو داشتـید میتـونید منـو یه قـهوه مهمـون کنیـد (اگـه دوسـت داشتیـد کـمک مـالی هـم بکنیـد لینکـش تـه تـه همـه صفحـه‌ها هسـت).","ps":"پ.ن.: ممکنـه بـازم بپرسـید کـه نقـل قـول ایـن وسـط چـی میگـه؟ تـو جوابـش بایـد بگـم که صرفـا باحالـه و ممکنـه الهـام بخـش باشـه (نـقل قـول‌ها ترجـمه نـشدن کـه مفـاهیمـشون تغییـر نکنـه). بعـلاوه برای دستـرسی به ایـن امکـان میتونیـد مراجـعه کنیـد بـه","quotable":"سـرویس نقـل قـول.","title":"مـمکنه بپرسید، ایـنجا کـلن واسه چیه؟"}},"descriptions":{"about":"بیشـتر راجـع به مـن بدونـید.","index":"سلام من مکس هستم و مهندس نرم‌افزارم. به دنبال این هستم که اگه بشه، بشریت رو یه گام به جلوتر ببرم. در اینجا سعی دارم دانسته‌هام رو به اشتراک بذارم.","stuff":"در واقع اینجا قراره توانایی‌ و کار‌هامو ببینید."},"errors":{"404":"باعـث شرمنـدگیه، من نتـونستم صفحـه‌ای کـه دنبالشـی رو پیـدا کنم.","error":"اووه، به نظـر مشـکلی پیـش اومـده."},"links":{"about":"دربـاره مـن","donate":"کمـک مـالی","english":"انگلـیسی","persian":"فارسـی","stuff":"کـارهـا","blog":"بـلاگ"},"main":{"content":"درواقـع، اینجـا با انتخـاب هر بخـش می تـونید، من، توانایی‌هام و کـارهام رو بیشتـر بشناسـید.","header":{"partOne":"من و کارهام رو،","partTwo":"بیشـتر بشناسیـد"},"pillars":{"comingSoon":"به زودی در دسترس قرار خواهد گرفت!","content":{"summary":"مـن توی دانـشگاه ،علوم کامپیـوتر خوندم و همیشـه سعیم بر خلـق کردن بوده. من به صـورت دیوانه‌واری به چیـزهای جدید علاقه دارم مخصوصـا اگر مربوط به تکنولوژی باشند. باور دارم آدم‌هـای خوب در تیـم های درست حسابـی ،همیشه اولویت بالاتـری نسبت به محصول‌هـای موفق دارند. همیـشه سعی دارم تا اَپ های بی نظیـری خلـق کنم تا کاربـرا ازشون لذت ببرن. معمـولا غرق در کار هستـم اما به سفر، کتاب خـواندن، بازی‌های ویدیـویی، موزیک و فیلم علاقـه دارم.","summaryFinalThing":"از مسیـری که تا اینجا اومدم راضـی ام و امیدوارم بتـونم قدم موثـری برای پیشـرفت همگـان بردارم."},"experience":{"shopify":{"company":"شاپیفای","description":"به عنوان یک توسعه‌دهنده جلوی صفحه با تجربه، من سابقه غنی در طراحی، توسعه و بهینه‌سازی برنامه‌های شاپیفای دارم. من در خط مقدم ایجاد برنامه‌های متنوعی، از صفحات محصول سفارشی گرفته تا ابزارهای تحلیلی پیچیده، بوده‌ام. من به تسلط خود بر فناوری‌های متعددی از جمله jQuery، SCSS، React، Remix، Svelte، ماژول‌های NPM، D3.js و Polaris افتخار می‌کنم. یکی از موفقیت‌هایی که به آن افتخار می‌کنم، انتقال یک پلتفرم تجارت الکترونیک قدیمی jQuery به یک چارچوب React.js پیشرفته بود، که نتیجه آن بهبود قابل توجه عملکرد و تجربه کاربری بود. من همچنین در رویکردهای معماری مؤثر برای ماژول‌های داخلی با استفاده از Shopify CLI پیشگام بوده‌ام و اقدام به انتشار ماژول‌های NPM مستقل کرده‌ام تا سازگاری با سایر افزودنی‌های Shopify را افزایش دهم. من همیشه در پی نوآوری هستم و با یکپارچه‌سازی Cypress، یک فرآیند آزمایش UX کارآمدتر برای پلتفرم‌های بازاریابی معرفی کردم. علاوه بر این، من برای اطمینان از استقرار کد روان و قابل اعتماد، پایپ‌لاین‌های قوی CI/CD برای برنامه‌های جلوی صفحه ایجاد کردم و از ابزارهایی مانند danger.js و PostCSS استفاده کردم.","duration":"فروردین ۱۴۰۱ -  تـاکنـون","location":"ونکوور، بریتیش کلمبیا، کانادا","role":"Frontend Engineer","stack":"JavaScript · Cascading Style Sheets (CSS) · Computer Science · jQuery · React.js · HTML5 · SASS · Node.js · JavaScript Libraries"},"coin-plus":{"company":"کویـن پـلاس","description":"کـویـن پلـاس ،شرکتـی فعـال در حوزه تکنـولوژی‌های مالـی علی الخـصوص بلاکچِـین است و راهـکارهای خـود در این زمیـنه را در دسترس مراکز تخصصی و افراد میگذارد. مـن ر در این شرکـت بر روی دو محصول مختـلف به نـام‌هـای صرافـه و تکـس توکـن کار کردم و مسئـول ارزیـابی، پیـاده‌سـازی و مدیریت تیم فرانت‌انـد بودم. من برای هر دوی این محصولات اپلیکیشن مستقلی رو از پایه، پیاده سـازی کردم که هم اکنون با بیـش از ۲۰هزار کاربر مشفول فعالیـت هستند. همچـنین در این مدت تونستـم تا اپلیکشین موجود در سمـت ادمین رو بهـبود بدم.","duration":"دی ۱۳۹۹ - خرداد ۱۴۰۱","links":{"coinPlus":{"name":"کویـن پـلاس"},"sarrafeh":{"name":"صـرافـه"},"texToken":{"name":"تکـس توکـن"}},"location":"تـهران، ایـران","role":"Frontend Engineer","stack":"Software Infrastructure · JavaScript · Cascading Style Sheets (CSS) · React.js · HTML5 · SASS · Node.js · JavaScript Libraries"},"sana-gostar-sabz":{"company":"سـانا گسـتر سبـز","description":"سـانا شرکت مادر سه محصـول مختلف ماننـد خدمات خانـگی، حمل و نقـل و دستکـاری کلان داده‌ها بود. من روی دو محصـول مختلف به نـام‌های اوبـار و آچـاره کار کرده‌ام. من تونستـم با نگهـداری و بهینه‌سـازی کدهای موجود سرعت اجـرا اون‌هـارو بالا ببـرم. همچـنین تونستـم دوتا اپلیکیشـن مختـص هر کدوم از محصـولات رو پیاده‌سـازی کنم که هم اکنـون دارای بیش از ۲ میلیـون کاربر هسـت. در آخر هم پیاده‌سـازی یه اپلیکیشن برای متخصصـان آچـاره و همچنین چندین صفحه لندینـگ باحال،  از جمله کارهـایی بوده که انجـام دادم.","duration":"دی ۱۳۹۷ - دی ۱۳۹۹","links":{"sanaGostarSabz":{"name":"سـانا گسـتر سبـز"},"achareh":{"name":"آچـاره"},"ubaar":{"name":"اوبـار"}},"location":"تـهران، ایـران","role":"Frontend Engineer","stack":"Apache · Software Infrastructure · JavaScript · Cascading Style Sheets (CSS) · jQuery · PHP · Vue.js · React.js · HTML5 · SASS · Nuxt.js · Redux.js · Embedded JavaScript (EJS)"},"pergas-it-solutions":{"company":"پِرگـاس","description":"پـرگاس یک بخش فناوری اطـلاعات است که زیر نظر شرکت پرگـاس طـب کار می کند. هدف ایجاد این بخش، ساخت برنامه‌های کاربـردی درون سازمانی بود. مسئولیت من در این مجموعـه مدیریـت و رهبری اعضای تیم فرانت‌اند بود و همچنین ارائه و طراحی بهترین پلتفرم که برای همکـاران و سایر کاربران مرتبـط که کار خود را از طریق پلتفـرم انجام می‌دهنـد، تمرکـز کردم.","duration":"دی ۱۳۹۸ - فروردیـن ۱۳۹۹","location":"تـهران، ایـران","role":"Frontend Engineer / Frontend Chapter Lead","stack":"Material-UI · JavaScript · Cascading Style Sheets (CSS) · Team Leadership · React.js · HTML5 · SASS"},"smart-lancer":{"company":"اسمـارت لنسـر","description":"گروه مشاوره اسمـارت لنسـر برای ارتقای زندگی روزمره دانشجویان و کارآفرینان ایجاد شده بود و از محصولات مختلفی مانند ویانبـو و اسمـارت لنسـر تشکیل شده است. اسمـارت لنسـر گروهی از مشاوره بود که سعی می‌کردند ایده‌های جدیـد را جمع آوری کنن و اون را برای استفـاده محلی راحت‌تر کند و به کارآفرینان و مشاغـل جدید کمک کند تا سریع‌تـر رشد کنند. در اسمـارت لنسـر، سعی کردم استفاده از آن را آسان‌تر کنم و به کارآفرینـان محلی و استارت‌آپ‌هـا کمک کنم تا کل اکـوسیستم کسب‌وکار را راحت‌تر بشناسند. همینطور ویانبـو پلتفرمی بود که سعی می کرد با کمک یک برد الکترونیکی اجتماعی (SEB) به دانشجویـان در سراسر جهان خدمـت کند. از آنجایی که آن روزها دانشجو بودم، همیشه سعی کردم با مهارت خود به دیگران کمک کنـم. ما اولین شعبه SEB خود را در Politecnico di Milano راه‌اندازی کرده‌ایم و من به عنوان یک دانشجـو و همچنیـن یک توسعه‌دهنده، مهارت‌هایم را روی میز قرار می‌دهیم تا استفـاده از این پلتفرم را آسان‌تر و کارآمدتر کنم.","duration":"بهمن ۱۳۹۶ - دی ۱۳۹۷","location":"میـلان، ایتالـیا","role":"Software Engineer / Managing Editor","stack":"MySQL · Software Infrastructure · JavaScript · Cascading Style Sheets (CSS) · WordPress · PHP · Team Leadership · HTML5"},"salamatpaad":{"company":"سلامتپـاد","description":"سلامتپـاد یک پلتفرم تناسب اندام و رژیم غذایی بود که می خواهد بدن و ذهنی سالـم را برای مردم (به ویژه بانوان) در سراسر کشور به ارمغان بیـاورد. من مسئول افزایش عملکرد کد قدیمی و افزودن برخی ویژگی‌های جـدید به پلتفرم موجود بوده‌ام. در این نقـش، توانستـم بدهی فنی پروژه را از ۳۶۲ روز به تقریباً ۴۰ روز کاهش دهـم و برخی ویژگی‌های جدید مانند طرح‌بندی جدید وب، پخش ویدیو، پخش پادکست، تولید محتـوا و بسیاری موارد جالب دیـگر را به محصول موجـود اضافه کنم.","duration":"خـرداد ۱۳۹۷ - دی ۱۳۹۷","links":{"salamatpaad":{"name":"سلامتپـاد"}},"location":"تـهران، ایـران","role":"Full Stack Engineer","stack":"PhpMyAdmin · Apache · MySQL · JavaScript · Cascading Style Sheets (CSS) · jQuery · PHP · Vue.js · HTML5"},"microsoft":{"company":"مایکـروسافـت","description":"پس از یافتن افراد مناسـب در زندگـی‌ام، سرانجام توانستم این رویا را محقـق کنـم و در سال‌های اولیه کارم در مایکروسافت شروع به کار کنم. من در مایـکروسافـت به عنوان یک مهندس نرم‌افزار کارآموز کار می‌کـردم که باید با برخی از داده‌های بزرگ و الگوریتـم‌های یادگیـری ماشین کار می‌کـرد، بنابراین کار با آژور را شروع کردم و بلافاصله پس از آن، تلاش کردم دانش خود را در زبان‌های مرتبط ماننـد Python و C++ توسعه دهم. پس از پایان دوره کارآموزی، کار با گروه فناوری پیشرفته Xbox (ATG) را به عنوان یک مهندس نرم افزار جوان از راه دور شروع کـردم. این تیم پلی بود که پلتفرم‌ها و سرویس‌هـای بازی مایکروسافـت مانند Xbox One، Windows 10، Xbox Live و Azure را با توسعه‌دهنـدگان کلیدی بازی در سراسر جهان پیوند می‌داد. در این نقش، من مسئولیـت توسعه و ارتقای کار کیت‌های DirectXTK و ATGTK را بر عهده داشتم و توانستم زمان بارگذاری آنها را ۱۵٪ کاهش دهم.","duration":"دی ۱۳۹۶ - دی ۱۳۹۷","links":{"salamatpaad":{"name":"ATG ایکسـباکس"}},"location":"لنـدن، انگلسـتان","role":"Junior Software Engineer","stack":"Pascal · WebGL · Unity · Microsoft Azure · Software Infrastructure · Python (Programming Language) · C++"},"persian-acc":{"company":"پرشیـن‌اک","description":"پرشیـن‌اک یکی از اولین کارهای تمام وقت جـدی من بود، جایی که من و برخی از رفقای دیگرم از دانشگاه به عنوان یک تیم گرد هم آمدیم تا یک تجربه زندگی جدید ایجاد کنیم و ایده های خام  را به یک پلتفرم کاری دربیاوریم. من به عنوان تنها مرد فناوری با تجربه در تیم تمام مسئولیـت های فنی را بر عهده داشتم و به عنوان یک CTO و مهندس فول استک به کار خود ادامه داد. من مسئول ایجاد سرویس های باطن، فرانت اند و برنامه‌های بومی برای iOS و اندروید بوده ام. در این موقعیت توانستم تعدادی از همکارانـم را آموزش دهم و اصول کدنویسـی را به آنها آموزش دهم. ما همچنین می توانیم سه محصول مختلف تولید کنیم و آنها را به مشتریان خود بفـروشیم.","duration":"خـرداد ۱۳۹۵ - خرداد ۱۳۹۶","location":"تـهران، ایـران","role":"Full Stack Engineer","stack":"Linux · Apache · MySQL · Xamarin Products · Web Technologies · Full-Stack Development · JavaScript · Cascading Style Sheets (CSS) · PHP · HTML"},"up-work":{"company":"آپـورک","description":"از سال دوم دانشگاه، همیشه سعی کردم به فراتر از آن برسـم، از این رو ترجیح می‌دهـم در یک زمینه یا زمینه واحد نباشم، سپس با پروژه‌های کوچـک شروع به کار کردم و به سمت پروژه‌های بزرگ پیش رفتم. در این سالها تجربه چنـدین پروژه با استارتاپ ها و موسسـات داخلی و جهانـی انجـام دادم.","duration":"اردیبهشت ۱۳۹۲ - خرداد ۱۳۹۶","location":"جهـانی","role":"Full Stack Engineer","stack":"Frontend · Backend · Material-UI · Babel.js · Webpack · Xamarin Products · MATLAB · LaTeX · Web Development · Web Technologies · Software Infrastructure · Full-Stack Development · JavaScript · C++ · Vue.js · React.js · Bootstrap · Node.js"}},"headings":{"about":"دربـاره مـن","contribution":"هـمکـاری عـمومـی","interactive":"رزومـه تـعاملـی","npm":"پکـیج‌های اِن‌پـی‌اِم","blog":"بـلاگ"},"labels":{"techStack":"ابـزارهـا","usefulLinks":"لینکـهای مـفیـد"},"sub-headings":{"summary":"خـلاصـه کوتـاه","work-experience":"تجـربـه کـاری"}}},"quote":{"error":"مـن واقـعا متاسفم! بـرای امـروز نـقل قـول نداریـم.","reason":"مـمکنه دلـیلش بـخاطر در دستـرس نـبودن سـرویس نـقل قـول‌هـا بـاشه.","title":{"author":"جستجـو نویسـنده","content":"نـقل قـول امـروز"}},"titles":{"about":"دربـاره مـن","contribution":"هـمکـاری عـمومـی","cookieConsent":"قبـول کـوکی","dark":"تـیره","github":"گیت‌هاب","home":"بازگشت به صفحه اصلی","index":"SMAKSS","info":"اطـلاعات بیشـتر","interactive":"رزومـه تـعاملـی","light":"روشـن","linkedin":"لینکداین","npm":"اِن‌پی‌اِم‌جِی‌اِس","stackoverflow":"استک اورفلو","stuff":"کارها","switcher":"تعویض کننده","system":"بـر اسـاس تنظیمات سیستم"}}')},24:function(e,t,o){"use strict";var n={name:"error",props:["error"],components:{Button:o(91).a},head:function(){return{htmlAttrs:{lang:this.$i18n.locale,dir:"en"===this.$i18n.locale?"ltr":"rtl"}}},mounted:function(){setTimeout((function(){document.querySelector(".site-settings .settings.localization-switcher .dropdown").style.pointerEvents="none"}),100)},beforeDestroy:function(){document.querySelector(".site-settings .settings.localization-switcher .dropdown").style.pointerEvents="all"},methods:{onClick:function(){this.$router.push({path:"/"})}}},r=(o(170),o(33)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"site-error"},[404===e.error.statusCode?o("h1",{staticClass:"error not-found"},[e._v("\n    "+e._s(e.$t("errors.404"))+"\n  ")]):o("h1",{staticClass:"error error-occurred"},[e._v(e._s(e.$t("errors.error")))]),e._v(" "),o("Button",{attrs:{title:e.$t("titles.home")},on:{onClick:e.onClick}},[e._v(e._s(e.$t("buttons.goHome")))])],1)}),[],!1,null,"3738afeb",null);t.a=component.exports},88:function(e,t,o){"use strict";var n=o(1),r=o(89);n.a.use(r.a),t.a=function(e){var t=e.app,n=e.store;t.i18n=new r.a({locale:n.state.locale,fallbackLocale:"en",messages:{en:o(176),fa:o(177)}}),t.i18n.path=function(link){return t.i18n.locale===t.i18n.fallbackLocale?"/".concat(link):"/".concat(t.i18n.locale,"/").concat(link)}}},90:function(e,t,o){"use strict";var n={};o.r(n),o.d(n,"buyMeACoffee",(function(){return r})),o.d(n,"blog",(function(){return l})),o.d(n,"coinPlus",(function(){return c})),o.d(n,"sarrafeh",(function(){return d})),o.d(n,"texToken",(function(){return h})),o.d(n,"sanaGostarSabz",(function(){return f})),o.d(n,"achareh",(function(){return m})),o.d(n,"ubaar",(function(){return y})),o.d(n,"salamatPaad",(function(){return k})),o.d(n,"ATGSamples",(function(){return w}));var r="https://ko-fi.com/smakss/",l="https://smakss.hashnode.dev/",c="https://coin-plus.com",d="https://sarrafeh.com",h="https://textoken.io",f="http://sanags.ir/",m="https://ac‌hareh.ir",y="https://ubaar.ir",k="https://salamatpaad.com/",w="https://github.com/microsoft/Xbox-ATG-Samples";t.a=function(e,t){e.app;t("constants",n)}},91:function(e,t,o){"use strict";var n={name:"Button",props:["mainClass","title","ariaLabel","spanClass"],methods:{onClick:function(e){this.$emit("onClick",e)}}},r=(o(168),o(33)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{class:e.$props.mainClass||"button",attrs:{title:e.title,"aria-label":e.ariaLabel},on:{click:e.onClick}},[o("span",{class:e.spanClass||"label"},[e._t("default")],2)])}),[],!1,null,"04f14073",null);t.a=component.exports}},[[131,10,4,11]]]);