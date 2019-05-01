import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-dropdown/iron-dropdown.js';

/**
 * @customElement
 * @polymer
 */
class LexisiteApp extends PolymerElement {
  static get template() {
    return html`
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

      
    `;
  }
  static get properties() {
    return {
      
    };
  }

  ready(){
    super.ready();
  }

  _addSubscribers(){
    var self = this;
  }

}

window.customElements.define('lexisite-app', LexisiteApp);
