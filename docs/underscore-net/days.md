# day names

## by culture name

```csharp
IEnumerable<string> days(string cultureName,
                         DayOfWeek firstDayOfWeek = DayOfWeek.Monday)
```

```csharp
IEnumerable<string> dayNamesEN = days("en-US", DayOfWeek.Monday);
/*
"Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday", "Sunday"
*/
```

## by culture

```csharp
IEnumerable<string> days(CultureInfo cultureInfo,
                         DayOfWeek firstDayOfWeek = DayOfWeek.Monday)
```

```csharp
CultureInfo culture = CultureInfo.GetCultureInfo("en-US")
IEnumerable<string> dayNamesEN = days(culture, DayOfWeek.Monday)
/*
"Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday", "Sunday"
*/
```
