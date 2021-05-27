# optional-js
Simple Optional Wrapper Around Object Properties To Prevent Errors When Key Doesn't Exist


`# optional()`

> _The optional function accepts any argument and allows you to access properties or call methods on that object. If the given object is null, properties_  > _and methods will return null instead of causing an error:_

```js
let { optional } = require('optional-js')

return optional(user.address).street
```

> _The optional function also accepts a closure as its second argument. The closure will be invoked if the value provided as the first argument is not null:_

```js
let { optional } = require('optional-js')

return optional(user.name, (user) => {
	return 'sarah'
})
```