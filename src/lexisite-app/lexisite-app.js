define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/app-layout/app-layout.js","../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-dropdown/iron-dropdown.js"],function(_polymerElement,_appLayout,_appScrollEffects,_appHeader,_appToolbar,_paperIconButton,_ironIcons,_paperButton,_ironDropdown){"use strict";class LexisiteApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host{
        }
        .maincontainer {
          position: relative;
          top: calc(9vh - 4px);
          left: -8px;
          width: 100vw;
          overflow: scroll;
        }


      }
      </style>

      <lexisite-nav></lexisite-nav>
      <div class="maincontainer">
        <lexisite-carousel id="home"></lexisite-carousel>
        <lexisite-about    id="about"></lexisite-about>
        <lexisite-services id="services"></lexisite-services>
        <lexisite-contact  id="contact"></lexisite-contact>
      </div>
      <lexisite-footer></lexisite-footer>

      
    `}static get properties(){return{}}ready(){super.ready()}_addSubscribers(){var self=this}}window.customElements.define("lexisite-app",LexisiteApp)});