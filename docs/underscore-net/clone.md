# clone

## signature

```csharp
T clone<T>(T obj);
```

## cloning lists

```csharp
List<int> origin = new List<int>() { 1, 2, 3 };
List<int> cloned = clone(list);
```

## cloning classes

```csharp
var origin = new object();
var cloned = clone(obj);
Assert.NotEqual(origin, cloned);
```