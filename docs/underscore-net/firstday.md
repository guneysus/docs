# first day

## first day of month

```csharp
DateTime firstday(DateTime date)
```


```csharp
DateTime date = new DateTime(2016, 12, 3);
DateTime firstDayOfMonth = firstday(date);       // 2016-12-01
```

## first day of year

```csharp
DateTime firstday(int year, DateTimeKind kind = DateTimeKind.Unspecified)
```


```csharp
DateTime firstDayOfYear = firstday(2016);       // 2016-12-01
```
