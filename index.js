let copyPasteTemplate = document.createElement('template');
	copyPasteTemplate.innerHTML = 
	`<style>

	.copypaste {
		box-sizing: border-box;
	display: grid;
    grid-template-columns: max-content max-content;
  }
  
  @media (max-width: 340px) {
    .copypaste {
      grid-template-columns: 1fr;
      justify-content: center;
      justify-items: center;
      grid-gap: 10px;
    }
  }
  
  button {
    font-family: inherit;
	border: 0;
	border-radius: 5px;
	background-color: rgb(245,245,245);
	color: rgb(40,40,40);
	box-shadow: 0 1px 3px 0px rgba(0,0,0,0.2);
    font-size: 15px;
    text-align: center;
    display: flex;
    align-items: center;
	position: relative;
	outline: 0;
	padding: 0 10px;
	font-weight: 500;
	margin-left: 10px;
  }

  button:focus {
	outline: 0;
	border: 0;    
  }

  button:focus-visible {
	  outline: auto;
  }

  button:active {
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.2);
}

  svg {
    
    position: absolute;
    right: -28px;
  }

  .opacity0 {
	  opacity: 0;
	  transition: opacity .2s ease-out;
  }


  span {
	  padding: 10px 22px;
	  border: solid 1px #dadada;
	font-weight: 600;
	font-size: inherit;
	caret-color: transparent;
	cursor: default;
	background-clip: content-box;
  }
    
  span , span:focus, span:active {
    display: inline-block;
    text-align: center;
    outline: none;
  }

  span:hover {
	background-color: rgb(178, 215, 255);
  }
  
  span::selection {
      background-color: transparent;
  }
  
  span::-moz-selection {
      background-color: transparent;
  }

  </style>
	
	<div class="copypaste">
            <span spellcheck="false" contenteditable="true"></span>
            <button>Copy <?xml version="1.0" encoding="UTF-8" standalone="no"?>
              <svg class="opacity0" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>iconography/status-complete</title>
                  <defs></defs>
                  <g id="iconography/status-complete" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Group-10" transform="translate(2.000000, 2.000000)">
                          <circle id="Oval-2" fill="#3dd28d" cx="10" cy="10" r="10"></circle>
                          <path d="M8.07715491,12.0625 C8.50813743,11.2113095 8.87281495,10.4255952 9.30379747,9.67261905 C9.66847498,9.01785714 10.1657625,8.19940476 10.729355,7.47916667 C11.2929476,6.69345238 11.7239301,6.13690476 12.0886076,5.77678571 C12.4532851,5.41666667 12.7185051,5.1547619 12.8842676,5.12202381 C13.0500301,5.08928571 13.3152502,4.92559524 13.7462327,4.89285714 C14.1109102,4.82738095 14.4092827,4.76190476 14.6745027,4.76190476 C14.8734177,4.76190476 14.9728752,4.82738095 15.0391802,4.89285714 C15.1717902,5.02380952 15.2380952,5.12202381 15.2380952,5.25297619 C15.2380952,5.38392857 15.2380952,5.48214286 15.1717902,5.54761905 C15.1054852,5.61309524 14.9728752,5.77678571 14.8071127,5.9077381 C13.9451477,6.69345238 13.0168776,7.87202381 12.0223026,9.3125 C11.0940325,10.7857143 10.2983725,12.2261905 9.73477999,13.5684524 C9.50271248,14.125 9.37010247,14.485119 9.23749247,14.6160714 C9.17118746,14.9107143 9.03857746,15.0416667 8.87281495,15.1071429 C8.67389994,15.2380952 8.37552743,15.2380952 7.8782399,15.2380952 C7.51356239,15.2380952 7.31464738,15.2380952 7.21518987,15.172619 C7.08257987,15.1071429 6.98312236,15.0416667 6.91681736,14.9761905 C6.85051236,14.8452381 6.68474985,14.6815476 6.48583484,14.3541667 C6.18746233,13.8630952 5.75647981,13.3720238 5.25919228,12.8154762 C4.96081977,12.4553571 4.76190476,12.1934524 4.76190476,11.9642857 C4.76190476,11.6696429 4.96081977,11.4077381 5.25919228,11.1130952 C5.6238698,10.8839286 5.92224231,10.7529762 6.18746233,10.7529762 C6.48583484,10.7529762 6.81735986,10.8839286 7.11573237,11.047619 C7.48040989,11.3422619 7.7787824,11.6369048 8.07715491,12.0625 Z" id="Shape" fill="#FFFFFF"></path>
                      </g>
                  </g>
              </svg></button>
         </div>`;


	class CopyPaste extends HTMLElement {

		static get observedAttributes() {
			return ['text'];
		}
		get text() {
			return this.getAttribute('text');
		}

		set text(newValue) {
			this.setAttribute('text', newValue);
		}

		attributeChangedCallback(name, oldValue, newValue) {
			if (name === 'text') {
					this.shadowRoot.querySelector('span').textContent = newValue;
			}
		}

		constructor() {
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.appendChild(copyPasteTemplate.content.cloneNode(true));
		}

		connectedCallback() {
			let copyButton = this.shadowRoot.querySelector('button');
			let textToCopy = this.shadowRoot.querySelector('span');
			let svg = this.shadowRoot.querySelector('svg');
			console.log(textToCopy)

			function selectElementContents(el) {
    		var range = document.createRange();
    		range.selectNodeContents(el);
    		var sel = window.getSelection();
    		sel.removeAllRanges();
    		sel.addRange(range);
			}

			function copyText() {
			selectElementContents(textToCopy);
   		 	document.execCommand('copy');
    		svg.classList.remove('opacity0');
      	 	setTimeout(function() {
         	svg.classList.add('opacity0');
       		}, 700); 
		}

			copyButton.addEventListener('click', copyText);
			textToCopy.addEventListener('click', copyText);

		}	
		}

window.customElements.define('copy-paste', CopyPaste);

export default CopyPaste;