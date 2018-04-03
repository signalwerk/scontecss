class Scontecss {
  constructor(configuration) {
    this.conf = configuration || {};
  }

  mixin(root) {
    let css = [];
    root.walkDecls(node => {
      if (node.value.toString().indexOf("$") !== -1) {
        let newVal = this.repeat(node.value, value => {
          return this.inStringValue(value);
        });

        if(newVal) {
          css.push({
            prop: node.prop,
            value: newVal
          });
        }
      }
      return node;
    });

    return css;
  }

  parseVal(selector) {
    return selector.split(".").reduce((obj, key) => {
      if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
      }
      return null;
    }, this.conf);
  }

  inStringValue(str) {

    let foundAllReferences = true;
    let newVal = str.replace(/\$\.([\w\d-_.]+)/g, (all, val) => {
       let nVal = this.parseVal(val);
       if(nVal) {
         return nVal;
       } else {
         foundAllReferences = false;
         return "";
       }
    });

    if(foundAllReferences) {
      return newVal;
    } else {
      return "";
    }
  }

  repeat(value, callback) {
    let oldValue;
    let newValue = value;
    do {
      oldValue = newValue;
      newValue = callback(oldValue);
    } while (newValue !== oldValue && newValue.indexOf("$") !== -1);
    return newValue;
  }
}

module.exports = Scontecss;
