---
title: write CSS without worrying about specificity and source order

---


The CSS cascade is ordered as below
- Origin and Importance
- Inline Styles
- Layer
- Specificity
- Order of appearance

<img src="/oss/css-cascade-specificity.png"></img>



## origin and importance


A style rule origin can come from one of the following, in descending order of priority:

- Developer Styles (AKA author styles)
- User Styles
- user agent stylesheets.


```css
@layer base, vendors, components, variations;

@layer base {

}

@import url(flickity.css) layer(vendors);

@layer components {
}

@layer components {
  .button {
    color: #fff;
    background-color: #d73a7c;
  }
}

@layer variations {
  .button--ghost {
    background-color: transparent;
    color: #474747;
    border: 2px solid #e0e0e0;
  }

  .button--facebook {
    background-color: var(--brand-fb);
  }
}
```


## `:has()`


```css
/* inside codition selecter */
button:has(.icon) {
  gap: 1ch;
}

.card:has(img) {
  grid-auto-flow: row;
}

/*  on how many items it has */
main:has(> :nth-child(5)) {…}

/* theme mode checkbox on the page is enabled: */
html:has(#dark-mode:checked) {…}

/* ancestor selector */
```


## responsive


```css
body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
}


```
