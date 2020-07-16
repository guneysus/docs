# boolean

## string to boolean predefined

convert given string to boolean, true values predefined.
case insensitive.

```csharp
bool boolean(string value)
```

```csharp
boolean("1") // true
boolean("True") // true
boolean("False") // false
boolean("yes") // true
boolean("no") // false
boolean("on") // true
boolean("off") // false
boolean("checked") // true
boolean("non-checked") // false
boolean("unchecked") // false
```

## string to boolean with user defined

convert given string to boolean, true values passed by user.

```csharp
bool boolean(string value, params string[] trueValues)
```

```csharp
boolean("open", trueValues: "open") // true
boolean("closed", trueValues: "open") // false
```
