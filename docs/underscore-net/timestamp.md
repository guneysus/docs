# timestamp

## date to timestamp

converts given datetime to unix timestamp.

```csharp
int timestamp(DateTime date)
```

### usage

```csharp
var date   = new DateTime(2000, 1, 1, 0, 0, 0, DateTimeKind.Utc);
int actual = timestamp(date); // 946684800
```
