+++
title = "Dracula Code Samples"
date = "2020-01-03"
description = "Sample article showcasing basic Markdown syntax."
taxonomies.tags = [
    "markdown",
    "syntax",
]
[extra]
math = true
+++


```python
# Once upon a time...

class Vampire:
  def __init__(self, props):
    self.location = props['location']
    self.birthDate = props['birthDate']
    self.deathDate = props['deathDate']
    self.weaknesses = props['weaknesses']

  def get_age(self):
    return self.calc_age()

  def calc_age(self):
    return self.deathDate - self.birthDate

# ...there was a guy named Vlad

Dracula = Vampire({
  'location': 'Transylvania',
  'birthDate': 1428,
  'deathDate': 1476,
  'weaknesses': ['Sunlight', 'Garlic']
})
```

```html,linenos
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dracula</title>
  </head>
  <body>
    <!-- Once upon a time... -->
    <h1>Vampires</h1>

    <form>
      <label for="location">Location</label>
      <input type="text" name="location" value="Transylvania" />
      <label for="birthDate">Birth Date:</label>
      <input type="number" name="birthDate" value="1428" />
      <label for="deathDate">Death Date:</label>
      <input type="number" name="deathDate" value="1476" />
      <label for="weaknesses">Weaknesses:</label>
      <input type="checkbox" name="weaknesses" value="Sunlight" checked />
      <input type="checkbox" name="weaknesses" value="Garlic" checked />

      <button type="submit">Submit</button>
    </form>

    <script>
      // ...there was a guy named Vlad
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        const { birthDate, deathDate } = e.target;
        const age = deathDate.value - birthDate.value;
      });
    </script>
  </body>
</html>
```

```md
<!--
  Once a upon a time...
-->

# Vampires

| Name       | Value            |
| ---------- | ---------------- |
| location   | Transylvania     |
| birth date | 1428             |
| death date | 1476             |
| weaknesses | Sunlight, Garlic |

<!-- ...There was a guy named Vlad -->

> The **age** is the `deathDate` minus the `birthDate`
```
