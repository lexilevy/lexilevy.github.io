import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import '@polymer/iron-collapse/iron-collapse.js';

/**
 * @customElement
 * @polymer
 */
class LexisiteServices extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host{
          display: block;
          width: auto;
          height: auto;
          clear: both;
        }

        .quarter{
          width: 18vw;
          margin: 0 1vw 0 1vw;
          display: inline-block;
          vertical-align: top;
        }

        .imagetext{
          font-family: IBMBold;
          font-size: 1em;
          line-height: 1.5em;
        }

        .imagetextlong{
          font-family: IBMLight;
          line-height: 1.5em;
          text-align: left;
          margin-top: 2.5vh;
          font-size: .85em;
        }

        img.image{
          width: 100%;
          height: 100%;
          border: 2px solid var(--ll-black);
        }

        .panel{
          width: 100%;
          position: relative;
          font-family: IBMLight;
          font-size: 1em;
          display: flex;
          align-items: center;
        }

        .paneltext{
          text-align: center;
        }

        div.imgcontainer{
          width: 45vw;
          display: inline-block;
          float: left;
          margin: 5vw 2.5vw 5vw 2.5vw;
        }

        div.textcontainer{
          display: inline-block;
          float: left;
          line-height: 3em;
          font-family: IBMRoman;
          font-size: 1.25em;
          width: calc(100% - 15vw);
          padding: 5vw 5vw 5vw 5vw;
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
            line-height: 1.25em;
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
          .quarter{
            display: block;
            width: 100%;
          }
          img.image {
            width: 50%;
          }
          .imagetextlong {
            line-height: 1.5em;
            margin-top: 2.5vh;
            margin-bottom: 5vh;
            font-size: 1em;
          }
          .imagetext {
            font-family: IBMBold;
            font-size: 1.25em;
            line-height: 1.5em;
            margin-top: 2.5vh;
          }
        }

        .parallax {
          /* The image used */
          background-image: url("img/cover.png");

          /* Set a specific height */
          height: 500px;
          max-height: 40vh;

          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        paper-button.dropdownbutton{
          display: block;
          font-family: IBMRoman;
          text-transform: Capitalize;
          color: var(--ll-black);
          background: var(--ll-white);
          border-radius: 0;
          margin: 2.5vh 0 !important;
          padding: 1vh 1vw !important;
          border: 1px solid var(--ll-light-border);
        }

        paper-button.dropdownbutton:hover{
          background: var(--ll-pink);
          border: 1px solid var(--ll-black);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        div.dropdowncontent{
          font-family: IBMLight;
          text-align: left;
          background: var(--ll-white);
          padding: 1vh 1.5vw 1vh 1vw !important;
          line-height: 1.5em;
          margin-top: -2.5vh !important;
          border-left: 1px solid var(--ll-dark-border);
          border-right: 1px solid var(--ll-dark-border);
          border-bottom: 1px solid var(--ll-dark-border);
        }

      }
      </style>

      <div class="parallax"></div>

      <div class="panel">

        
        <div class="textcontainer" id="content">
          <div class="title">What We Do For You</div>
          <div class="paneltext">
            <div class="quarter">
              <img class="image" src="img/animat-image-color.gif" alt>
              <div class="imagetext">Custom Content Creation</div>
              <div class="imagetextlong">
                We showcase your brand with customized content that aligns with your business goals. L Squared specializes in establishing cutomer loyalty by placing the right content in front of the right audiences.
              </div>
            </div>
            <div class="quarter">
              <img class="image" src="img/animat-responsive-color.gif" alt>
              <div class="imagetext">Social Media Advertising</div>
               <div class="imagetextlong">
                With increasing complexity and competitiveness of the social ad marketplace, it is important to entrust your ad spend to proven specialists that can maximize your ROI.
              </div>
            </div>
            <div class="quarter">
              <img class="image" src="img/animat-checkmark.gif" alt>
              <div class="imagetext">Community Managment</div>
              <div class="imagetextlong">
                We immerse ourselves in your brand’s channels to engage potential and current customers, brand advocates, media and other interested audiences to grow your social communities.
              </div>
            </div>
            <div class="quarter">
              <img class="image" src="img/animat-linechart-color.gif" alt>
              <div class="imagetext">Monitoring & Analytics</div>
              <div class="imagetextlong">
                We utilize insights from your social profiles to evolve your messaging & digital marketing efforts. We set goals and deliver custom-designed reports that help you see what’s needed to meet those goals.
              </div>
            </div>
          </div>

        </div>
      </div>

      
      
      
    `;
  }
  static get properties() {
    return {
      
    };
  }

  ready(){
    super.ready();
    var self = this;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    w = w < 760 ? true : false;
    this.set("mobile", w);

    $.subscribe("_goto", function(event, data) {
      if(data == "services"){
        window.scroll(0,self._findPos(self.$.content));
      }
    });
  }

  _findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);

    if(this.mobile){
      curtop -= 100;
    }
    return [curtop];
    }
  }

  _openDropdown(e){
    var self = this;

    var value = e.target.getAttribute("value");
    if(value == "one"){
      this.set("dropdownselected", "one");
      self.$.one.toggle();
      self.$.two.hide();
      self.$.three.hide();
      self.$.four.hide();
    }
    if(value == "two"){
      this.set("dropdownselected", "two");
      self.$.one.hide();
      self.$.two.toggle();
      self.$.three.hide();
      self.$.four.hide();
    }
    if(value == "three"){
      this.set("dropdownselected", "three");
      self.$.one.hide();
      self.$.two.hide();
      self.$.three.toggle();
      self.$.four.hide();
    }
    if(value == "four"){
      this.set("dropdownselected", "four");
      self.$.one.hide();
      self.$.two.hide();
      self.$.three.hide();
      self.$.four.toggle();
    }
  }

  

// - # social accounts
// - posts per 
// - content calendar
// - community management
//   - responding to users
//   - removal of bad content, spam .. etc
// - monitoring and analtyics
// - paid ad campaigns
// - email marketing
// - success refinement meetings (rename how often you will meet 
//   with clients to re-fine, consult, etc)


}

window.customElements.define('lexisite-services', LexisiteServices);
