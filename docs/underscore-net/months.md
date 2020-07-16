# months

## by culture name

```csharp
IEnumerable<string> months(string cultureName)
```

```csharp
months("en-US")
/*
January, February, March, April, May, June,
July, August, September, October, November, December
*/
```

## by culture

```csharp
IEnumerable<string> months(CultureInfo cultureInfo)
```

```csharp
CultureInfo culture = CultureInfo.GetCultureInfo("en-US")
months(culture)

/*
January, February, March, April, May, June,
July, August, September, October, November, December
*/
```
