define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/app-layout/app-layout.js","../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-dropdown/iron-dropdown.js","../../node_modules/fa-icon-polymer/fa-icon.js"],function(_polymerElement,_appLayout,_appScrollEffects,_appHeader,_appToolbar,_paperIconButton,_ironIcons,_paperButton,_ironDropdown,_faIcon){"use strict";class LexisiteFooter extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host{
          display: block;
          height: auto;
          width: auto;
          clear: both;
        }


        paper-button.socialbutton{
          margin: 1vh 1vw !important;
          min-width: 0 !important;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          border: 3px solid var(--ll-black);
          border-radius: 50%;
          height: 7.5vh;
          width: 7.5vh;
        }

        paper-button.socialbutton:hover, paper-button.socialbutton:hover *{
          background: var(--ll-black);
          color: var(--ll-pink);
          --icon-color: var(--ll-pink);
          --icon-background-color: var(--ll-black);

        }

     

        .footer{
          background: var(--ll-white);
          margin-top: 5vh;
          bottom: 0;
          width: calc(100% - 10vw - 8px);
          left: 0;
          padding: 5vh 2.5vw;
          border-top: 2px solid var(--ll-dark-border);
          text-align: center;
          font-size: 2em;
        }

        fa-icon.icon{
          --icon-color: var(--ll-black);
          --icon-background-color: transparent;
          font-size: 1em;
        }




        img.logoimg{
          height: 10vh;
          width: auto;
          margin-bottom: 2.5vh;
        }

        .info{
          display: inline-block;
          vertical-align: top;
          font-family: IBMLight;
          font-size: .65em;
          text-align: left;
          margin-left: 1vw;
        }

        .logocontainer{
          display: inline-block;
        }

        @media screen and (max-width : 760px){
          .footer{
            width: calc(100% - 5vw);
          }

          .buttoncontainer{
            margin-top: 2.5vh;
          }

          .info{
            font-size: .5em;
          }

          img.logoimg{
            height: 7.5vh;
          }
        }



      }
      </style>
      <div class="footer">
        <div class="infocontainer">
          <div class="logocontainer">
            <img src="../../img/logo_notext.png" class="logoimg">
          </div>
          <div class="info">
            <div>New York, NY 10016</div>
            <div>lexi@lsquaredsocial.com</div>
            <div>(516) 732-9409</div>
          </div>
        </div>
        <div class="buttoncontainer">
          <paper-button class="socialbutton"">
            <a href="https://www.facebook.com/L-Squared-Social-2088096527898798/">
              <fa-icon icon-prefix="fab" icon-name="fa-facebook-f" class="icon"></fa-icon>
            </a>
          </paper-button>
          <paper-button class="socialbutton">
            <a href="https://www.instagram.com/lsquaredsocial/">
              <fa-icon icon-prefix="fab" icon-name="fa-instagram" class="icon"></fa-icon>
            </a>
          </paper-button>
          <paper-button class="socialbutton">
            <a href="https://www.twitter.com/LSquaredSocial">
              <fa-icon icon-prefix="fab" icon-name="fa-twitter" class="icon"></fa-icon>
            </a>
          </paper-button>
          <paper-button class="socialbutton">
            <a href="https://www.linkedin.com/company/l-squared-social/about/">
              <fa-icon icon-prefix="fab" icon-name="fa-linkedin" class="icon"></fa-icon>
            </a>
          </paper-button>
        </div>
      </div>

      
      
    `}static get properties(){return{}}ready(){super.ready()}_addSubscribers(){var self=this}}window.customElements.define("lexisite-footer",LexisiteFooter)});