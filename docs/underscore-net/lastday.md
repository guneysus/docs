# last day

## last day of month

```csharp
DateTime lastday(DateTime date)
```

```csharp
DateTime date = new DateTime(2016, 12, 3);
DateTime lastDayOfMonth = lastday(date);       // 2016-12-31
```

## last day of year

```csharp
DateTime lastday(int year, DateTimeKind kind = DateTimeKind.Unspecified)
```

```csharp
DateTime endOfYear = lastday(2016);       // 2016-12-31
```
