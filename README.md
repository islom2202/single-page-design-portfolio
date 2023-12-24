# What should I learn in this project:
1. Infinite-slider in css with click-buttons
    - Swiper
2. Scrollbar design
3. Open phone-call based on devise
4. Features that I didn't know
5. Appear and more on scroll css only animations

## 1. Infinite-slider in css with click-buttons:
  #### Swiper
   library for making carousels if you use it, remove your custom stylings like ``"overflow-x:"``, display: grid, flex, gap from css.
  Here is step-by-step guide using CDN:
  1. paste CDN links inside header:
      ~~~
        <header>
        ...
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          />
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
          ...
        </header>
     ~~~
  2. Initialize swiper in js file:
       ~~~
      // app.js
        var swiper = new Swiper(".swiper-container", {
          direction: "horizontal",
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 24,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        })
     ~~~
  3. Remove default swiper styling:
      ~~~
        .swiper-button-next,
        .swiper-button-prev{
        position: static;
        user-select: none;
        }
        // remove swiper's default arrows
        .swiper-button-next::after, 
        .swiper-button-prev::after {
        content: "";
        }
      ~~~
## 2. Scrollbar design
  1. Display scrollbar and give it a width:
  ~~~
    &::-webkit-scrollbar{
    display: block;
    width: 1rem;
    }
  ~~~
  2. Set custom styling of thumb and track:
  ~~~
      &::-webkit-scrollbar-thumb{
      background-color: $orange;
      border-radius: 1rem;
      }
      &::-webkit-scrollbar-track{
        background-color: $purple;
      }
  ~~~
## 3. Open phone-call based on devise
This is all it takes in js to open phone-call:
~~~
const consultationBtn = document.querySelectorAll('.consultation')
consultationBtn.forEach(button => {
  button.onclick = () => (window.location.href = "tel:+1234567890")
})
~~~
## 4. Features that I didn't know
Small features that I've learned alongside building project
  1. **':where'** - pseudo-class in CSS is used to simplify and minimize longer CSS selectors in a stylesheet, helping to avoid repetition and reduce code:
      ```
      .prev, .next{
        opacity: 0;
        background-color: rgb(0, 0, 0 / 0);
      }
      .parent:hover :where(.prev, .next){
        opacity: 1;
      }
      :where(.prev, .next):hover{
        background-color: rgb(0, 0, 0 / 0.3);
      }
      ```
  2. **':target'** - pseudo-class in CSS that helps us to style active ``id-link``: <br>
     - html:
      ~~~
      <body>
        <header>
          <a href="#home">home page</a>
          <a href="#my_work">my work</a>
        </header>
        <main>
          <article id="home">
              <h1>Home page</h1>
          </article>
          <article id="my_work">
              <h1>my work</h1>
          </article>
        </main>
        <footer>footer</footer>
      </body>
      ~~~
      - css:
      ~~~
      article:not(article:target){
       display: none;
      }
      ~~~
  3. **scroll-padding-inline** -  property allows you to define the amount of padding that should be applied before the beginning and after the end of the scrollable content:
      ~~~
      .container {
          overflow-x: auto;
          scroll-padding-inline: 20px;
      }
      ~~~
  4. **:has()** - pseudo-class in CSS is a relatively new feature that allows developers to select elements based on their children
  5. **:has(:not())** - it is the opposite of ``:has`` pseudo-class.
  6. **grid-column: span 2;** - span syntax in grid columns
  7. **grid-auto-flow: column** - set all elements alongside horizontally
  8. **grid-auto-columns: calc((100% / 3) - 12px);**
  10. **offsetWidth** - 
  The property in JavaScript is used to get the viewable width of an element (in pixels) including padding, border, and scrollbar, but not the margin.
  11. **element.scrollLeft** - DOM property gets or sets the number of pixels that an element's content is scrolled from its left edge:
      - **If the value specified is greater than the maximum scroll amount, the value is set to a maximum number.**:
        ~~~
        next.onclick = () => {
          carousel.scrollLeft += carousel.offsetWidth
          console.log(carousel.scrollLeft) // scrollLeft won't be more than the maximum width of the scrollbar.
        } 
        ~~~

## 5. Appear on scroll css only

   Cool website for demonstating that in css only: ``https://scroll-driven-animations.style/``..
   - **Note feature is very new and might not be supported in all browsers.**
  1. First we give a name to animation and make linear linear:
      ~~~
      p{
        animation: reveal linear
      }
      ~~~
  2. Then set **animation-timeline** to view so the starting and ending point will be the viewport (instead of time):
     ~~~
     p{
        animation: reveal linear;
        animation-timeline: view();
      }
     ~~~
  3. We will define in starting (bottom) and ending (top) view-point:
     ~~~ 
     p{
        animation: reveal linear;
        animation-timeline: view();
        animation-range: cover 0% cover 50% ; 
      }
      ~~~
  4. Lastly using keyframes we make our animation:
      ~~~
        @keyframes reveal{
          from{
            opacity: 0;
          }
          to{
            opacity: 1;
          }
        }
      ~~~
  For more examples check my animation scss file...