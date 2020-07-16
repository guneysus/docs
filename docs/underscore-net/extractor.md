# extractor

## extract text

extracts list of section from text with given regex pattern.

::: warning
use with caution. any regex input coming from untrusted source can cause
DDOS and service outages. At the this documentation is being written, we did
not implement the timeout to avoid DDOS.
:::

```csharp
Func<string, IEnumerable<string>> extractor(
    string pattern,
    RegexOptions options = RegexOptions.Multiline | RegexOptions.Compiled)
```

```csharp
Func<string, IEnumerable<string>> words = extractor(@"\w+");
IEnumerable<string> words(@"Lorem ipsum dolor sit amet.");
/*
"Lorem", "ipsum", "dolor", "sit", "amet"
*/

string ipPattern = @"(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"

Func<string, IEnumerable<string>> ips = extractor(ipPattern)

IEnumerable<string> ipList = ips(@"10.1.1.1
0.0.0.0
10.0.0.0
100.0.0.0
255.0.0.255")
/*
"10.1.1.1", "0.0.0.0", "10.0.0.0", "100.0.0.0", "255.0.0.255"
*/

```
