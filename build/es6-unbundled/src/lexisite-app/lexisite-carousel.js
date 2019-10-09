define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/app-layout/app-layout.js","../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-dropdown/iron-dropdown.js"],function(_polymerElement,_appLayout,_appScrollEffects,_appHeader,_appToolbar,_paperIconButton,_ironIcons,_paperButton,_ironDropdown){"use strict";class LexisiteCarousel extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host{
          display: block;
          padding-bottom: 2.5vh;
          padding-top: 5vh;
          background-color: #fed6e4;
          background-image: url("img/linen.png");
        }

        .pink{
          background: #fed6e4;
        }

        div.carouselmobile-true{
          margin-top: 0vh !important;
          margin-bottom: -10vh !important
        }

        img.logo{ 
          background: white;
          width: 40%; 
          max-width: 360px;
          position: absolute; 
          left: 30%;
          transform-origin: 50% 50% -500px;
          outline: 3px solid var(--ll-black); 
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease; 
        }

        img.mobile-true{
          width: 80%; 
          position: absolute; 
          left: 10%;
          transform-origin: 50% 50% -500px;
        }

        .big{
          text-align: center;
          font-size: 3em;
          font-family: IBMBold;
          text-shadow: 2px 2px #0000001a;
          margin-bottom: 2.5vh;
        }

        .small{
          text-align: center;
          font-size: 2em;
          font-family: IBMLight;
          width: 100%;
          text-shadow: 2px 2px #0000001a;
        }

        span.logotext{
          letter-spacing: -1.5px;
        }

        span.bold{
          font-family: IBMBold;
        }

        div.outerindust{
          border-top: 2px solid var(--ll-black);
          border-bottom: 2px solid var(--ll-black);
          width: 90%;
          margin-left: calc(5% - 1vw);
          margin-top: 5vh;
          padding: 2.5vh 1vw;
          text-align: center;
        }

        span.industry{
          font-family: IBMBold;
          font-size: 1.125em;
          padding-right: 2vw;
          letter-spacing: 1px;
        }

        .container {
          margin: 0 auto;
          width: 30vw;
          height: 24vw;
          position: relative;
          perspective: 1000px;
          margin-top: 10vh;
        }

        .containermobile-true{
          width: 50vw !important;
          height: 40vw !important;
          margin-top: 2.5vh;
        }

        .carousel {
          height: 100%;
          width: 100%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 1s;
        }

        .item {
          display: block;
          position: absolute;
          width: 22vw;
          height: 16vw;
          line-height: 22vw;
          font-size: 5em;
          text-align: center;
          border-radius: 0px;
          margin: 4vw;
          background: white;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 1.0;
          border: 2px solid var(--ll-black);
        }

        .item-true{
          width: 36vw !important;
          height: 26vw !important;
          margin: 6vw !important;
        }

        .item:hover{
          border: 2px solid var(--ll-pink);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease; 
        }

        .a {
          transform: rotateY(0deg) translateZ(30vw);
          background-image: url("img/bakedsweet_logo_2.png");
        }
        .a-true{
          transform: rotateY(0deg) translateZ(50vw);
        }

        .b {
          transform: rotateY(45deg) translateZ(30vw);
          background-image: url("img/betterthanbefore_logo_2.png");
        }
        .b-true{
          transform: rotateY(45deg) translateZ(50vw);
        }

        .c {
          transform: rotateY(90deg) translateZ(30vw);
          background-image: url("img/companion_logo_2.png");
        }
        .c-true{
          transform: rotateY(90deg) translateZ(50vw);
        }

        .d {
          transform: rotateY(135deg) translateZ(30vw);
          background-image: url("img/go_answer.jpg");
        }
        .d-true{
          transform: rotateY(135deg) translateZ(50vw);
        }

        .e {
          transform: rotateY(180deg) translateZ(30vw);
          background-image: url("img/tips_on_trips.jpg");
        } 
        .e-true{
          transform: rotateY(180deg) translateZ(50vw);
        }

        .f {
          transform: rotateY(225deg) translateZ(30vw);
          background-image: url("img/pawcasso_logo_1.png");
        }
        .f-true{
          transform: rotateY(225deg) translateZ(50vw);
        }

        .g {
          transform: rotateY(270deg) translateZ(30vw);
          background-image: url("img/jill_logo_2.png");
        }
        .g-true{
          transform: rotateY(270deg) translateZ(50vw);
        }

        .h {
          transform: rotateY(315deg) translateZ(30vw);
          background-image: url("img/foodie_logo_2.png");
        }
        .h-true{
          transform: rotateY(315deg) translateZ(50vw);
        }

        .textcontainer{
          margin-top: 5vh;
        }

        @media screen and (min-width : 1250px){
          .container {
            width: 25vw;
            height: 20vw; 
          }

          .item {
            width: 19vw;
            height: 14vw;
            line-height: 19vw;
            margin: 3vw;
          }
          .a {
            transform: rotateY(0deg) translateZ(25vw);
          }
          .b {
            transform: rotateY(45deg) translateZ(25vw);
          }
          .c {
            transform: rotateY(90deg) translateZ(25vw);
          }
          .d {
            transform: rotateY(135deg) translateZ(25vw);
          }
          .e {
            transform: rotateY(180deg) translateZ(25vw);
          }
          .f {
            transform: rotateY(225deg) translateZ(25vw);
          }
          .g {
            transform: rotateY(270deg) translateZ(25vw);
          }
          .h {
            transform: rotateY(315deg) translateZ(25vw);
          }

        }

      </style>

      <div class$="container containermobile-[[mobile]]">
        <div id="carouselid" class$="carousel carouselmobile-[[mobile]]">
          <div class$="item a a-[[mobile]] item-[[mobile]]"></div>
          <div class$="item b b-[[mobile]] item-[[mobile]]"></div>
          <div class$="item c c-[[mobile]] item-[[mobile]]"></div>
          <div class$="item d d-[[mobile]] item-[[mobile]]"></div>
          <div class$="item e e-[[mobile]] item-[[mobile]]"></div>
          <div class$="item f f-[[mobile]] item-[[mobile]]"></div>
          <div class$="item g g-[[mobile]] item-[[mobile]]"></div>
          <div class$="item h h-[[mobile]] item-[[mobile]]"></div>
        </div>
      </div>

      <div class="textcontainer">
        <div class="big">You’re in good company.</div>
        <div class="small">Ask any of our clients, <template is="dom-if" if="[[mobile]]"><br></template> <span class="logotext"><span class="bold">L Squared</span> Social</span> is the right solution for your company</div>
      </div>

      <div class="outerindust">
        <span class="industry">Retail</span>
        <span class="industry">Lifestyle</span>
        <span class="industry">Fashion</span>
        <span class="industry">Pets</span>
        <span class="industry">Packaged Goods</span>
        <span class="industry">E-Commerce</span>
        <span class="industry">More</span>
      </div>

    `}static get properties(){return{}}ready(){super.ready();var self=this;this.set("mobile",!1);this._startSpinner();this._resizeWindowFunction();window.resize=function(){this._resizeWindowFunction()}}_startSpinner(){var self=this,carousel=this.$.carouselid;this.set("currdeg",0);var self=this;setInterval(function(){self._rotate()},2500)}_rotate(){var carousel=this.$.carouselid,newdegree=this.currdeg;newdegree=newdegree-45;carousel.style.webkitTransform="rotateY("+newdegree+"deg)";carousel.style.transform="rotateY("+newdegree+"deg)";this.set("currdeg",newdegree)}_resizeWindowFunction(){var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;w=760>w?!0:!1;this.set("mobile",w)}}window.customElements.define("lexisite-carousel",LexisiteCarousel)});