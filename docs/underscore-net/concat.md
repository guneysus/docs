# concat

## concatenate chars

concatenates given characters

```csharp
string concat(params char[] vs)
```

```csharp
concat('0', 'x', 'f', 'f')
// "0xff"
```

## concatenate strings

concatenates given strings

```csharp
string concat(params string[] vs)
```

```csharp
concat("abc", "a", "bc");
// "abc"
```
