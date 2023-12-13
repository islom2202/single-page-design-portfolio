# What should I learn in this project:
1. Slider in css with click-buttons
2. Relative scrollbar design
3. Open phone-call based on devise
4. Features that I didn't know

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
  2. **':target'** - pseudo-class in CSS that helps us to style active ``id-link``. And it might be very useful tool even for native-routing😎: <br>
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
      article{
      display: none;
      }
      article:target{
      display: block;
      }
      ~~~
