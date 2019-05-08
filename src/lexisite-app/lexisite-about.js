define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/app-layout/app-layout.js","../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-dropdown/iron-dropdown.js"],function(_polymerElement,_appLayout,_appScrollEffects,_appHeader,_appToolbar,_paperIconButton,_ironIcons,_paperButton,_ironDropdown){"use strict";class LexisiteAbout extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>

        :host{
          display: block;
          width: auto;
          height: auto;
          clear: both;
        }

        .pink{
          background: var(--ll-pink);
        }

        img.image{
          width: 100%;
          border: 2px solid var(--ll-black);
          opacity: 0;
        }

        .panel{
          width: 100%;
          position: relative;
          font-family: IBMLight;
          font-size: 1em;
          display: flex;
          align-items: center;
        }

        <!-- div.imgcontainer{
          width: 40vw;
          display: inline-block;
          float: left;
          margin: 5vw 5vw 5vw 5vw;

          background-image: url("img/city.jpg");
          /* Set a specific height */
          

          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        } -->

        div.imgcontainer{
          width: 45vw;
          display: inline-block;
          float: left;
          margin: 5vw 2.5vw 5vw 2.5vw;
          background-image: url("img/sm-2.jpg");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        div.textcontainer{
          display: inline-block;
          float: left;
          line-height: 2.5em;
          font-family: IBMRoman;
          font-size: 1.25em;
          width: calc(50% - 20vw);
          padding: 5vw 10vw 5vw 10vw;
        }

        .title {
          display: block;
          font-family: IBMBold;
          margin: 5vh 0;
          font-size: 2.5em;
          text-align: left;
        }

        @media screen and (max-width : 760px){
          .textcontainer{
            width: calc(100% - 10vw) !important;
            padding: 0 5vw 2.5vh 5vw!important;
            margin: 0 !important;
            text-align: center !important;
            line-height: 2em !important;
          }
          .title{
            text-align: center !important;
          }
          .imgcontainer{
            display: block;
            width: calc(100% - 11vw) !important;
            padding: 2.5vh 5vw 0 5vw !important;
            margin: 0 !important;
            display: none !important;
          }
          .panel{
            text-align: center !important;
            display: block;
            align-items: initial;
          }
          img.image{
            
          }
          .parallax{
            display: none;
          }
        }

        .parallax {
          /* The image used */
          background-image: url("img/city.jpg");

          /* Set a specific height */
          height: 500px;
          max-height: 40vh;

          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        paper-button.contact{
          border: 3px solid var(--ll-black);
          border-radius: 0em;
          text-transform: capitalize;
          font-family: IBMBold;
          padding: .5vh 2vw !important;
          margin: 2.5vh 0 !important;
          color: var(--ll-black);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease; 
        }

        paper-button.contact:hover{
          background: var(--ll-black);
          color: var(--ll-pink);
        }
      }
      </style>

      <div class="parallax"></div>

      <div class="panel">

        <div class="imgcontainer">
          <img class="image" src="img/lexi_i.png" alt>
        </div>
        <div class="textcontainer" id="content">
          <div class="title">About Us</div>
          <div class="paneltext">
            L Squared Social specializes in targeted digital advertising. 
            We utilize modern technologies to help you grow your business to its full potential.
            Our specialty is using advanced targeting on all the most popular
            social media platforms, mobile apps and websites to get you exposure in 
            front of the ideal crowd.

            <div>
              <paper-button class="contact" on-tap="_goto" value="contact">Contact Us</paper-button>
            <div>

          </div>
        </div>

      </div>
      
      
    `}static get properties(){return{}}_findPos(obj){var curtop=0;if(obj.offsetParent){do{curtop+=obj.offsetTop}while(obj=obj.offsetParent);if(this.mobile){curtop-=100}return[curtop]}}ready(){super.ready();var self=this,w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;w=760>w?!0:!1;this.set("mobile",w);$.subscribe("_goto",function(event,data){if("about"==data){window.scroll(0,self._findPos(self.$.content))}})}_goto(e){var value=e.target.getAttribute("value");$.publish("_goto",value)}}window.customElements.define("lexisite-about",LexisiteAbout)});