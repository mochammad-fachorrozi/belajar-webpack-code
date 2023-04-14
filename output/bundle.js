/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const cekInputValid = __webpack_require__(/*! ./utils/cekInputValid */ "./src/app/utils/cekInputValid.js");

module.exports = class AlertService {
  constructor() {
    this.error = document.querySelector('#error');
  }

  tampilkanErrorPenjumlahan = (input, angka) => {
    const hasil = input.reduce((pesan, nilai, index) => {
      if (cekInputValid(angka[index])) {
        return pesan + '';
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, 'Silahkan masukkan angka yang benar: ');

    this.error.classList.remove('d-none');
    this.error.innerText = hasil;
  };

  sembunyikanError = () => this.error.classList.add('d-none');
}


/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const cekInputValid = __webpack_require__(/*! ./utils/cekInputValid */ "./src/app/utils/cekInputValid.js");
const parseInput = __webpack_require__(/*! ./utils/parseInput */ "./src/app/utils/parseInput.js");

const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();

  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = parseInput(...input);
    if (cekInputValid(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult('');
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });

  jokesService.onClick(() => {
    fetch('https://candaan-api.vercel.app/api/text/random')
      .then((response) => response.json())
      .then((data) => {
        jokesService.setModal(data.data);
      });
  });
};

module.exports = run;

/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector('#operand1');
    this.operand2 = document.querySelector('#operand2');
    this.tombolTambah = document.querySelector('#tombol-tambah');
    this.hasil = document.querySelector('#hasil');
  }

  getInput() {
    return [this.operand1.value, this.operand2.value];
  }

  setResult(angka1, angka2) {
    this.hasil.innerText = angka1 + angka2;
  }

  onClick(cb) {
    this.tombolTambah.addEventListener('click', cb);
  }
}


/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = class JokesService {
  constructor() {
    this.tombolJokes = document.querySelector('#jokes-receh');
    this.modalBody = document.querySelector('.modal-body');
  }

  setModal(str) {
    this.modalBody.innerHTML = str;
  }

  onClick(cb) {
    this.tombolJokes.addEventListener('click', cb);
  }
}


/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((module) => {

const cekInputValid = (...angka) => {
  return angka.every((num) => typeof num === 'number' && !isNaN(num));
};

module.exports = cekInputValid;


/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((module) => {

const parseInput = (...input) => {
  return input.map((str) => parseInt(str));
};

module.exports = parseInput;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const run = __webpack_require__(/*! ./app/app */ "./src/app/app.js");
const AlertService = __webpack_require__(/*! ./app/alert.service */ "./src/app/alert.service.js");
const CalculatorService = __webpack_require__(/*! ./app/calculator.service */ "./src/app/calculator.service.js");
const JokesService = __webpack_require__(/*! ./app/jokes.service */ "./src/app/jokes.service.js");

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

})();

/******/ })()
;