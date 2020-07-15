# months

## by culture name

```csharp
IEnumerable<string> months(string cultureName)
```


```csharp
IEnumerable<string> monthsEn = months("en-US");

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
CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
IEnumerable<string> monthsEn = months(culture);

/*
January, February, March, April, May, June,
July, August, September, October, November, December
*/
```
