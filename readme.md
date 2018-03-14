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


## Status
[![Build Status](https://travis-ci.org/signalwerk/scontecss.svg?branch=master)](https://travis-ci.org/signalwerk/scontecss)
