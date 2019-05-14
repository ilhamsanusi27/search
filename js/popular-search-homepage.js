PopularQueryRenderer = function(container) {
  this.container = container;
};

PopularQueryRenderer.prototype.render = function(queries) {
  var numberOfPopularQueriesToShow = queries.popularQueries.length;
  if ((typeof queries.maxNumberOfPopularQueries == "number") &amp;&amp;
      (queries.maxNumberOfPopularQueries &lt; numberOfPopularQueriesToShow)) {
    numberOfPopularQueriesToShow = queries.maxNumberOfPopularQueries;
  }
  for (var i = 0; i &lt; numberOfPopularQueriesToShow; i++) {
    var a = document.createElement("a");
    a.setAttribute("href", "/search?q=" + queries.popularQueries[i].query);

a.appendChild(document.createTextNode(queries.popularQueries[i].query));
    this.container.appendChild(a);
 this.container.appendChild(document.createTextNode(" "));

  }
};