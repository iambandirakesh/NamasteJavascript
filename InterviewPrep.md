# HTML Interview Questions and Answers

- **Do you know what is `HTML` and what it stands for?**  
  **Answer:** HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages.

- **Can you explain if `HTML` is a programming language or not?**  
  **Answer:** HTML is not a programming language; it is a markup language used to structure content on the web.

- **Can you explain the difference between `W3C` and `WHATWG`?**  
  **Answer:** W3C (World Wide Web Consortium) and WHATWG (Web Hypertext Application Technology Working Group) are organizations that define web standards. W3C focuses on formal standards, while WHATWG maintains a living standard approach.

- **Can you write a standard `HTML5` document structure?**  
  **Answer:**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTML5 Document</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
  </html>
  ```

- **Can you explain the purpose of `<!Doctype html>`?**  
  **Answer:** It declares the document type and version of HTML being used, ensuring correct rendering in browsers.

- **Can you explain the difference between HTML `elements` and `tags`?**  
  **Answer:** Tags are the keywords enclosed in angle brackets (`<tag>`), while elements include both the tags and their content.

- **What are `semantic elements` in HTML5? Can you name some of them?**  
  **Answer:** Semantic elements give meaning to web content. Examples: `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`.

- **Do you know how many ways there are to reference CSS in an HTML document?**  
  **Answer:** Three ways: Inline (`style="color: red;"`), Internal (`<style>` in `<head>`), and External (`<link rel="stylesheet">`).

- **Do you know how to create hyperlinks?**  
  **Answer:** Using the `<a>` tag:

  ```html
  <a href="https://example.com">Visit Example</a>
  ```

- **Do you know how to create a hyperlink on a webpage that allows you to send an email when clicked?**  
  **Answer:** Using the `mailto:` attribute:

  ```html
  <a href="mailto:someone@example.com">Send Email</a>
  ```

- **Do you know the difference between `DIV` and `SPAN` in HTML?**  
  **Answer:** `<div>` is a block-level element, while `<span>` is an inline element.

- **Do you know the purpose of using the `iFrame` tag?**  
  **Answer:** It embeds another webpage within a web page.

- **Can you name all media element tags introduced by HTML5?**  
  **Answer:** `<audio>`, `<video>`, and `<source>`.

- **Do you know what are the common lists used when designing a webpage?**  
  **Answer:** Ordered (`<ol>`), unordered (`<ul>`), and definition lists (`<dl>`).

- **Do you know the use of `canvas` elements in HTML5?**  
  **Answer:** It is used to draw graphics dynamically using JavaScript.

- **Can you name all the heading-level elements that an HTML document supports?**  
  **Answer:** `<h1>` to `<h6>`.

- **Can you create a hyperlink that opens a URL into a new tab when clicked?**  
  **Answer:**

  ```html
  <a href="https://example.com" target="_blank">Open in New Tab</a>
  ```

- **Do you know about the `SVG` element and why we use it?**  
  **Answer:** SVG (Scalable Vector Graphics) is used to create vector-based images that scale without losing quality.

- **Do you know how to set an image as a background image of a webpage?**  
  **Answer:** Using CSS:

  ```css
  body {
    background-image: url("image.jpg");
    background-size: cover;
  }
  ```

- **Do you know the type of video formats that are supported by HTML5?**  
  **Answer:** MP4, WebM, Ogg.

- **Do you know the use of `figure` and `figcaption` tag?**  
  **Answer:** They group media content with captions.

- **Can you explain the purpose of using alternative texts in images?**  
  **Answer:** It provides accessibility for visually impaired users and helps with SEO.

- **Do you know how to embed a form on a webpage?**  
  **Answer:** Using the `<form>` tag:

  ```html
  <form action="submit.php" method="post">
    <input type="text" name="name" />
    <input type="submit" />
  </form>
  ```

- **Do you know about the `checkbox` and `radio` button and why we use them?**  
  **Answer:** Checkboxes allow multiple selections, while radio buttons allow only one selection in a group.

- **Do you know what are the tags we use to represent tabular data on a page?**  
  **Answer:** `<table>`, `<tr>`, `<td>`, `<th>`, `<thead>`, `<tbody>`, `<tfoot>`.

- **Do you know which attribute we use to combine multiple rows and columns?**  
  **Answer:** `rowspan` and `colspan`.

- **Do you know how to add comments in HTML?**  
  **Answer:**

  ```html
  <!-- This is a comment -->
  ```

- **Do you know about SEO and how we can improve the SEO of a webpage?**  
  **Answer:** SEO (Search Engine Optimization) improves visibility in search engines. Best practices include using semantic tags, meta descriptions, alt attributes, and fast loading speeds.

- **Do you know the meta tags that we must include in an HTML document?**  
  **Answer:**

  ```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Webpage description" />
  ```

- **How can you reduce a page’s load time?**  
  **Answer:** By optimizing images, using minified CSS/JS, leveraging caching, and using a CDN.
