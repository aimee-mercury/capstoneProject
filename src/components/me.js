function navigateTo(page) {
    // You can load the content of the respective page here.
    // For simplicity, let's just display a message for each page.
    let content = '';

    switch (page) {
      case 'home':
        content = 'Welcome to the Home Page!';
        break;
      case 'about':
        content = 'Learn more about us on the About Page.';
        break;
      case 'contact':
        content = 'Contact us on the Contact Page.';
        break;
      default:
        content = 'Page not found.';
        break;
    }

    // Update the content section with the selected page content.
    document.getElementById('content').innerHTML = content;
  }