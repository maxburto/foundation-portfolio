module.exports = function(a, b, opts) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  if (a == b) {
      return opts.fn(this);
  } else {
      return opts.inverse(this);
  }
}
