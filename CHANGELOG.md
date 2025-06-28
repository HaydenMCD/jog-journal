# Runner App Changelog :calendar:

## Merged :heavy_check_mark:

### [`#46`](https://github.com/HaydenMCD/jog-journal/pull/46) Sprint 1
Anthony Legg
### [`#43`](https://github.com/HaydenMCD/jog-journal/pull/43) Revert "#26 create sign up screen merge to Development"
Hayden McDowall
### [`#37`](https://github.com/HaydenMCD/jog-journal/pull/37) #26 create sign up screen merge to Development
Hayden McDowall
### [`#24`](https://github.com/HaydenMCD/jog-journal/pull/24) 3 link to firebase database merge into Development
Hayden McDowall
### [`#23`](https://github.com/HaydenMCD/jog-journal/pull/23) 15 create statistics view merge into Development
Hayden McDowall
### [`#20`](https://github.com/HaydenMCD/jog-journal/pull/20) Merge 15-create-statistics-view to main
Hayden McDowall
### [`#14`](https://github.com/HaydenMCD/jog-journal/pull/14) Kilometer input section merge into main
Hayden McDowall

### Refactored

- [`af5d787`](https://github.com/HaydenMCD/jog-journal/commit/af5d787fabe25017bd1884c8d0572b2dff525ade) - 
#28 refactor `kilometerinput.css` to use tailwind
21 June 2025 - Anthony Legg

### Bug Fixes

- [`9946c8f`](https://github.com/HaydenMCD/jog-journal/commit/9946c8f7f48f17fb370096445427330e5c94d833) - 
#28 bug fix progress bar `var()` line 13
11 June 2025 - Anthony Legg

## Commits :heavy_check_mark:

- [`#0b9aa4e`](https://github.com/HaydenMCD/jog-journal/commit/0b9aa4e07a09f47cd7aa91c7603c5f74df6ac9b9) - 
#33 update husky pre-commit hook

add `git add changelog.md` command
28 June 2025 - Anthony Legg

- [`#0b92dba`](https://github.com/HaydenMCD/jog-journal/commit/0b92dba28272ae5b2703e51f7f00dc3f724172f9) - 
#33 undo: remove cz-conventional-changelog dev dep
28 June 2025 - Anthony Legg

- [`#49ee4ed`](https://github.com/HaydenMCD/jog-journal/commit/49ee4ed8242011617277e58d747a576e475126c8) - 
#33 install auto changelog dev deps
28 June 2025 - Anthony Legg

- [`#c6b8ed8`](https://github.com/HaydenMCD/jog-journal/commit/c6b8ed8654e44ef5d042472e8ed3f6aaa003b19a) - 
Merge PR #49 from 39-install-and-configure-lint-staged-package

39 Install and configure lint staged package

## Completed

1. installed and configured [lint-staged](https://github.com/lint-staged/lint-staged) package
2. installed and configured [husky](https://typicode.github.io/husky/get-started.html) commit hooks package
- configured pre-commit script to run lint-staged & prettier
3. added `lint-staged` and `husky` specific config in `package.json`
- removed `browser-list` object left in from the non-vite app
25 June 2025 - Anthony Legg

- [`#c1a2382`](https://github.com/HaydenMCD/jog-journal/commit/c1a2382f1f6de40297e66555bdc88c94f42d08f5) - 
#39 add additional file formats to `lint-staged`
25 June 2025 - Anthony Legg

- [`#bf4c330`](https://github.com/HaydenMCD/jog-journal/commit/bf4c330fe1273f7afdc147fafbd147f5f384910f) - 
#39 add css to lint-staged handlers
25 June 2025 - Anthony Legg

- [`#2170fae`](https://github.com/HaydenMCD/jog-journal/commit/2170fae92cff5ce941aece64bf3735d2e0ab5ee4) - 
#39 add `git add .` after lint-staged
24 June 2025 - Anthony Legg

- [`#b721956`](https://github.com/HaydenMCD/jog-journal/commit/b7219560f8317e0bc78aa39d4424910ff10f7d07) - 
#39 add package.json config for husky and lint-staged

removed browser list object left in from the original react app config
24 June 2025 - Anthony Legg

- [`#df52ed3`](https://github.com/HaydenMCD/jog-journal/commit/df52ed35b32b9750667ec425d30c84faee8e49d1) - 
#39 init husky hooks package

add lint-staged script to pre-commit hook
24 June 2025 - Anthony Legg

- [`#ffaa2eb`](https://github.com/HaydenMCD/jog-journal/commit/ffaa2eb2cb76f2fb6668d73005d6635f608b5bdc) - 
#39 install husky commit hooks package
24 June 2025 - Anthony Legg

- [`#575ffe0`](https://github.com/HaydenMCD/jog-journal/commit/575ffe0ca6213484c08682ee31ff330a5feb0293) - 
#39 install `lint-staged` package
24 June 2025 - Anthony Legg

- [`#af5d787`](https://github.com/HaydenMCD/jog-journal/commit/af5d787fabe25017bd1884c8d0572b2dff525ade) - 
#28 refactor `kilometerinput.css` to use tailwind
21 June 2025 - Anthony Legg

- [`#89c329c`](https://github.com/HaydenMCD/jog-journal/commit/89c329cf6e1a802bdb4bac8673b3ba76c1c68f61) - 
#28 move button css to `app.css`

button style is globally available + be overwritten as needed
21 June 2025 - Anthony Legg

- [`#be7e6e3`](https://github.com/HaydenMCD/jog-journal/commit/be7e6e328f003c6a760030e953a975756e0d3a8d) - 
#28 `constants.css` rename input border
21 June 2025 - Anthony Legg

- [`#1eb1912`](https://github.com/HaydenMCD/jog-journal/commit/1eb191296b13d07b6bf6662bed32fe4010424982) - 
#28 `auth.css` replace classes with tailwind

kept original css for reference
21 June 2025 - Anthony Legg

- [`#39098b6`](https://github.com/HaydenMCD/jog-journal/commit/39098b6feb96e616ae241deb2ef4a50b410d92e5) - 
#28 remove text colour declaration from `header.css`

set dark/light mode background
21 June 2025 - Anthony Legg

- [`#b9fa959`](https://github.com/HaydenMCD/jog-journal/commit/b9fa9591b1c8032f34c3d0abae226cd619d676f5) - 
#28 set dark/light mode tailwind classes in `app.css` body tag

setting default colours here means font colours dont need to be re-declared elsewhere unless they need to be different
21 June 2025 - Anthony Legg

- [`#0cc8057`](https://github.com/HaydenMCD/jog-journal/commit/0cc80574c68603c9fbd1fbb1ba04e70692d29980) - 
#28 set dark/light mode colors in `constants.css`
21 June 2025 - Anthony Legg

- [`#d35e18f`](https://github.com/HaydenMCD/jog-journal/commit/d35e18ff50b8e15135fa09bbd7626e6e0dfbfc63) - 
#28 apply tailwind custom colour to body background
21 June 2025 - Anthony Legg

- [`#a96354a`](https://github.com/HaydenMCD/jog-journal/commit/a96354af41b21832d476e0006fad05e366bf88ee) - 
#28 reorder `@theme` and `:root` declarations

apply values directly in `@theme` instead of referencing `:root` variables
21 June 2025 - Anthony Legg

- [`#44b0c92`](https://github.com/HaydenMCD/jog-journal/commit/44b0c92889a9994f208e25ca90da437962ac1dbc) - 
build: add package security patch
20 June 2025 - Anthony Legg

- [`#7db9524`](https://github.com/HaydenMCD/jog-journal/commit/7db952451d78a765c58f165c7eefecd091517b65) - 
#28 update auth components to use auth.css
20 June 2025 - Anthony Legg

- [`#27abe2b`](https://github.com/HaydenMCD/jog-journal/commit/27abe2b0e785eaa2c69d32acddb7101ae921d913) - 
#28 delete login signup css files

remove duplicate classes
20 June 2025 - Anthony Legg

- [`#ca7fb6e`](https://github.com/HaydenMCD/jog-journal/commit/ca7fb6e5d4d9151ef933693317cf91160bf967bf) - 
#28 update kilometerinput.css import order
20 June 2025 - Anthony Legg

- [`#220e0fa`](https://github.com/HaydenMCD/jog-journal/commit/220e0fa26726e401664fa48dbe5302be3f31d61d) - 
#28 update auth.css import order
20 June 2025 - Anthony Legg

- [`#5d82ee1`](https://github.com/HaydenMCD/jog-journal/commit/5d82ee112d322dec160bb140fcb1a36d2864005e) - 
#28 update .css import order
20 June 2025 - Anthony Legg

- [`#7a39c8b`](https://github.com/HaydenMCD/jog-journal/commit/7a39c8b86ca543e9b79306ff343e1fdb7b377ab3) - 
#28 update app.css to use tailwind

remove font declarations
20 June 2025 - Anthony Legg

- [`#c871a24`](https://github.com/HaydenMCD/jog-journal/commit/c871a246abc09d4a7c3cd70fb0c2f0d19b5d2a4d) - 
#28 update statsview.css to use tailwind

format file
20 June 2025 - Anthony Legg

- [`#20760ca`](https://github.com/HaydenMCD/jog-journal/commit/20760ca80503bc23855210f0797160245784c0f5) - 
#28 update statsview.css to use tailwind

add relative units instead of pixels
20 June 2025 - Anthony Legg

- [`#600bc0f`](https://github.com/HaydenMCD/jog-journal/commit/600bc0f216c263c40a08c0d43d9fd668b1b3ccec) - 
#28 tracker.css update wrapper with tailwind classes
20 June 2025 - Anthony Legg

- [`#d33e172`](https://github.com/HaydenMCD/jog-journal/commit/d33e172774255c56adbe7d1904c595a44a9c51c1) - 
#28 replace kilometer container will tailwind classes
20 June 2025 - Anthony Legg

- [`#7703163`](https://github.com/HaydenMCD/jog-journal/commit/7703163dc2a2bc0f534c816520556b51b21716fd) - 
#28 update kilometerinput.css to use relative units
20 June 2025 - Anthony Legg

- [`#98e3044`](https://github.com/HaydenMCD/jog-journal/commit/98e30448d1ef38fa5341b461f1570fd7d50591aa) - 
#28 import tailwind into auth.css

combine login and signup css files into a single file to remove duplication
20 June 2025 - Anthony Legg

- [`#386ea96`](https://github.com/HaydenMCD/jog-journal/commit/386ea965b854622dcdad38a446f5f4db5a769877) - 
#28 import tailwind to kilometerinput.css file
20 June 2025 - Anthony Legg

- [`#13d4951`](https://github.com/HaydenMCD/jog-journal/commit/13d4951eb011c464b3aa689a3328149fa85ea5cf) - 
#28 import tailwind to statsview.css file
20 June 2025 - Anthony Legg

- [`#1d3fc79`](https://github.com/HaydenMCD/jog-journal/commit/1d3fc79abdd5f848c4848c822c9ed2f73c8dda59) - 
#28 import tailwind to tracker css file
20 June 2025 - Anthony Legg

- [`#6a84e36`](https://github.com/HaydenMCD/jog-journal/commit/6a84e36041f6e83fb5c621e1ca7807a53bf99c8b) - 
#28 kilometer input css

convert px to relative unit size
20 June 2025 - Anthony Legg

- [`#0c7dfef`](https://github.com/HaydenMCD/jog-journal/commit/0c7dfef446875cc64c4ad77ecaa98907c57f3bdc) - 
#28 header.css convert font unit

switched to relative font size to allow adjustment of font size depending on browser/device settings. used `https://cssunitconvert.com/convert/px-to-ch` to calculate conversion
20 June 2025 - Anthony Legg

- [`#9946c8f`](https://github.com/HaydenMCD/jog-journal/commit/9946c8f7f48f17fb370096445427330e5c94d833) - 
#28 bug fix progress bar `var()` line 13
11 June 2025 - Anthony Legg

- [`#3e65ff6`](https://github.com/HaydenMCD/jog-journal/commit/3e65ff679c33141a7a977c08c295acf9386ee3bd) - 
#28 tailwind css and :root

variables combined. Header component adapted to use tailwind css classes
11 June 2025 - Anthony Legg

- [`#16471c6`](https://github.com/HaydenMCD/jog-journal/commit/16471c6bf4240fe10fd5f480a02e3cee77d6b0d6) - 
#28 update .prettierrc to use tailwind

class sorting package
9 June 2025 - Anthony Legg

- [`#f2a7962`](https://github.com/HaydenMCD/jog-journal/commit/f2a7962287bc0e7fa3a191e36618e42683bddaad) - 
#28 install prettier tailwind class sort package
9 June 2025 - Anthony Legg

- [`#7acf41d`](https://github.com/HaydenMCD/jog-journal/commit/7acf41d068f302eee51791a8d6b63a0530688e0f) - 
#28 add tailwindcss plugins

to `app.css`
9 June 2025 - Anthony Legg

- [`#8b5aabc`](https://github.com/HaydenMCD/jog-journal/commit/8b5aabcb58aeb4097bb06dea454565e9a9f43768) - 
#28 install tailwind dev dependencies

forms and typography
9 June 2025 - Anthony Legg

- [`#1fae14f`](https://github.com/HaydenMCD/jog-journal/commit/1fae14f4175b161f2a5f70551066220a944c1f1e) - 
#28 init tailwindcss v4 using vite

install guide
9 June 2025 - Anthony Legg

- [`#5be406d`](https://github.com/HaydenMCD/jog-journal/commit/5be406dd65efe57307fb8541d3504641220504ee) - 
#27 add fix to header.css

remove height from wrapper
8 June 2025 - Anthony Legg

- [`#0ae1f5b`](https://github.com/HaydenMCD/jog-journal/commit/0ae1f5b5c696779d5c5f624fef7c54e91a3d245c) - 
#27 remove index.css from src/

combine contents with /src/css/app.css
8 June 2025 - Anthony Legg

- [`#f310072`](https://github.com/HaydenMCD/jog-journal/commit/f310072a34192a1249ec8bfb9084669cc9feef85) - 
#27 upddate statsview.css to use :root variables
8 June 2025 - Anthony Legg

- [`#819144e`](https://github.com/HaydenMCD/jog-journal/commit/819144ee5f11851052886126c033983a8476ac20) - 
#27 upddate signup.css to use :root variables
8 June 2025 - Anthony Legg

- [`#8e321c5`](https://github.com/HaydenMCD/jog-journal/commit/8e321c502e1e16d5749c5cdb165cc9e505e600fa) - 
#27 upddate login.css to use :root variables
8 June 2025 - Anthony Legg

- [`#a357f94`](https://github.com/HaydenMCD/jog-journal/commit/a357f9447468a8585c352c3730ddfa7d65ad6660) - 
#27 upddate kilometerinput.css to use variables
8 June 2025 - Anthony Legg

- [`#3173a56`](https://github.com/HaydenMCD/jog-journal/commit/3173a56f2d6642e9d736910eb157b4b895b0602e) - 
#27 add default font size to :root

update header.css to use variables, remove root font-size declarations
8 June 2025 - Anthony Legg

- [`#b5f6418`](https://github.com/HaydenMCD/jog-journal/commit/b5f641858be9ca8b9c1477f8d6205091dd2d3a16) - 
#27 import constants.css in App.css

replace colour hex with css variable
8 June 2025 - Anthony Legg

- [`#bc0ea26`](https://github.com/HaydenMCD/jog-journal/commit/bc0ea26a6c7d228eeb8ff671edc3342b2697125f) - 
#27 create constants css file

use apps currently used colours
8 June 2025 - Anthony Legg

- [`#f948932`](https://github.com/HaydenMCD/jog-journal/commit/f948932d69c70d86e2345c10021193899f101444) - 
Removed signup from app.js
20 May 2025 - Hayden

- [`#71f9f67`](https://github.com/HaydenMCD/jog-journal/commit/71f9f674d47c89249c9fa2895c7a38a34d432d7f) - 
Chaned input class names to form-input. Changed all input's to self closing tags
20 May 2025 - Hayden

- [`#ce80320`](https://github.com/HaydenMCD/jog-journal/commit/ce8032098793a06e5d5f39e11bcdd56a974fe6d0) - 
Removed sign up page from app.js
18 May 2025 - Hayden

- [`#53ac8b2`](https://github.com/HaydenMCD/jog-journal/commit/53ac8b27d9ab17d1871643ba82c36988f7a5ed84) - 
Added name attribute to input fields. Matched class names to name.
18 May 2025 - Hayden

- [`#16142f2`](https://github.com/HaydenMCD/jog-journal/commit/16142f227ea639fbfbd729df63496d822a5cccd2) - 
Added input fields required for creating the users account. Added input fields for additional info that will be used later.
14 May 2025 - Hayden

- [`#2bf9f1d`](https://github.com/HaydenMCD/jog-journal/commit/2bf9f1ddeec370ecd5595f307a9f5d2d42b46fb3) - 
Added new database variables.
28 April 2025 - Hayden

- [`#6df0e6b`](https://github.com/HaydenMCD/jog-journal/commit/6df0e6bb418210b36ccd6f7c60417b1cbb37f86e) - 
Added .env to gitignore. Renamed env file to example file.
28 April 2025 - Hayden

- [`#5e0154e`](https://github.com/HaydenMCD/jog-journal/commit/5e0154eefe7572cea463255dd8792008f764daae) - 
Added placeholders for all statistics. Created a 2x4 grid for the statistics to be displayed in.
28 April 2025 - Hayden

- [`#383ab53`](https://github.com/HaydenMCD/jog-journal/commit/383ab537f801dc08e92f2953286eed5e9c69cd20) - 
Removed seperate components for stat view page. Created single file for all math to be done which will be accessed when/where needed. Added more statistics for future implementation
28 April 2025 - Hayden

- [`#502b13c`](https://github.com/HaydenMCD/jog-journal/commit/502b13c715506189dfeb72176cd809328475ce78) - 
Created a folder for all stat related components. I created components for each statistic that will be shown. More will be added in the future.
28 April 2025 - Hayden

- [`#04b8827`](https://github.com/HaydenMCD/jog-journal/commit/04b882724b08ee12e25ba9347caa726d68904f6c) - 
Deleted env file.
28 April 2025 - Hayden

- [`#f7dbacc`](https://github.com/HaydenMCD/jog-journal/commit/f7dbacc988c92ce6d3f59ee77f26d33ce91fe172) - 
Added env file to ignore, added example file again. New database has been created with new key.
28 April 2025 - Hayden

- [`#d684f6a`](https://github.com/HaydenMCD/jog-journal/commit/d684f6a98dadb0bbb68da71f12a88092893763c6) - 
Added a placeholder for where the round progress bar will eventually go. Renamed the Tracker component/page to StatsView as this is a more accurate name.
28 April 2025 - Hayden

- [`#79689e0`](https://github.com/HaydenMCD/jog-journal/commit/79689e0db7e2e6e17def08476355f0ec52a401ec) - 
Added envexample file. Added error handling on addDoc function. Added quick fix for negatve kilometers being submitted. Added inline comments
13 January 2025 - Hayden

- [`#ac3704c`](https://github.com/HaydenMCD/jog-journal/commit/ac3704c53e7477d101b57d5695a53c870d5cb5fa) - 
Added addDoc function when form submitted. Created a collection with called {year} runs (if not already there). Then adds the kilometers entered and timestamp.
13 January 2025 - Hayden

- [`#c94fb04`](https://github.com/HaydenMCD/jog-journal/commit/c94fb047ebe76d9f98e0a0a0e9bc05aedbb34a13) - 
Added initialisation file for firebase.
13 January 2025 - Hayden

- [`#5d4ed7c`](https://github.com/HaydenMCD/jog-journal/commit/5d4ed7cdf7a8f40b3f215f89de11ebf7fe44c290) - 
Installed firebase. Updated gitignore
13 January 2025 - Hayden

- [`#36757c8`](https://github.com/HaydenMCD/jog-journal/commit/36757c857e8d3cf5c29b18dbf0e98ac701f0ab09) - 
Set enter kilometer view min width. Added statistics view with basic info (more will be added once a database is linked).
13 January 2025 - Hayden

- [`#29b88a5`](https://github.com/HaydenMCD/jog-journal/commit/29b88a5040ba0b054f4d4700199ebb34fa64a3d2) - 
Added submit button. Wrapped the input in a form. Added basic css. Added title for kilometer input section
10 January 2025 - Hayden

- [`#7a337ac`](https://github.com/HaydenMCD/jog-journal/commit/7a337ace9993c5e7c3ad6afbbef4718a63cfa4b0) - 
Added an input for the kms ran. Added an increase and decrease button on either side of the input
10 January 2025 - Hayden

- [`#83f9de3`](https://github.com/HaydenMCD/jog-journal/commit/83f9de30076e5ca7b697bfad40c292d68108358d) - 
Added calulation for current day in the year and remaining days left in the year.
7 January 2025 - Hayden

- [`#c030a78`](https://github.com/HaydenMCD/jog-journal/commit/c030a787e2c1ba7369d929beba42350eb44126c6) - 
Created header component. Moved title and slogan to the header component. Added simple css to the header.
4 January 2025 - Hayden

- [`#5668eef`](https://github.com/HaydenMCD/jog-journal/commit/5668eeff660b08ce8e2f00923b0e4432c4f48499) - 
Update README.md
4 January 2025 - Hayden McDowall

- [`#5cf3ba8`](https://github.com/HaydenMCD/jog-journal/commit/5cf3ba8bd3763f440fc1b3425b633fb0678de861) - 
Changed file structure
4 January 2025 - Hayden

- [`#94ea985`](https://github.com/HaydenMCD/jog-journal/commit/94ea98563183fa25567271d0a2d8a8949ff55d96) - 
initial commit. Created project and removed default content. Added header and slogan.
4 January 2025 - Hayden


---