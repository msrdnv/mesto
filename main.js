(()=>{"use strict";var t=document.forms["profile-form"],e=document.forms["card-form"],n=t.elements.username,o=t.elements.about,r=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),u=document.querySelector(".popup__full-image"),c=document.querySelector(".popup__image-caption"),a={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===l(r)?r:String(r)),o)}var r}var f=function(){function t(e,n,o,r){var i=e.name,u=e.link,c=e.likes,a=e._id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i,this._link=u,this._likes=c.length,this._id=a,this._templateSelector=n,this._handleCardClick=o,this._handleServerLike=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._handleDeleteButton(),this._handleCardClick(this._elementImage),this._handleLikeButton()}},{key:"_handleDeleteButton",value:function(){this._element.querySelector(".element__delete-button").addEventListener("click",this.deleteElement.bind(this))}},{key:"_handleLikeButton",value:function(){var t=this;this._likeButton=this._element.querySelector(".element__like-button"),this._likeButton.addEventListener("click",(function(){t.toggleLikeButton(),t._handleServerLike(t._likeButton,t._id)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__name").textContent=this._name,this._elementImage=this._element.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.querySelector(".element__like-counter").textContent=this._likes,this._setEventListeners(),this._element}},{key:"deleteElement",value:function(){this._element.remove(),this._element=null}},{key:"toggleLikeButton",value:function(){this._likeButton.classList.toggle("element__like-button_activated")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===p(r)?r:String(r)),o)}var r}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputsList=Array.from(n.querySelectorAll(this._inputSelector)),this._submitButtonElement=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners(this._formElement)}},{key:"_setEventListeners",value:function(t){var e=this;this.toggleButtonState(),this._inputsList.forEach((function(n){n.addEventListener("input",(function(){e._isValid(t,n),e.toggleButtonState()}))}))}},{key:"_isValid",value:function(t,e){e.validity.valid?e.validity.valid&&this._hideInputError(t,e):this._showInputError(t,e,e.validationMessage)}},{key:"_showInputError",value:function(t,e,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),o.textContent=n,o.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),n.classList.remove(this._errorClass),n.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButtonElement.classList.add(this._inactiveButtonClass),this._submitButtonElement.setAttribute("disabled","")):(this._submitButtonElement.classList.remove(this._inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled",""))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===b(r)?r:String(r)),o)}var r}var v=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){for(var e in t)this._renderer(t[t.length-e-1])}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===d(r)?r:String(r)),o)}var r}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeIcon=this._popup.querySelector(".popup__close-icon"),this._closeIcon.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==S(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===S(r)?r:String(r)),o)}var r}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"open",value:function(t){w(j(a.prototype),"open",this).call(this),u.src=t.src,u.alt=t.alt,c.textContent=t.nextElementSibling.textContent}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(g);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==P(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===P(r)?r:String(r)),o)}var r}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},L.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(o);if(r){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n._popupForm=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=document.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;L(B(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){t._handleSubmitForm(e,t._getInputValues())}))}},{key:"close",value:function(){L(B(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==q(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===q(r)?r:String(r)),o)}var r}var R=function(){function t(e){var n=e.usernameSelector,o=e.aboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=document.querySelector(n),this._about=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._formValues={},this._formValues.username=this._username.textContent,this._formValues.about=this._about.textContent,this._formValues}},{key:"setUserInfo",value:function(t,e){this._username.textContent=t,this._about.textContent=e}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function D(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==V(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===V(r)?r:String(r)),o)}var r}var U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"getUserData",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-69/users/me",{method:"GET",headers:{authorization:"8b924108-8ca1-4711-b126-8a96bbad8ecc","Content-Type":"application/json"}}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editUserData",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-69/users/me",{method:"PATCH",headers:{authorization:"8b924108-8ca1-4711-b126-8a96bbad8ecc","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-69/cards",{method:"GET",headers:{authorization:"8b924108-8ca1-4711-b126-8a96bbad8ecc","Content-Type":"application/json"}}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"postNewCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-69/cards",{method:"POST",headers:{authorization:"8b924108-8ca1-4711-b126-8a96bbad8ecc","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"putLikeCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-69/cards/".concat(t,"/likes"),{method:"PUT",headers:{authorization:"8b924108-8ca1-4711-b126-8a96bbad8ecc","Content-Type":"application/json"}}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLikeCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-69/cards/".concat(t,"/likes"),{method:"DELETE",headers:{authorization:"8b924108-8ca1-4711-b126-8a96bbad8ecc","Content-Type":"application/json"}}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),z=new m(a,e),A=new m(a,t);z.enableValidation(),A.enableValidation();var F=new R({usernameSelector:".profile__name",aboutSelector:".profile__about"}),N=new U;N.getInitialCards().then((function(t){return t})).then((function(t){console.log(t),M.renderItems(t)})).catch((function(t){console.log(t)})),N.getUserData().then((function(t){return t})).then((function(t){console.log(t),F.setUserInfo(t.name,t.about)})).catch((function(t){console.log(t)}));var G=function(t){t.addEventListener("click",(function(){W.open(t)}))},J=function(t,e){t.classList.contains("element__like-button_activated")?N.putLikeCard(e).then((function(t){return t})).then((function(e){t.nextElementSibling.textContent=e.likes.length})).catch((function(t){console.log(t)})):N.deleteLikeCard(e).then((function(t){return t})).then((function(e){t.nextElementSibling.textContent=e.likes.length})).catch((function(t){console.log(t)}))},H=function(t){var e=new f(t,".element-template",G,J).generateCard();M.addItem(e)},M=new v({renderer:function(t){H(t)}},".gallery"),K=new I(".profile-popup",(function(t,e){t.preventDefault(),F.setUserInfo(e.username,e.about),N.editUserData({name:e.username,about:e.about}),K.close()}));K.setEventListeners();var Q=new I(".card-popup",(function(t,e){t.preventDefault(),N.postNewCard(e).then((function(t){return t})).then((function(t){H({name:e.name,link:e.link,likes:t.likes,_id:t._id})})).catch((function(t){console.log(t)})),t.target.reset(),Q.close()}));Q.setEventListeners();var W=new C(".image-popup");W.setEventListeners(),r.addEventListener("click",(function(){n.value=F.getUserInfo().username,o.value=F.getUserInfo().about,K.open(),A.toggleButtonState()})),i.addEventListener("click",(function(){Q.open(),z.toggleButtonState()}))})();