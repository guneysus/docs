# datetime

- [datetime](#datetime)
  - [string to datetime](#string-to-datetime)
  - [unix time stamp to datetime](#unix-time-stamp-to-datetime)
    - [example](#example)

## string to datetime

Converts a string to datetime whose format is known.

```csharp
DateTime datetime(string s, string format, string cultureString)
```

```csharp
DateTime date = datetime("29021996", "ddMMyyyy", "en-US")
// 1996-02-29

DateTime date = datetime("2016 3", "yyyy M", "en-US")
// 2016-03-01

DateTime date = datetime("2016/31 Ocak", "yyyy/d MMMM", "tr-TR")
// 2016-01-31

DateTime date = datetime("11/شعبان/1437", "dd/MMMM/yyyy", "ar-SA")
// 2016-05-18
```

## unix time stamp to datetime

Converts a string to datetime whose format is known.

```csharp
DateTime datetime(long seconds, DateTimeKind dateTimeKind)
```

### example

```csharp
DateTime date = datetime(946684800, DateTimeKind.Unspecified)
// 2000-01-01

DateTime date = datetime(946684800, DateTimeKind.Utc)
// 2000-01-01
```
