//Banner-1

var entidade = document.getElementById('imagem1');
var fator_lupa = 1.1;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };

//Banner-2

var entidade = document.getElementById('imagem2');
var fator_lupa = 1.1;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };

//Banner-3

var entidade = document.getElementById('imagem3');
var fator_lupa = 1.1;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };
entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };
