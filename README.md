<p  align="center"><img  src="./logo.jpg"  alt="muya"  height="150"></p>



**Muya** originated from [Mark Text](https://github.com/marktext/marktext), which was originally used in the Mark Text and provides Markdown editing support for Mark Text. Today, Muya is available as a stand-alone library that provides an efficient Markdown editing experience for many web browser applications.

:a: Muya is still under development and should not be used for production.

## Installing

Still in development process, and can not install by npm.

## Usage

```javascript
import Muya from 'muya'

const container = document.querySelector('#editor')
const muya = new Muya(container)
```

## Documents

Coming soon!!!

## Development

[commit-msg-guideline](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

```sh
# step1: install dependences
pnpm install
# step2: run the development codes
pnpm dev
```

## Build

```sh
pnpm build
```

## FAQ

❓ **What is the relationship between Mark Text and Muya?**

Muya is derived from Mark Text. Our team believes that Muya should not be limited to desktop applications. It should also run in a web browser, so we have done some compatibility with browsers and Electron applications, so that Muya can leave Electron Apps and can run into different browser environments.

❓**What is the relationship between Mark Text's version and the Muya's version?**

None!

## Built with muya

- [Mark Text](https://github.com/marktext/marktext) - Next generation markdown editor, running on platforms of MacOS Windows and Linux.

## License

MIT © [Jocs](https://github.com/Jocs)
