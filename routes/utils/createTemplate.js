const createTemplate = (html, initialState) =>
  `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
      <link rel="manifest" href="/favicon/manifest.json">
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff">
      <title>RyanCollins.io</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css"/>
      <link href="https://diegoddox.github.io/react-redux-toastr/3.0.1/react-redux-toastr.min.css" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Audiowide:100,400" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:400,300,700|Lato:400,300,700" rel="stylesheet">
      <link href="/main.cbd30fbe5a2c95c0e719a6f2365b5808.css" rel="stylesheet">
    </head>
    <body>
      <div id="app">${html}</div>
      <script type="text/javascript" src="/main.5207b38ded3f163ad68e.js"></script>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
    </body>
  </html>
  `;


export default createTemplate;
