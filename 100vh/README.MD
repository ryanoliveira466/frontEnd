## Página responsiva com seus elementos sempre usando 100vh e CSS reset

- Reset
```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

```

- 100vh

```css
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
             display: flex;
             flex-direction: column;
             height: 100vh;
        }

        header, footer {
            width: 100%;
            height: 100px;
            flex-shrink: 0;
        }

        main {
            flex-grow: 1;
        }
```

- Padrão de página

```html
<body>
    <header></header>

    <main>
        <section>
            <article>
            </article>
        </section>
    </main>

    <footer></footer>
</body>
```
