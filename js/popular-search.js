PopularQueryRenderer = function(container) {
  this.container = container;
};

PopularQueryRenderer.prototype.render = function(queries) {
  var numberOfPopularQueriesToShow = queries.popularQueries.length;
  if ((typeof queries.maxNumberOfPopularQueries == "number") &&
      (queries.maxNumberOfPopularQueries &lt; numberOfPopularQueriesToShow)) {
    numberOfPopularQueriesToShow = queries.maxNumberOfPopularQueries;
  }
  for (var i = 0; i < numberOfPopularQueriesToShow; i++) {

    var a = document.createElement("a");
    a.setAttribute("href", "/search?q=" + queries.popularQueries[i].query);
    a.setAttribute("class", "QsZ7bb JTuIPc iIWm4b Qc4Zr");

var hr = document.createElement("hr");
    hr.setAttribute("class", "BUybKe");

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('width','24'); svg.setAttribute('height','24');
    svg.setAttribute("focusable", "false");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");

var path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d','M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'); svg.appendChild(path);

    var span = document.createElement("span");
    span.setAttribute("class", "QC9q4d SFIjQ F1xZ2d z1asCe MZy1Rb");
    span.setAttribute("style", "position:absolute;right:5%;height:20px;line-height:20px;width:20px");

span.appendChild(svg);

a.appendChild(document.createTextNode(queries.popularQueries[i].query));
a.appendChild(span);
    this.container.appendChild(a);
    this.container.appendChild(hr);
 this.container.appendChild(document.createTextNode(" "));

  }
};