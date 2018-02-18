# atmc (In development, a lot of features do not yet work)
Atomic Web Component Project Generator. There is a * over sections in the Tutorial Contents that show the corresponding feature has not been implemented.

## Summary

`atmc` is a cli tool for quickly adding creating webcomponents. For extra powerful functionality, it uses the [related github polymer_web_components](https://github.com/musicsmithnz/polymer_web_components) which is a library still in development that contains ready-made components based on typical implementations from a variety of libraries which are listed below. The cli is usable without reference to these libraries, as you have the option to download components from decentralize [IPFS](https://ipfs.io) servers, as well as create your own elements without using these ready-made components at all. The cli tool is a useful way to install components quickly, rapidly speeding development, but it is also designed to be used with IPFS peers. Thus, if a significant number of people use this project, your website resources should load faster as each element will essentially be torrented separately by your peers hosting their own websites with these components.

It is a new project but I anticipate it being able to save people a lot of time in the future. It is made with Polymer3, using the new standard for importing components with ES modules. I plan to get code snippets from all major libraries and make Polymer3 Web Components from them. The Libraries I plan to use are

* [MUI](https://www.muicss.com) - A lightweight framework based on Google Material Design. It's a small project, but everything I've tested works right out of the box inside a Polymer3 component, unlike Bootstrap, Materialize, or even *gasp* Polymer components! I'm starting with this because it is so compatible.
* [Googles Material Design](https://material.io) - Lot's of elements to include, Google is working on making them more compatible with Polymer3.0, but there will be some basic Bootstraping I will need to do to fit them into this project. Although I hope I will be able to just include them from the Google repos without any changes at all.
* [Materialize](http://next.materializecss.com) - This is a pretty cool project, again, based on Material Design, and the newest version is JQuery independent, which is more than a *cool thing* when working with Web Components. The Project has a lot more than MUI, but it still doesn't seem to work right out of the box with Polymer3.0, I'm not sure why at this point.
* [Material Bootstrap](https://mdbootstrap.com)    - Because it's popular and should be easy to include, except if I can't easily get rid of JQuery. Perhaps only some compoents will be usable.
* [Bootstrap](https://getbootstrap.com) - Again, it's very popular, would be     great to include it.
* [Foundation](https://foundation.zurb.com) - Plenty of components in  this project to include.
* [Semantic-ui](https://semantic-ui.com/) - lot's of components, active develepmont, and components are ready made.

When `atmc` is downloaded, one can easily search, download, and insert web components into your own project. At the moment, entire libraries are imported for every element. Obviously this is not ideal. I intend to do some kind of code splicing and tree shakng so that each element has the bare minimum for each library. Bootstrap, Foundation, Material components can then all be easily used together(if you like), and in a much more minimal way. 



## Tutorial

1. [Installation](#installation)
2. [Building the App](#building)
    1. [Building Method 1 (Recommended) - Linking to Components](#building-method-1) *
    2. [Building Method 2 - Downloading, Customizing and Building Your Own Components](#building-method-2) *
3. [Serving](#serving) 
    1. [Serving Method 1 (Recommended) - Serving from IPFS](#serving-method-1) *
    2. [Serving Method 2 - Serving from Github](#serving-method-2)*
    3. [Serving Method 3 - Serving from CDN](#serving-method-3) *
    4. [Serving Method 4 - Serving from Local/Own Server](#serving-method-4) *

___

### 1. <a name="installation"></a>Installation

```bash
git clone https://github.com/musicsmithnz/atmc
cd atmc
yarn install
```

### 2. <a name="building"></a>Building the App

There are two main commands to be used to build a website. You can stick with one method, or you can do a little of each. 

1. [Building Method 1](#building-method-1) - Adding prebuilt elements using 
    `./atmc add prebuilt-component-name`
2. [Building Method 2](#building-method-2) - building your own components using 
    `./atmc new my-custom-component-name`

These two methods can be combined on the same project. If you want a simple introduction, choose [Building Method 1](#building-method-1)

#### <a name="building-method-1"></a>Building Method 1 - Linking to Components (in P2P/IPFS or other Repo)

```bash
./atmc add materialize-navbar
./atmc add mui-grid-fluid-1-2
./atmc add materialize-footer
```
The `<materialize-navbar>` and `<materialize-footer>` above will probably be exactly what you expect. The first word of the tag name is the css styling framework that is used, and the following words are a description of the tags content. The `<mui-grid-fluid-1-2>` is a grid for placing other elements inside. The `1-2` at the end represents the basic layout of the site. Which means the right section is twice the width of the left section.

Once each component has been added, a reference to the component will be inserted into your `index.html` file. At this point, you should be able to use the webcomponents within your `index.html` just like you would use any other html tag. For example, you could use the elements you added above like this:

```html
<body>
    <header>
        <materialize-navbar></materialize-navbar>
    </header>
    <main>
        <mui-grid-fluid-1-2></mui-grid-fluid-1-2>
    </main>
    <footer>
        <materialize-footer></materialize-footer>
    </footer>
</body>
```

#### <a name="building-method-2"></a>Building Method 2 - Downloading, Building, and Customizing New Components

```bash
./atmc new my-custom-navbar -s materialize
./atmc new my-custom-grid 
./atmc new my-custom-table -h html_template_url
./atmc new materialize-footer -b polymer_component_url
```

This code shows you how to create your own polymer web components. These components will be placed into a `components` folder. Note the options that can be used with this tag. 

Using `-s` you can add the name of one of the supported frameworks listed in the introduction and it will include links to the libraries in your polymer component. Note, this may use a lot of unnecessary code, as it includes the libraries separately for each element. This might be a problem, but your browser also might solve this automatically with cacheing. Also note, styles do leak out of Web Components in Firefox, but they don't in Chrome. It is better at this stage to stick with using one styling framework. I hope to include tools in this `atmc` later that will make it easier to [treeshake](https://en.wikipedia.org/wiki/Tree_shaking). Until then, stick with one styling framework or deal with the consequences.

The `-h` option needs to be followed by a the path or url of html that you wish to be included in the template. This is mostly useful for converting blocks of html into polymer web components. In the future, this might be able to be used in batch processes to crawl websites and produce custom components  programatically, perhaps in conjunction with [Beautiful Soup](https://pypi.python.org/pypi/beautifulsoup4/) or a Javascript equivalent, perhaps [Selenium](https://github.com/SeleniumHQ/selenium) or [Nightmare](https://github.com/segmentio/nightmare).

The `-b` tag allows you to choose a base component to use, which will use the path/url given but it will give the component the name you specify. This is useful for modifying existing prebuilt components. The downside is that these will not exist on IPFS peer hosting and you will have to link to these components locally or add the component to IPFS and host the component from there(you will be your own peer).

When the `--github`, `--cdn`, `--ipfs`, `--local` tags are implemented they will specify where the component should be hosted.

### 3. <a name="serving"></a>Serving

You can serve the components of this app through any repo you like. The supported choices are github, remote cdns, ipfs and local. Any custom components need to be served by something that you set up. You can set up local hosting, your own link, or an IPFS server(this is the recommended method, and the inspiration of this project). Since your html file is edited by you, it will need to set up by you. 
Any non-modified components can be downloaded from IPFS(I am hosting the components, in time, I hope others will join me hosting these components in IPFS, so it will be fast for all of us :) ), or you could download them yourself and make your `index.html` references to your components local. 


1. [Serving Method 1](#serving-method-1) - (Recommended) IPFS 
2. [Serving Method 2](#serving-method-2) - Github
3. [Serving Method 3](#serving-method-3) - CDN
4. [Serving Method 4](#serving-method-4) - Local


#### <a name="serving-method-1"></a>Serving Method 1 - (Recommended) IPFS

```bash

```

[Start your own IPFS server](https://www.youtube.com/watch?v=b6Epn_-vaqQ&t=332s). More information will be written about this soon. This is the recommended method. It is experimental, but the hope is that the components should be loaded quickly if a lot of people use them. And components are incredibly reusable as they are so modular and self-contained, and the styles are not supposed to leak outside of the component itself([The Shadow DOM](https://www.webcomponents.org/community/articles/introduction-to-shadow-dom)), although they do leak in Firefox 52.6!

#### <a name="serving-method-2"></a>Serving Method 2 - Github

```bash

```
See my Github https://github.com/musicsmithnz/polymer_web_components for the location of the development Github of the polymer web components. This will be updated frequently, but if you are downloading the versions from IPFS, it wont update, as any new files saved to IPFS gets saved based on its files hash. This means that if two files have the same content, but a different name, they are still the same file to IPFS. Files saved to IPFS are referenced according to their content.

#### <a name="serving-method-3"></a>Serving Method 3 - CDN

```bash

```
Use this if you want to use a custom styling Library that isn't supported. But to my knowledge, there is no easy way to use a CDN to deliver components to the user. Generally Polymer expects you to have the Library installed.

#### <a name="serving-method-4"></a>Serving Method 4 - Local/Your own server

```bash

```
Use this if you want to customize components and don't want to host them from IPFS.
