기본동작 예시 ( 페이지가 새로고침 됩니다 )

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Default Form Behavior Example</title>
</head>
<body>
  <form action="submit.php" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>

```

** input에 항상 name = "" 을 달아줘야 합니다 아니면 오류!
axios 예시
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form with Axios Example</title>
</head>
<body>
  <form id="myForm">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password"><br><br>
    <button type="button" onclick="submitForm()">Submit</button>
  </form>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    function submitForm() {
      const formData = new FormData(document.getElementById('myForm'));
      
      axios.post('https://example.com/api/login', formData)
        .then(response => {
          console.log(response.data);
          // 여기에 추가적인 작업을 할 수 있습니다 (예: 응답에 따라 페이지 리디렉션 등)
        })
        .catch(error => {
          console.error('Error:', error);
          // 여기에 오류 처리 로직을 추가할 수 있습니다
        });
    }
  </script>
</body>
</html>

```

Fetch API 예시

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form with Fetch Example</title>
</head>
<body>
  <form id="myForm">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password"><br><br>
    <button type="button" onclick="submitForm()">Submit</button>
  </form>

  <script>
    function submitForm() {
      const formData = new FormData(document.getElementById('myForm'));

      fetch('https://example.com/api/login', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // 여기에 추가적인 작업을 할 수 있습니다 (예: 응답에 따라 페이지 리디렉션 등)
      })
      .catch(error => {
        console.error('Error:', error);
        // 여기에 오류 처리 로직을 추가할 수 있습니다
      });
    }
  </script>
</body>
</html>

```