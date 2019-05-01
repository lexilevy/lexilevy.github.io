define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/app-layout/app-layout.js","../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/paper-input/paper-input.js","../../node_modules/@polymer/iron-dropdown/iron-dropdown.js","../../node_modules/fa-icon-polymer/fa-icon.js"],function(_polymerElement,_appLayout,_appScrollEffects,_appHeader,_appToolbar,_paperIconButton,_ironIcons,_paperButton,_paperInput,_ironDropdown,_faIcon){"use strict";class LexisiteContact extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>

        :host{
          display: block;
          height: auto;
          width: auto;
          clear: both;
        }

        .container {
          position: relative;

          margin: 0 auto;
          text-align: center;
          overflow: hidden;
        }

        .panel{
          width: 100%;
          position: relative;
          font-family: IBMLight;
          font-size: 1em;
          display: flex;
          align-items: center;
        }

        div.textcontainer{
          text-align: center;
          display: inline-block;
          float: left;
          line-height: 3em;
          font-family: IBMRoman;
          font-size: 1.25em;
          width: 100%;
          padding: 5vw 10vw 5vw 10vw;
        }

        .title {
          text-align: center;
          display: block;
          font-family: IBMBold;
          margin: 5vh 0;
          font-size: 2.5em;
          text-align: left;
        }

        .inputcontainer{
          width: 60%;
          display: inline-block;
          margin: 1vh 1vw;
        }

        paper-input.input{
          width: 50vw;
          display: inline-block;
          text-align: left;
          
          --primary-text-color                : var(--ll-black);
          --paper-input-container-color       : var(--ll-black);
          --paper-input-container-focus-color : var(--ll-black);
          
          border-radius: 0px;
          margin-bottom: 3vh;

          /* Reset some defaults */
          --paper-input-container: { 
            padding: 0;
          };
          --paper-input-container-underline: { 
            display: none; 
            height: 0;
          };
          --paper-input-container-underline-focus: { 
            display: none; 
          };

          --paper-input-container-input: {
            box-sizing: border-box;
            font-size: inherit;
            padding: 0 8px;
            font-family: IBMLight;
            font-size: 1.25em;
            background: var(--ll-light-border);
          };

          --paper-input-container-input-focus: {
          };
          

          --paper-input-container-label: {
            top: 0;
            left: 0px;
            padding: 2px;
            font-weight: bold;
            font-family: IBMBold;
            font-size: 1.5em;
            padding: 0vh 0;
          };
          --paper-input-container-label-floating: {
            width: auto;
          };
        }
        paper-input.input:hover {

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
          
          .panel{
            text-align: center !important;
            display: block;
            align-items: initial;
          }

          paper-input.input{
            width: 80vw;
          }

          paper-button.contact{
            margin-bottom: 7.5vh !important;
            margin-top: 0 !important;
          }
          --paper-input-container-input: {
            font-size: 1.25em;
          }

        }


      }
      </style>

      <div class="panel">

        <div class="textcontainer" id="content">
          <div class="title">Contact Us</div>
          <div class="paneltext">
            <paper-input name="name"  label="Name"  class="input" always-float-label id="name"></paper-input>
            <paper-input name="email" label="Email" class="input" always-float-label id="email"></paper-input>
            <paper-input name="phone" label="Phone" class="input" always-float-label id="phone" allowed-pattern="[0-9]"></paper-input>

            <div>
              <paper-button class="contact" on-tap="_submitForm">Submit</paper-button>
            <div>

          </div>
        </div>

      </div>

      <form id="form" method="post" name="myemailform" 
      action="https://mailthis.to/jplatz@umich.edu">
      </form>
    `}static get properties(){return{}}ready(){super.ready();this._addSubscribers()}_findPos(obj){var curtop=0;if(obj.offsetParent){do{curtop+=obj.offsetTop}while(obj=obj.offsetParent);if(this.mobile){curtop-=100}return[curtop]}}_addSubscribers(){var self=this;$.subscribe("_goto",function(event,data){if("contact"==data){window.scroll(0,self._findPos(self.$.content))}})}_submitForm(){var name=this.$.name.value,phone=this.$.phone.value,email=this.$.email.value;if(null==name||""==name){alert("Please enter a Name");return}if(null==email||""==email){alert("Please enter an Email");return}if(null==phone||""==phone){alert("Please enter a Phone Number");return}$.post("https://mailthis.to/jplatz@umich.edu",{email:email,phone:phone,name:name}).then(function(){location.href="https://mailthis.to/confirm"})}}window.customElements.define("lexisite-contact",LexisiteContact)});