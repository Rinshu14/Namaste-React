
## JSX--



JSX is a syntax extension that lets us write HTML like markup in a javaScript file. in early days of react writing code even for a simple react elemnt was too long and when it becomes on nested element it become even harder and messey and it it was not even readable than JSX came into picture in which we can react element by writing HTML like code.
ex--
``` 
const head=<h1>heading</h1>


const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(head);
``` 
here head is variable that holds the JSX code and we can render it to our dom

```
here head is variable that holds the JSX code and we can render it to our dom

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(head);



This JSX code first transpiled into react element by babel. 
React and JSX are two diffrent things and can be used independently.


## JSX Superpowers-- 
Before JSX we used to write markup , CSS and markup in different files but with evolution of web apps as intreactive manipulating  HTML with javaScript is the requirement but doing it by using seprate files for HTML, CSS and Js was a pain for developers . Than JSX came into picture that lets the developers write HTML like syntax in js files itself and it increases efficeincy and readability of code also.

## {TitleComponent} Vs <TitleComponent/> Vs <TitleComponent><TitleComponent/>
`{TitleComponent}`: It state that TitleComponent is javascript variable or expression and it can be used in {} in JSX.
`<TitleComponent/>`: It state that TitleComponent is  component in react that is returning some JSX. A component is written in this format in <componentName/> react if it doesn't have any children.

`<TitleComponent><TitleComponent/>`:It ia also a component in react but this time it is having some children that we write between them.

```
<TitleComponent>
<ChildComponent1/>
<ChildComponent2/>
<TitleComponent/> 

``` 

## type attribute in <script> tag
type of script that we given in src attribute. It helps browser to correctly interpret the content of the file.
values for type attribute-
`empty string` : It is  default value of type attribute. It indicate that the script contains classic javascript code .
`module`: It indicate that the script contains javascript module . module scripts require the use of the CORS protocol for cross-origin fetching.
`importmap`: It indicates that the script contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.







JSX Superpowers-- 
Before JSX we used to write markup , CSS and markup in different files but with evolution of web apps as intreactive manipulating  HTML with javaScript is the requirement but doing it by using seprate files for HTML, CSS and Js was a pain for developers . Than JSX came into picture that lets the developers write HTML like syntax in js files itself and it increases efficeincy and readability of code also.

