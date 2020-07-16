# range

generates sequence of numbers.

## by count

generates series of number starting from zero increasing by one.
`range(0)` returns empty.

```csharp
IEnumerable<int> range(int count)
```

```csharp
IEnumerable<int> numbers = range(10);
/*
0 1 2 3 4 5 6 7 8 9
*/
```

## from start to end

generates series of number from number start to end increasing by one.

```csharp
IEnumerable<int> range(int start, int end)
```

```csharp
range(1, 4)
/*
1 2 3 4
*/
```

## from start to end with step size

generates series of number from number start to end increasing by step size.

```csharp
IEnumerable<int> range(int start, int end, int step)
```

```csharp
range(0, 15, 5)
/*
0, 5, 10, 15
*/

range(0, -3, -1)
/*
0, -1, -2, -3
*/

```
