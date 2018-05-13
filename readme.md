__Dependency-free custom element with shadow DOM. Specify text as a property that a user can then copy to the clipboard.__

##Usage

- type `npm install copypaste-webcomponent` in your terminal
- import the module

	```
	<script type="module">
	import './node_modules/copypaste-webcomponent/index.js';
	</script>
	```
- plop the `<copy-paste></copy-paste>` component in your markup wherever you want it to appear!
- Be sure to specify some text as an attribute! e.g.

```
`<copy-paste text="lorem ipsum"></copy-paste>`
```