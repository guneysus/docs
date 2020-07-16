# compact

## removes null

returns a new collection filtering out null values.

```csharp
IEnumerable<T> compact<T>(IEnumerable<Nullable<T>> items) where T : struct
```

```csharp
var items = new List<int?>(new int?[] { 1, 2, null, 3, null, 5, 6 })
compact(numbers)
// 1, 2, 3, 5, 6
```
