# read

## read stream as string

read whole stream as string with UTF8 encoding ignoring BOM character and with 
4KB buffer size.

```csharp
string read(Stream stream)
```

```csharp
// source code from the unit test
var message = "Hello World"
var stream = new MemoryStream(Encoding.UTF8.GetBytes(message))

read(stream);
// "Hello World"

```
