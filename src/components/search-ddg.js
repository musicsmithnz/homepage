import {Element as PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';

export class SearchDdg extends PolymerElement {

    static get template() {
        return `
        <!--
            <link href="//cdn.muicss.com/mui-0.9.36/css/mui.min.css" rel="stylesheet" type="text/css" />
                <script src="//cdn.muicss.com/mui-0.9.36/js/mui.min.js"></script>
            -->
            <link rel="stylesheet" href="node_modules/materialize-css/dist/css/materialize.css"></link>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script> 
            <style>        
                .content-box{
        	    box-sizing: border-box;
        	    margin: 4px;
        	    padding: 0px;
        	    border: 4px #EAEBEC solid;
        	    height: 200px;
        	    width: 80%;
        	    border-radius: 12px;
        	    background: #fff;
            }
            button {
                width: 100%;
            }
            input#search {
                background-color: white;
                border-radius: 0.3em 0.3em 0em 0em;
                padding: .2em .4em;
            }
            form{
                display: flex;
                justify-content: center;
                flex-direction: column;
            }
            form > * {
                flex: 0 1 auto;
            }
            </style>
            <form crole="search" action="https://duckduckgo.com/" draggable=true class="mui-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="text" name="q" class="validate" autofocus id="search" placeholder="duckduckgo">
                    <label for="q"></label>
                </div>
                <button type="submit" class="mui-btn mui-btn--raised btn btn-default">Search</button>
            </form>
                                                                                                
            `
    }
    constructor() {
        super();
        this.name = 'search ddg';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('search-ddg', SearchDdg);
