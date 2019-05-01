import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js';


/**
 * @customElement
 * @polymer
 */
class LexisiteNav extends PolymerElement {
  static get template() {
    return html`
      <style>

      
        div.logocontainer{
          display: flex;
          justify-content: left;
          align-items: center; 
        }

        img.logoimg{
          height: 12.5vh;
          width: calc(12.5vh * 1.15);
          padding-right: 2vw;
        }

        span.bold{
          font-family: IBMBold;
        }

        paper-icon-button.menubutton{
          color: var(--ll-black);
        }

        paper-button.navbutton{
          font-family: IBMBold;
        }

        paper-button.navbutton:hover{
          color: var(--ll-pink);
          background: black;
          border-radius: 0;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        #navbar {
          overflow: hidden;
          background-color: var(--ll-white);
          transition: 0.4s;
          position: fixed;
          top: 0;
          z-index: 99;
          width: 98vw;
          left: 0px;
          border-bottom: 2px solid var(--ll-dark-border);
        }

        #navbar #logo {
          font-size: 1em;
          font-weight: bold;
          transition: 0.4s;
        }

        #navbar-right {
          position: fixed;
          right: 1vw;
        }

        .navbarexpanded-true{
          padding: 3vh 1vw;
        }

        .navbarexpanded-false{
          padding: 2vh 1vw;
        }

        img.imgexpanded-true{
          -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadein 1s; /* Firefox < 16 */
          -ms-animation: fadein 1s; /* Internet Explorer */
          -o-animation: fadein 1s; /* Opera < 12.1 */
        }

        img.imgexpanded-false{
          -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadein 2s; /* Firefox < 16 */
          -ms-animation: fadein 2s; /* Internet Explorer */
          -o-animation: fadein 2s; /* Opera < 12.1 */
          animation: fadein 2s;
          display: none;
        }

        .logotext{
          font-family: IBMLight;
          letter-spacing: -1.5px;
          color: var(--ll-black);
          display: inline-block;
        }

        div.logotextexpanded-true{
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          font-size: 2em;
        }

        div.logotextexpanded-false{
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          font-size: 2em;
        }

        @media screen and (max-width: 580px) {
          #navbar {
            padding: 20px 10px !important;
          }
          #navbar a {
            float: none;
            display: block;
            text-align: left;
          }
          

          img.logoimg{
            display: none;
          }
        }

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Internet Explorer */
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        paper-button.dropdownbutton{
          display: block;
          font-family: IBMBold;
          text-align: center;
          background: var(--ll-white);
        }

        paper-listbox.listbox{
          position: fixed;
          left: 0;
          width: 100vw;
          margin-top: 0 !important;
          padding-top: 0 !important;
          background: transparent;
        }

      }
      </style>

      <div id="navbar" class$="navbarexpanded-[[expanded]]">
        <div class="logocontainer" id="logo"> 
          <img src="../../img/logo_notext.png" class$="logoimg imgexpanded-[[expanded]]">
          <div class$="logotext logotextexpanded-[[expanded]]">
            <span class="bold">L Squared</span> Social
          </div>
        
          <div id="navbar-right">
            <template is="dom-if" if="[[!mobile]]">
              <paper-button class="navbutton" on-tap="_goto" value="about">About Us</paper-button>
              <paper-button class="navbutton" on-tap="_goto" value="services">Services</paper-button>
              <paper-button class="navbutton" on-tap="_goto" value="contact">Contact</paper-button>
            </template>
            <template is="dom-if" if="[[mobile]]">

              <paper-menu-button
              horizontalAlign="left"
              verticalAlign="bottom"
              dynamicAlign="true"
              no-overlap="true">
                <!-- <template is="dom-if" if="[[!dropdownexpanded]]"> -->
                  <paper-icon-button slot="dropdown-trigger" icon="menu" on-tap="_menuClicked" alt="menu">
                  </paper-icon-button>
                <!-- </template> -->
                <!-- <template is="dom-if" if="[[dropdownexpanded]]">
                  <paper-icon-button slot="dropdown-trigger" icon="close" on-tap="_menuClicked" alt="menu">
                  </paper-icon-button>
                </template> -->
                <paper-listbox slot="dropdown-content" class="listbox">
                  <paper-button class="dropdownbutton" on-tap="_goto" value="about">About Us</paper-button>
                  <paper-button class="dropdownbutton" on-tap="_goto" value="services">Services</paper-button>
                  <paper-button class="dropdownbutton" on-tap="_goto" value="contact">Contact</paper-button>
                </paper-listbox>
              </paper-menu-button>


            </template>
          </div>
          </div>
      </div>

      

    `;
  }
  static get properties() {
    return {
      mobile:{
        notfiy: true
      },
      expanded:{
        notfiy: true
      }
    };
  }

  ready(){
    super.ready();
    this._addScrollListener();
    this.set("expanded", true);
    this.set("dropdownexpanded", false);

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    w = w < 760 ? true : false;
    if(w){
      this.set("expanded", false);
    }
  }

  _addScrollListener(){
    var self = this;
    
    self._resizeWindowFunction();
    window.onresize = function() {self._resizeWindowFunction()};

    self._scrollFunction()
    window.onscroll = function() {self._scrollFunction()};
  }

  _resizeWindowFunction(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    w = w < 760 ? true : false;
    this.set("mobile", w);
    if(w){
      this.set("expanded", false);
    }
  }

  _scrollFunction(){
    var self = this;
    
    if(this.mobile){
      return;
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      self.set("expanded", false);
    }else {
      self.set("expanded", true);
    }
  }

  _menuClicked(){
    if(this.dropdownexpanded){
      this.set("dropdownexpanded", false);
    }else{
      this.set("dropdownexpanded", true);
    }
    
  }

  _goto(e){
    var value = e.target.getAttribute("value");
    $.publish("_goto", value);
  }

}

window.customElements.define('lexisite-nav', LexisiteNav);
