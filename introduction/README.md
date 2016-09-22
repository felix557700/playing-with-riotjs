# playing-with-riotjs

`npm init`
`npm install riot --save`

- In browser compilation
- mount specific tag or all tags
- tag state/logic => js
- tag style
- one way binding
- two way binding automatic or manual this.update() (inside setTimeout)
    - with js
    ```html
        <input type="text" value="{person}" onkeyup="{changePerson}"/>
      	<div>Hello {person}</div>
    ```
    ```js
        this.changePerson = function (e) {
            this.person = e.target.value;
        }
    ```
    
    - without js
    ```html
        <input type="text" name="person" onkeyup="{update}"/>
        <div>Hello {person.value}</div>
    ```
        
- riot tag events:
    - mount
    - update
    - updated
    - unmount
    
# testing
`npm install --save-dev chai karma karma-chai karma-mocha karma-mocha-reporter karma-phantomjs-launcher karma-riot moch
 a phantomjs-prebuilt`
 
- `karma init`

- write some unit tests for tag logic

- run all tests with `karma start`