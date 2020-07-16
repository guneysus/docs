# miliseconds

## datetime to unix miliseconds

converts given datetime to unix miliseconds.

```csharp
long miliseconds(DateTime datetime)
```

```csharp
var date = new DateTime(2000, 1, 13, 0, 0, 0, DateTimeKind.Local)

miliseconds(date)
// 947714400000
```
