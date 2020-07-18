# climber

## recursively visits and flatten a tree-like data structure

returns an iterator with parent and depth information from a tree-like data structure.

suppose that you have simple tree-like data structure like:

```csharp
class Tree
{
    public List<Tree> Leafs { get; set; }
    public string Id { get; set; }
    public override string ToString() => $"{Id}";
}
```

lets define a hardcoded data:

```csharp
var tree = new Tree()
            {
                Id = "1",
                Leafs = new List<Tree>()
                {
                    new Tree() {
                        Id = "1.1",
                        Leafs = new List<Tree>
                        {
                            new Tree() {
                                Id = "1.1.1"
                            },
                            new Tree() {
                                Id = "1.1.2"
                            }
                        }
                    },
                    new Tree() {
                        Id = "1.2",
                        Leafs = new List<Tree>
                        {
                            new Tree() {
                                Id = "1.2.1",
                                Leafs = new List<Tree>() {
                                    new Tree() {
                                        Id = "1.2.1.1",
                                        Leafs = new List<Tree> () {
                                            new Tree {
                                                Id = "1.2.1.1.1"
                                            }
                                        }
                                    },
                                    new Tree() {
                                        Id = "1.2.1.2",
                                        Leafs = new List<Tree> () {
                                            new Tree {
                                                Id = "1.2.1.2.1"
                                            }
                                        }
                                    }
                                }
                            },
                            new Tree() {
                                Id = "1.2.2"
                            }

                        }
                    },
                }
            };
```

calling `climber`

```csharp
 var leafs = climber(root: tree,
                        leafs: t => t.Leafs,
                        startDepth: 1);
```

Will return tuple list like that:

```txt
(1, 1, NULL)
(2, 1.1, 1)
(3, 1.1.1, 1.1)
(3, 1.1.2, 1.1)
(2, 1.2, 1)
(3, 1.2.1, 1.2)
(4, 1.2.1.1, 1.2.1)
(5, 1.2.1.1.1, 1.2.1.1)
(4, 1.2.1.2, 1.2.1)
(5, 1.2.1.2.1, 1.2.1.2)
(3, 1.2.2, 1.2)
```

You can easily represent the tree like this:

```txt
└ 1
·└ 1.1
··└ 1.1.1
··└ 1.1.2
·└ 1.2
··└ 1.2.1
···└ 1.2.1.1
····└ 1.2.1.1.1
···└ 1.2.1.2
····└ 1.2.1.2.1
··└ 1.2.2
```

```csharp
IEnumerable<(int, T, T)> climber<T>(T root,
                                    Func<T, IEnumerable<T>> leafs,
                                    int startDepth)
```
