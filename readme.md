# Scontecss
scss-mixin to write @content with custom variables

## Install
```sh
# bash
npm install scontecss --save-dev
```

```scss
// scss
@import "~/scontecss/scontecss";
```

## Use (simple)

```SCSS
$tst: green;

body {
  @include scontecss($tst, (
    color: "$",
  ));
}
```

results in

```CSS
body {
  color: green;
}
```


## Use (complex)
```SCSS
$tst: (
  color: green,
  width: 100%,
);

body {
  @include scontecss($tst, (
    color: "$.color",
    width: "$.width",
  ));
}
```

results in

```CSS
body {
  color: green;
  width: 100%;
}
```

## Breakpoint
If you wanna have a flexible breakpoint handling. Check `./doc/_helpers.scss`.

```SCSS
// definition of the breakpoints
$breakpoints: (
  default: 0,
  tablet: 26rem,
  desktop: 54rem,
);


// definition of colors
$colors: (
  default: gray,
  tablet: green,
  desktop: red,
);

// Use
body {
  @include mediaquery-property($colors, (
    background-color: "$",
  ));
}

```

results in

```CSS
body {
  background-color: gray;
}

@media screen and (min-width: 26rem) {
  body {
    background-color: green;
  }
}

@media screen and (min-width: 54rem) {
  body {
    background-color: red;
  }
}
```

## Status
[![Build Status](https://travis-ci.org/signalwerk/scontecss.svg?branch=master)](https://travis-ci.org/signalwerk/scontecss)
